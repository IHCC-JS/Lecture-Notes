# JavaScript Course Outline

## JS Course V2 Checklist

- [ ] Update lectures if needed
- [ ] Create/Update Worksheet
- [ ] Update Lab and LAB Text with video reflection
- [ ] Update Quiz with new coding questions. Update quiz description text.
- [ ] Add Learning Resources to each unit.

## Course Outline

<!-- TODO edit final/midterm to have more time (2hrs), or make it shorter  -->
<!-- TOOD link each unit to details below -->
<!-- Use Formdata() when possible -->
<!-- Add an image input somewhere -->
<!-- Modernize local storage implementation -->

| #                    | Unit                         | Description                                                                                 |
| -------------------- | ---------------------------- | ------------------------------------------------------------------------------------------- |
| **LU01 - Into**      | Variables, Conditionals, I/O | Core JS syntax, variables, operators, conditionals,and console input/output.                |
| **LU02 - DOM**       | DOM Fundamentals             | Selecting, creating/updating elements, putting data on screen.                              |
| **LU03 - Events**    | Events and Interactivity     | Click events, form inputs, event listeners, and UI changes.                                 |
| **LU04 - Array**     | Arrays and Looping           | Arrays, array methods (`for`, `forEach`, `map`), connecting them to DOM lists or dropdowns. |
| **Midterm**          | —                            | Online test and/or monitored project.                                                       |
| **LU05 - Functions** | Functions                    | Functions, parameters, return values, scope.                                                |
| **LU06 - Objects**   | Objects and Data Structures  | Object literals, nested structures, and looping through objects. Displaying object data.    |
| **LU07 - Templates** | Templates                    | Dynamic rendering from arrays/objects (hard coded objects), reusable HTML structures.       |
| **LU08 - JSON**      | JSON and Local Storage       | Converting between JSON and JS, storing data locally, and reloading state between sessions. |
| **LU09 - OOP**       | Classes and Modular Thinking | Intro to classes, constructors, and methods; using classes to manage data and DOM updates.  |
| **LU10 - API**       | APIs                         | Fetching JSON from APIs, promises, async/await, error handling, and rendering fetched data. |
| **LU11 - React**     | Web Frameworks (Next.js)     | Components, props, state, and UI composition.                                               |
| **Final**            | —                            | Online test and/or monitored project.                                                       |

## Unit by Unit Break Down

L# = Lecture
Each unit should have one quiz, one lab, and for lectures.
**Should I add pair programming?**

<!-- TODO add more short answer test questions that require students to write code at least 2 per unit -->
<!-- TODO Change points to where quizzes are worth more of the grade -->
<!-- TODO Change labs as less points, and have them show proof, Labs are for learning how to pass the quizzes -->

### LU01 - Into

- L1: Getting Started
    - Syllabus, History, Set up development environment
    - History of JS
    - Setting up students development environment
    - Activity: Visual Check of setup completed
- L2: Where JS
    - Inline JavaScript vs External JavaScript
    - JS in browser
    - JS inline
    - JS internal (block)
    - JS external (`script.js`)
- L3: I/O and Variables
    - `console.log()`
        - `prompt()`
        - `alert()`
        - `confirm()`
    - `let` vs `var` vs `const`
    - `typeof`
    - Have students clone down the lab and run its test suite.
- L4: Conditionals
    - `if`
    - `else`
    - `switch`
    - Math operators and PI
- Demo: TODO (example demo project walked through to students)
- Lab: PI (Area of a circle from user prompt)
- Quiz

### LU02 - DOM

- L1: Query Selectors
    - DOM diagram
    - Find elements in the DOM
- L2: Changing and Creating Elements
    - Give students an example website and configure different elements on screen.
        - `innerHTML`
        - `innerText`
        - `className`
        - `style`
- L3: Creating Elements
    - Using hard coded data, create new information to put on screen.
        - `createElement()`
        - `appendChild()`
- L4: User Input
    - Use user input (`prompt()`) and display it to screen
- Demo: Where is Waldo?
- Lab: Takeout Menu (order food from a restaurant)
- Quiz

### LU03 - Events

- L1: Events
    - `addEventListener()`
    - `onclick` Show but explain why we don't use it.
    - Show off all the different parts of Event Object.
    - Buttons
- L2: Event Listeners
    - Clipboard (Steel your password `inator`)
    - Keyboard (Frustrating text box)
    - Mouse (Mice follow game)
- L3: Forms
    - Getting User Input from form elements
    - When should you validate user input?
        - On submit?
        - On keypress?
    - Prevent Default
- L4: UI Changes
    - User Input → Business Logic → UI Changes
- Demo: (Use forms in some shape or form)
- Lab:
- Quiz

### LU04 – Arrays and Looping

<!-- TODO update LU02 Slideshow -->

- L1: Arrays
    - Intro to arrays, indexing, `push()`, `pop()`, `length()`
- L2: Looping
    - for, while, for...of
    - Generate dynamic HTML lists (No Template Literals)
- L3: Array Methods
    - forEach, map, filter, find
    - Filtered display of list items (e.g., only even numbers)
- L4: continue and break
- Demo: Maze Game
- Worksheet: Array Indexing and Loop counting
- Lab: Student Grade (filter and calculate average)
- Quiz

### Midterm Test

Over Units 1-4.
This is early, but it is here because It avoids being AFTER winter break.

[//]: # 'TODO Beef up coding questions since they now have access to IDE'

### LU05 – Functions

[//]: # 'TODO SLOW down, make in course examples shorter and slower'

- L1: Defining Functions
    - Declaration vs. expression vs. arrow functions
    - Parameters, arguments, return values
- L2: Function Scope
    - Local vs. global variables
    - Function hoisting
    - Temporal Dead Zone
    - Hoisting
- L3: Modularization
    - Multiple scripts `type="module"`
    - `import` and `export`
    - Export Global Constant Variables
    - Pure vs. Impure Functions
    - JSDocs (Make students write JSDocs by hand in quiz)
- L4: DOM Integration
    - Functions that create or update HTML dynamically (No Template Literals)
- Demo:
- Lab:
- Pair Programming:
- Quiz: (Make students write JSDocs by hand in quiz)

### LU06 – Objects

Make use of user forms to build out objects.
NO HTML Templates or JSON in this unit.

[//]: # 'TODO Add reduce and average calculations from an array of objects'
[//]: # 'TODO add DEMO'

- L1: Object Literals
    - `const car = { make: 'Toyota', year: 2020 }`
    - Dot vs. bracket notation
    - Accessing object properties
- L2: Nested Objects
    - Accessing deeply nested data
    - Arrays of objects
- L3: Looping Objects
    - `for...in`, `Object.keys`, `Object.values`, `Array.map()`
- L4: Displaying Objects
    - Render structured data to the DOM (cards, tables) (No Template Literals), `Array.map()`
- Demo:
- Worksheet: Give a table of data, the student builds JS Object.
- Lab: Workout Logger (like Lecture 4 but with statistics (like Excel totals))
- Quiz: Make students build objects by hand based on a table of data. Make students retrieve data from a complex JS
  Object.

### LU07 – Templates

[//]: # 'TODO L2 Was a bit too quick'
[//]: # "TODO Pair Programming shouldn't use Git for collaboration, students don't know how at this point."
[//]: # 'TODO lab was too big. Give students more starting code. For example, the next and prev cards buttons'
[//]: # 'TODO lab make it more clear they NEED to use template literals'

- L1: Template Literals
    - Use backticks to create template strings
    - String interpolation with `${}`
    - Apply CSS class names to HTML elements
- L2: Rendering Arrays
    - Loop through arrays and generate HTML
    - Use `map` to generate HTML
    - Create functions that return template strings
- L3: Dynamic Rendering
    - Render, clear, and re-render DOM sections. Keeping the DOM in sync.
    - Reusable components
    - Events
- Pair Programming:
- Lab: Dream Car Configuration
- Quiz

### LU08 – JSON

[//]: # 'TODO L1 is too short will want to combine with L2, wil need another lecture'

- L1: JSON Overview
    - JSON Slide show presentation
    - JSON syntax and structure
    - Difference between JS objects and JSON text
    - creating JSON files
    - Validating JSON files (Web browser)
- L2: Loading JSON
    - use `fetch()` to load JSON data
    - use `JSON.parse()` to convert JSON to JS objects
    - only using part of JSON data
- L3: Rendering JSON
    - Display JSON data on DOM via HTML templates
- L4: Persisting App State
    - Save and reload tasks or preferences
    - Save user preferences to local storage
- Worksheet: Making JSON file (make an auto grading script?)
- Demo (look at project template): https://github.com/IHCC-JS/Project-Template
- Worksheet: Build a JSON file from a diagram
- Lab: Trip Scheduler
- Quiz

### LU09 – OOP

- L1: Class Basics
    - Constructors, methods, properties
    - Private properties
- L2: Class Instances
    - Creating and managing multiple instances
- L3: Business Logic
    - Program logic is offloaded to class methods.
    - Use `setTimeout()`
- L4: Modular Design
    - Split JS into modules and import/export
- Worksheet: Build a class based on a diagram, Students just turn in `class.js`
- Lab: Unit Converter
- Quiz

### LU10 – APIs

All API usage that requires authentication will use API Ninja.

- L1: Fetching Data
    - Calling Read-only APIs with no authentication.
    - fetch() basics, .then(), and async/await
    - Probably use the Pokémon API.
    - Display data to screen
- L2: Multiple Fetches
    - Cat API Example
    - Call to get a list of cat breeds
    - Call to get a cat image based on breed
- L3: POST
    - Students run local API to call and send data to.
    - Basic CRUD API
- L4: Consume
    - We build a front end that consumes an API that runs locally
        - Build API in Node.js
    - API utilizes a DB (SQLite)
    - API includes test suite
- Pair Programming (One day): Students sign up for an API Ninja account. And build their own site.
- Lab: Pet Adoption. Give students an API build in express.js and have students build front end.
- Quiz

### LU11 – React

I don't think I can include an assignments in this unit.
If we have extra time include one or both of the old react labs.

<!-- Need to change the Lecture notes to only have 4 lectures. -->
<!-- Need to remove tailwind lecture. -->
<!-- Need to combine/streamline lecture 3,4,5 into two lectures -->
<!-- L1. Intro, L2. Componets, L3. Layout and Link, L4. Stateful -->

- L1: Setup
    - History of why React was created
    - Compare React (Next.js) to other frameworks
        - Show off the web frameworks wars
    - Create a simple hello world app
- L2: Component
    - Build Static Components
    - props
    - Passing hard-coded data to components
- L3: State and Events
    - `useState()`
    - `useEffect()`
- L4: Conditional Rendering and Lists
    - Using one page (no routing) displays different content based on state.
    - Render lists and conditional elements
- Demo: Use some old project
- Lab: Alien translator
- Quiz: Quiz about What is React and Web Frameworks
