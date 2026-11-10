---
title: LU07 - Templates
---

# LU07 - Templates

<!-- TODO add links to learning resources -->

## Lecture Notes

<ul>
  {% assign unit = page.path | split: "/" | first %}
  {% assign pages = site.pages | sort: "path" %}

{% for lecture in pages %}
{% assign parts = lecture.path | split: "/" %}
{% assign first_letter = parts[1] | slice: 0, 1 %}

    {% if parts.size == 3 and parts[0] == unit and first_letter == "l" and parts[2] == "index.md" and lecture.title %}
      <li>
        <a href="{{ lecture.url | relative_url }}">
          {{ lecture.title | escape }}
        </a>
      </li>
    {% endif %}

{% endfor %}

</ul>
