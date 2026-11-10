#!/usr/bin/env bash
# Converts lecture folders to URL-safe slugs and lecture READMEs to index.md.
#
#   ./conversionScript.sh [--apply] [ROOT_DIR ...]
#
# Default is a DRY RUN: it only prints what it would do. Nothing changes until --apply.
# Default ROOT_DIR is lu01-intro. Only directories INSIDE a root are renamed.
#
# Rules:
#   1. Every sub-directory is renamed to a slug: lowercase, spaces -> '-', odd chars removed.
#      ("L3 IO and Var" -> "l3-io-and-var"). node_modules is never touched.
#   2. README.md becomes index.md ONLY in the root itself and in lecture folders
#      (names like l1-..., l2-...). Other READMEs (e.g. demo) are left alone.
#   3. Front matter (title) is added to a new index.md if it has none.
#   4. Rename only; no files are deleted or overwritten. Uses `git mv` so history is kept.
#
# Safety: aborts if not at the git repo root, if the working tree has other uncommitted
# changes (apply mode), on any name collision, or on any error (set -euo pipefail).
# Every applied move is logged to conversion.log as a reversible `git mv` command.

set -euo pipefail
IFS=$'\n\t'

APPLY=0
ROOTS=()
for arg in "$@"; do
  case "$arg" in
    --apply) APPLY=1 ;;
    -h|--help) sed -n '2,20p' "$0"; exit 0 ;;
    -*) echo "Unknown option: $arg" >&2; exit 2 ;;
    *) ROOTS+=("${arg%/}") ;;
  esac
done
[ ${#ROOTS[@]} -eq 0 ] && ROOTS=("lu01-intro")

die() { echo "ERROR: $*" >&2; exit 1; }

top=$(git rev-parse --show-toplevel 2>/dev/null) || die "not inside a git repository"
[ "$(pwd -P)" = "$(cd "$top" && pwd -P)" ] || die "run this from the repo root: $top"

LOG="conversion.log"
SELF="$(basename "$0")"

if [ $APPLY -eq 1 ]; then
  dirty=$(git status --porcelain | grep -v -F -e " $SELF" -e " $LOG" || true)
  [ -z "$dirty" ] || die "uncommitted changes found. Commit or stash first:
$dirty"
  echo "APPLY MODE: renaming with git mv. Undo log: $LOG"
  : > "$LOG"
else
  echo "DRY RUN: nothing will change. Re-run with --apply to execute."
fi

slugify() {
  printf '%s' "$1" | tr '[:upper:]' '[:lower:]' | tr ' _' '--' \
    | sed -E 's/[^a-z0-9.-]//g; s/-+/-/g; s/^-+//; s/-+$//'
}

lower() { printf '%s' "$1" | tr '[:upper:]' '[:lower:]'; }

# Move with all safety checks. $1=src $2=dst
safe_mv() {
  local src="$1" dst="$2" same_ci=0
  [ -e "$src" ] || die "source missing: $src"
  [ "$(lower "$src")" = "$(lower "$dst")" ] && same_ci=1
  if [ $same_ci -eq 0 ] && { [ -e "$dst" ] || [ -L "$dst" ]; }; then
    die "target already exists, refusing to overwrite: $dst (from $src)"
  fi
  echo "  mv  $src  ->  $dst"
  if [ $APPLY -eq 1 ]; then
    if [ $same_ci -eq 1 ]; then
      # case-only change goes through a temp name (needed on case-insensitive filesystems)
      local tmp="${src}.__tmp_rename__"
      [ ! -e "$tmp" ] || die "temp name in use: $tmp"
      git mv -- "$src" "$tmp"
      git mv -- "$tmp" "$dst"
    else
      git mv -- "$src" "$dst"
    fi
    printf 'git mv -- %q %q\n' "$dst" "$src" >> "$LOG"
  fi
}

# Detect two siblings that would slugify to the same name (checked before any change).
check_collisions() {
  local root="$1" parent child s seen
  while IFS= read -r parent; do
    seen=$'\n'
    while IFS= read -r child; do
      s=$(slugify "$(basename "$child")")
      [ -n "$s" ] || die "name slugifies to empty: $child"
      case "$seen" in
        *$'\n'"$s"$'\n'*) die "two folders in '$parent' would both become '$s'" ;;
      esac
      seen="$seen$s"$'\n'
    done < <(find "$parent" -mindepth 1 -maxdepth 1 -type d ! -name node_modules ! -name .git | sort)
  done < <(find "$root" -type d ! -path '*/node_modules*' ! -path '*/.git*' | sort)
}

# Deepest first so renaming a parent never invalidates a child path.
rename_dirs() {
  local root="$1" d base slug
  while IFS= read -r d; do
    base=$(basename "$d"); slug=$(slugify "$base")
    [ "$base" = "$slug" ] && continue
    safe_mv "$d" "$(dirname "$d")/$slug"
  done < <(find "$root" -mindepth 1 -depth -type d ! -path '*/node_modules*' ! -path '*/.git*')
}

add_front_matter() {
  local f="$1" title="$2" tmp
  [ "$(head -n1 "$f")" = "---" ] && return
  tmp=$(mktemp)
  printf -- '---\ntitle: %s\n---\n\n' "$title" > "$tmp"
  cat "$f" >> "$tmp"
  cat "$tmp" > "$f"
  rm -f "$tmp"
  echo "  front matter added: $f"
}

readmes_to_index() {
  local root="$1" dir name title
  while IFS= read -r dir; do
    name=$(basename "$dir")
    if [ "$dir" != "$root" ] && ! [[ "$(slugify "$name")" =~ ^l[0-9]+- ]]; then continue; fi
    [ -f "$dir/README.md" ] || continue
    if [ -e "$dir/index.md" ] || [ -e "$dir/index.html" ]; then
      echo "  SKIP $dir: index.md/index.html already exists (rename the demo to example.html first)"
      continue
    fi
    title=$(grep -m1 -E '^# ' "$dir/README.md" | sed -E 's/^# +//' || true)
    [ -n "$title" ] || title="$name"
    safe_mv "$dir/README.md" "$dir/index.md"
    [ $APPLY -eq 1 ] && add_front_matter "$dir/index.md" "$title"
  done < <(find "$root" -type d ! -path '*/node_modules*' ! -path '*/.git*' | sort)
}

for root in "${ROOTS[@]}"; do
  case "$root" in /*|*..*) die "root must be a relative path inside the repo: $root" ;; esac
  [ -d "$root" ] || die "root not found: $root"
  echo "== $root =="
  check_collisions "$root"
  echo "-- folders --"
  rename_dirs "$root"
  echo "-- READMEs --"
  if [ $APPLY -eq 0 ]; then
    echo "  (dry run: README step is only listed for folders that already have slug names;"
    echo "   re-run after --apply of folders, or just use --apply, which handles both)"
  fi
  readmes_to_index "$root"
done

echo
echo "Links that may still use old names (review manually):"
grep -rnE --include='*.md' --include='*.html' '(LU[0-9]+ - |L[0-9] [A-Za-z]|README\.md)' "${ROOTS[@]}" || echo "  none found"

if [ $APPLY -eq 1 ]; then
  echo "Done. Review with: git status && git diff -M --stat"
  echo "Undo moves: tac $LOG | bash   (front matter edits: git checkout the files first)"
else
  echo "Dry run complete. No changes made."
fi
