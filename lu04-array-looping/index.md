---
title: LU04 - Arrays and Looping
---

# LU04 - Arrays and Looping

## Learning Resources

- [Array W3Schools](https://www.w3schools.com/js/js_arrays.asp)
- [Array MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Looping W3Schools](https://www.w3schools.com/js/js_loop_for.asp)
- [Looping MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Code Bro Arrays Video](https://www.youtube.com/watch?v=yQ1fz8LY354)
- [Code Bro Looping Video](https://www.youtube.com/watch?v=ZOQYIWLngSU)


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