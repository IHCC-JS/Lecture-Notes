---
marp: true
theme: uncover
class: invert
---

# JS Functions

## Made by: Luke Matheis

----

# What Are Functions?

A reusable block of code designed to perform a particular task. 
Think of it as a small, specialized machine in your program.

* **Input:** It optionally takes data, **arguments**.
* **Process:** It executes a block of code in the method Body.
* **Output:** It optionally returns a result. The `return`.

---

### Basic Structure

```javascript
function greet(name) {
    const message = "Hello, " + name + "!"; 
    return message; 
}

// Calling the function
const result = greet("JavaScript");

```

---

# Why Are Functions Useful?

Functions are essential for making your code readable and maintainable.

* Reusability (DRY): Write a complex block of logic once, and call it many times.
* Organization: Functions break down complex programs into small, named, manageable chunks.
* Scope: Functions create a local environment, protecting variables inside from interfering with variables outside.

---

# Different Function Types

In Modern JavaScript there are a few ways to define a function.

- Function Declaration
- Function Expression
- Arrow Functions

----

# Function Declaration

The Classic Way.

```javascript
function add(a, b) {
    return a + b;
}

```

----

# Function Expression 

Anonymous or Named. The function is assigned to a variable, like any other value.
You can't call it again without assigning it to a variable.
Useful for throw away functions.

```javascript
const subtract = function(a, b) {
    return a - b;
};

```
---

# Arrow Functions (ES6+)

Concise Syntax.
Does not bind its own `this` value (crucial when working with classes and methods!).

```javascript
const multiply = (a, b) => a * b;

const divide = (a, b) => {
    return a / b;
};
```