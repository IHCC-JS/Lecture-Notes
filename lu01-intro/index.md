---
title: LU01 Intro
---

# LU01 - Intro

## Learning Resources

Confused on a topic? Did I skim over a topic you want to dive deeper into? Below is a list of videos and documents I recommend.

- [W3Schools JavaScript](https://www.w3schools.com/js/DEFAULT.asp)
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JSFiddle](https://jsfiddle.net/)
- [JS Cheat sheet](https://htmlcheatsheet.com/js/)
- [Code Bro](https://www.youtube.com/watch?v=Ihy0QziLDf0)

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
