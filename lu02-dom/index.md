---
title: LU02 DOM
---

# LU02 DOM

## Learning Resources

Confused on a topic? Did I skim over a topic you want to dive deeper into? Below is a list of videos and documents I recommend.

- [W3Schools DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [MDN `querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [Code Bro DOM Explained](https://www.youtube.com/watch?v=NO5kUNxGIu0)
- [Coding Demo](https://github.com/IHCC-JS/Lecture-Notes/tree/main/LU02%20-%20DOM/Demo%20-%20Where%20is%20Waldo)

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