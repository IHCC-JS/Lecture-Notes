---
marp: true
theme: rose-pine-moon
---

# JSON: The Data Interchange Format

**JavaScript Object Notation**

Presentation by Luke Matheis

---

# What is JSON?

* **J**avaScript **O**bject **N**otation.
* A **lightweight, text-based** data interchange format.
* It is entirely language-independent
    * Uses conventions familiar to programmers of C-family languages (C#, Java, JavaScript, Python, etc.).
* It is the primary way modern web applications exchange data with servers.

---

# JSON Syntax and Structure

JSON syntax is derived from the structure of JavaScript objects. But it is NOT JavaScript code.

| Structure  | Symbol                  | Description                           | 
|:-----------|:------------------------|:--------------------------------------|
| **Object** | `{ }` (Curly Braces)    | A collection of **name/value pairs**. | 
| **Array**  | `[ ]` (Square Brackets) | An **ordered list** of values.        |

---

## Syntax Rules

1. **Keys MUST be Double-Quoted:**
    * **Valid:** `"firstName": "Alice"`
    * **Invalid:** `firstName: "Alice"` (No quotes)
2. **Strings MUST be Double-Quoted:**
    * **Valid:** `"city": "New York"`
    * **Invalid:** `"city": 'New York'` (Single quotes are not allowed)
3. **No Trailing Commas:**
    * The last item in an object or array cannot end with a comma.
4. **No Comments:**
    * JSON does not support `//` or `/* ... */` comments.

---

# JSON Data Types

| Type        | Example           | Description                             |
|:------------|:------------------|:----------------------------------------|
| **String**  | `"Hello"`         | Any text, always in double quotes.      |
| **Number**  | $10$, $3.14$      | Integers and floating-point values.     |
| **Object**  | `{"a": 1}`        | Nested collections of name/value pairs. |
| **Array**   | `["A", "B"]`      | Ordered lists of values.                |
| **Boolean** | `true` or `false` | Case-sensitive lowercase.               |
| **Null**    | `null`            | Represents the absence of a value.      |

* What type is missing (date)?

---

#  Creating JSON Files

```json
{
  "studentId": 451,
  "name": "Alex Johnson",
  "isEnrolled": true,
  "gpa": 3.95,
  "courses": [
    "Computer Science",
    "Calculus II",
    "Data Structures"
  ],
  "contact": {
    "email": "alex@university.edu",
    "phone": null
  }
}
````

* The file extension **MUST** be `.json`.
* Notice the mix of Objects, Arrays, Strings, Numbers, and Booleans.

-----

# Validating JSON Files

If your JSON text contains a single syntax error (e.g., a missing quote, an extra comma), a program will **fail to parse** it.

* You can quickly validate JSON by opening the file with your web browser.
* In your file explorer, right-click on the file and select **Open With** > **Web Browser (Chrome, Firefox)**.

-----

# JS Objects vs. JSON Text

| Feature                    | JSON Text                                       | JavaScript Object                                  |
|:---------------------------|:------------------------------------------------|:---------------------------------------------------|
| **Nature**                 | A **String** (a text format).                   | A native **Data Structure** in memory.             |
| **Usage**                  | Transmitting data over the network (API calls). | Working with data inside your JS program.          |
| **Keys/Values**            | Keys must be `"` quoted. No functions/dates.    | Keys can often be unquoted. Can contain functions. |

-----

# Key Takeaways

* JSON is a lightweight **data format** for interchange.
* It is built on two structures: **Objects** (`{}`) and **Arrays** (`[]`).
* Strict rules apply: **double quotes** for keys and strings, and **no comments/trailing commas**.
* Validation is crucial to ensure parsing.
* **JSON Text** (String) is converted to/from **JS Objects** using `JSON.parse()` and `JSON.stringify()`.

-----