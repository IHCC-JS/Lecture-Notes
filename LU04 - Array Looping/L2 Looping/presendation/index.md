---
marp: true
theme: default
class: invert
---

# JavaScript Loops

What, Why, How?

- By Luke Matheis

---

## What is a Loop?

* A **loop** is a programming control structure that allows a block of code to be executed repeatedly.
* It saves you from writing the same code over and over again.
* **Analogy:** Think of a song chorus—it's repeated several times throughout the song.
* **Key Concept:** A loop continues to run until a specified condition becomes **false**.

---

## How Does a Loop Work?

All loops follow the same basic logic:

* **Initialization (Start):** A iterator is set up `let i = 0;`.
* **Condition Check:** The loop checks a Boolean expression `i < 3`.
* **Execute Code Block:** The body of the loop. Where you put your code.
* **Increment/Decrement:** The iterator is updated `i++`;
* **Exit:** When the condition becomes **false** or a `return` is used.

-----

## `for` Loop

The `for` loop is the most common loop and is ideal you want full control over the number of iterations.
It is also useful when you need an iterator variable for an array index.

```javascript
// initialize, condition, increment
for (let i = 0; i < 3; i++) {
    console.log("Iteration: " + i);
}
// Output:
// Iteration: 0
// Iteration: 1
// Iteration: 2
```

-----

## `while` Loop

The `while` loop continues to execute a block of code as long as the specified condition remains **true**. Notice no
build in iterator variable.

```javascript
let count = 0;
while (count < 4) {
    console.log("Count is: " + count);
    count++;
}
// Output:
// Count is: 0, 1, 2, 3
```

> ⚠️ Watch out for: Infinite Loops...

-----

## `do...while` Loop

The `do...while` loop is similar to `while`, but it guarantees that the code block will execute **at least once**.

```javascript
let attempts = 0;
do {
    console.log("I run at least once!");
    attempts++;
} while (attempts < 0);
// Output:
// I run at least once!
```

-----

## Iterating Over Collections

JavaScript provides special loops for working with arrays and objects.

| Loop Type             | Best Used For                                                         | Example                          |
|:----------------------|:----------------------------------------------------------------------|:---------------------------------|
| **`for...of`**        | Getting the **values** of iterable collections (Arrays).              | `for (const item of myArray)`    |
| **`for...in`**        | Iterating over the **property names (keys)** of an object.            | `for (const key in myObject)`    |
| **`Array.forEach()`** | A built-in array method for executing a function for each element.    | `myArray.forEach(element => {})` |

-----

## Summary

- Loops allow you to execute a block of code repeatedly.
- There are several types of loops available; they all have different use cases.
- JS Objects and Arrays have built-in methods for looping over their contents.
    - We will talk about this in more detail later.