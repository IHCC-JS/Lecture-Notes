---
marp: true
theme: default
class: invert
---

# JS Arrays

An array is a single variable used to store multiple elements, similar to a list. In JavaScript, arrays are:

* **Resizeable:** Their length can change.
* **Mixed-type:** They can hold numbers, strings, objects, and more.

-----

# Array Basics

Here is an example of an array:

```javascript
const myArray = ["Apple", "Banana", "Cherry"];
```

No need to panic, it's just a variable with a list of values.

----

## Array Indexing

JS Arrays are accessed using **zero-based indexing**.

| Position  | Index (Access) | Example Element |
|:---------:|:--------------:|:---------------:|
| **First** |     **0**      |  `myArray[0]`   |
|  Second   |       1        |  `myArray[1]`   |
|   Third   |       2        |  `myArray[2]`   |

-----

## Accessing and Modifying Elements

You use square brackets (`[]`) with the index number to interact with the data.

### 1. Accessing Data

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
// Get the element at index 1
console.log(fruits[1]);
// Output: "Banana"
```

### 2. Modifying Data

```javascript
const colors = ["Red", "Green", "Blue"];
// Change the element at index 0
colors[0] = "Crimson";
console.log(colors);
// Output: ["Crimson", "Green", "Blue"]
```

-----

## Ends of the Array

Finding the Last Element. Instead of counting, use the `length` property:

```javascript
const items = ["A", "B", "C", "D"];
const lastIndex = items.length - 1; // 4 - 1 = 3

console.log(items[lastIndex]); // Output: "D"
```
