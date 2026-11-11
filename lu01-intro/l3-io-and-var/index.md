---
title: L3 - I/O and Variables
---

# I/O and Variables

## I/O

- [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/console/log_static)
    - Allows web developers to output messages to the console.
    - This is not used for communicating with end users.
    - It is mostly used for "lazy" debugging.
    - We have already used this in the past.
- [`alert()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
    - Allows web developers to display a message to the user.
    - This is used for communicating with end users.
    - It is mostly used for "eager" debugging.
- [`confirm()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
    - Allows web developers to display a message to the user and get a response.
    - This is used for communicating with end users.
    - It is mostly used for "eager" debugging.
- [`prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
    - Allows web developers to display a message to the user and get a response.

> Demo 1: Go look at an example of this [here](prompt.html)

## Variables

## Data Types

There are different types of data in JS like:
Numbers

- Integers: Integer (negative, zero and positive) numbers Example: ...
    - 3, -2, -1, 0, 1, 2, 3 ...
- Float-point numbers: Decimal number
    - -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...
- Strings one or more chars: 'a' 'Bob' "Cat" 'United States' 'JavaScript is a beautiful programming language'
  Booleans:
  `true` or `false`
- `undefined`

### Date Types Example

- Make [`dataTypes.html`](dataTypes.html) shows off typeof and comments
- Explain what are vars are. JS var rules.
  [Variables](https://www.w3schools.com/js/js_variables.asp)
    - A JavaScript variable name should not begin with a number.
    - A JavaScript variable name does not allow special characters except dollar - - sign and underscore.
    - A JavaScript variable name follows a camelCase convention.
    - A JavaScript variable name should not have space between words.
- [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) vs [
  `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) vs [
  `var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
    - We do not use `var` in JS anymore because is treated as global variable and does not have block scope.
    - We use `let` and `const` instead.
    - You might run into `var` on the job due to legacy code.

## Date and Time

- [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object
- [`Temporal`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal) new way.
    - I am currently updating the labs to use this new. Safari might not support it yet but Chrome and Firefox do.

## Run the Lab

Clone down the [Project Template](https://github.com/IHCC-JS/Project-Template) and run it's tests.
Explain to students why we are using Node.js in the labs.
Instructions on how to run it are in the README.md file.

## Coding Standards

Have a look at this class's Coding Standards.
