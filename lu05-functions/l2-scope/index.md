---
title: L2 - Function Scope
---


# Function Scope

## Local vs Global Scope

Best Practices:

1. Use `let`for reassignable variables and `const` for variables that shouldn't change.
2. Minimize global variables to prevent naming conflicts and accidental modification.
    - Try not to change global variables. Doing so can lead to not knowing the starting value when using it.
3. Always declare variables and functions before you use them to avoid the
   Temporal Dead Zone.

## Hoisting

You can declare a variable before you use it.
You shouldn't do this.
You can prevent this by turning on ["strict mode"](https://www.w3schools.com/js/js_strict.asp).

### Temporal Dead Zone

Using a variable before it's declared can cause errors.

https://www.geeksforgeeks.org/javascript/temporal-dead-zone-in-javascript/
