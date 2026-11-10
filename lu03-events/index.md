---
title: LU03 - Events
---

# LU03 - Events

## Learning Resources

- [Events W3Schools](https://www.w3schools.com/js/js_events.asp)
- [Event MDN](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JS Form MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
- [Code Bro Video](https://www.youtube.com/watch?v=g_vXSKbfUiQ)

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