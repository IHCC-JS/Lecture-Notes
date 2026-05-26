# Getting Started With JavaScript

## House Cleaning

- Talk about Syllabus/Schedule
    - You already should know HTML, CSS
- Talk about attendance
    - Show up every day
    - Zoom must show video
- Talk about late work
    - no late work
- How do I turn things in?
- Take Attendance and make note where people sit.
- [Show Intro to JS video](https://www.youtube.com/watch?v=DHjqpvDnNGE)

## [History of JS](https://www.w3schools.com/js/js_history.asp)

- JavaScript was written in 10 days by Brendan Eich.

- Al Gore introduced a bill called High Performance computer act of 1991 that funded building the first main stream web
  browser mosaic
- If you didn't know how young the internet really is:
- Today Show 1994: https://www.youtube.com/watch?v=UlJku_CSyNg
- There was no JS yet, just DOM
- One of the devs of Mosaic went on to work at NetScap and help build NetScap navigator
- NetScap navigator had around 80% market share in browsers
- The internet needed to be more powerful, Plan A was to use Java, that idea was bad
- Plan B was to build something new.
- Mocha (JS) was born in 10 days, they had no idea what they had built and the importance of it
- Mocha become LiveScript and shipped in Netscape Navigator 2.0 DEC-1995 and renamed it JavaScript (this was done just
  for
  marketing Java was very hot then)
- This small and upcoming company Microsoft wanted their own browser called IE and browned JS and called it JScript...
  sus
- Then [ECMA](https://ecma-international.org/) made JS standardized
- Then 1999 happened .com bobble and Y2k

## Getting System Ready For JS

### Browser

I recommend [firefox](https://www.mozilla.org/en-US/firefox/new/) not necessarily. Why do I recommend Firefox? FOSS

### Try JS in the Browser

- Open browser console
- Write `console.log('Hello World!')`
- Add words together.
  ```js
  console.log("Hello, World!");
  console.log("Hello", "World", "!");
  console.log("Welcome", "to", "CIS", 198, "JavaScript");
  ```
- All of these are valid

  ```js
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log(`Hello, World!`);
  ```

### Download [Node.JS](https://nodejs.org/en/download/current)

If you don't know if you have it installed, type the following in CMD

```bash
node -v
```

### Text Editor

You can use anything, but this is what I recommend.

- Download [VSCode](https://code.visualstudio.com/) or WebStorm
    - Or if you care about privacy [`VSCodium`](https://vscodium.com/)
- Editor Extensions:
    - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) so you can see your
      changes live. **Make sure** you have auto save on.
    - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to formate your code
      automatically. **Make sure** you enable it in settings.
    - [vscode-pdf](https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf) so you can see the HW in your
      editor.

## Git Org

Have students look at and Join the GitHub Organization.
Show students where their notes and homework are.

Also make sure students have Git installed.

```bash
git --version
```

## First JS Exercise

[//]: # (TODO make this exercise a bit more)
[//]: # (Most students already had Git, Node.js, and VSCode installed)
[//]: # (Don't step on L2's toes but make it a bit larger. Extra 5 minutes of content)

- Make HTML template using [Emmet](https://docs.emmet.io/cheat-sheet/)
- Add `<h1>Getting Started With JavaScript</h1>`
- Add an internal Script `<script>console.log("up and running");</script>`
- Run exercise in a browser and check the console.

