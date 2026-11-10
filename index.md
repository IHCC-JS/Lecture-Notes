# Lecture Notes

This website holds all in class examples and notes.
You can download the entire website [on GitHub](https://github.com/IHCC-JS/Lecture-Notes).
This course is split up into Learning Units (LU) and each Learning Unit has a number of lectures (L1, L2, L3, etc.).

- [LU01 Intro](./lu01-intro/index.md)



## Docs

Being able to read documentation is a crucial skill for any developer.
These two sources are crucial.
Consider these sources as your textbook.

- [W3 Schools](https://www.w3schools.com/js/default.asp)
- [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CheatSheet](https://htmlcheatsheet.com/js/JavaScript-JS-Cheat-Sheet.pdf)
- [Intro to JavaScript JetBrains](https://academy.jetbrains.com/course/26697-introduction-to-javascript-programming)

## Software

As a web developer you don't need too much software.
However, you need to have the following installed.

- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/)
    - VSCode Extensions
        - [Code Spell Check](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
        - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
        - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
        - Optional: [PDF Viewer](https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf)
        - Optional: [View Docx in VSCode](https://marketplace.visualstudio.com/items?itemName=ShahilKumar.docxreader)
    - Tip: Use auto save in your IDE. On the top left click, File > Auto Save. Make sure it is checked.
- [Node.js](https://nodejs.org/en/)
- Web Browser
    - [FireFox](https://www.mozilla.org/en-US/firefox/) Why do I recommend Firefox?
      It's [FOSS](https://hg.mozilla.org/mozilla-central/) and [open](https://www.mozilla.org/en-US/about/manifesto/).
    - [Chrome](https://www.google.com/chrome/) It's used by everyone, so testing your website with it is important.

## How to complete the Labs

Each lab is a self-contained project that uses the concepts covered in the learning unit.
While in this class we stick to vanilla JavaScript, the labs use Node.js so we can have a test suite.
We will make full use of GitHub actions to run these tests when you submit your pull request.
These tests will directly reflect on your grade.

### Fork the repo

You need your own copy of the repo to work on the labs.
To do this, click the "Fork" button in the top right corner of the repo page.

![Fork button](../assets/fork-button.webp)

### Clone **YOUR** repo

These labs are not empty; they contain starter code and tests.
You need to use these projects as a starting point.
In the directory you want to store the project, run the following command:

```bash
# you need to replace repo-url with the real url
git clone repo-url
```

To get the real url, click the "Code" button and copy the url from the dropdown.

### Get the project running

These projects use Node.js run the following command in the project directory:

```bash
# install dependencies
npm install
# run the project
npm run dev
```

### Testing with Playwright

Projects in this class will use Playwright for testing.
These tests will be given to you with each project.
Your grade will be based on whether the tests pass.
Make sure you run the tests before submitting your project.
Read more about Playwright [here](https://playwright.dev/).

[//]: # "TODO how to install playwright on Windows"

To run the tests locally, you can use the following commands:

```bash
# you will need to install playwright once
npx playwright install
# how to run tests
npm test
# run tests with interactive UI
npm run test:ui
# run tests with debug
npm run test:debug
```

Tests are located in the `tests/` directory if you run into any issues.
If the tests are not passing when you think they should be, please open an issue (or better yet, a pull request).

## Keeping your project up to date

During development of your lab, you need to keep your remote repo up to date with the changes you made locally.
To do this, run the following command in the project directory:

```bash
# add all changes to the staging area
# or list the name of the files
git add .
# commit the changes
# make sure to write a meaningful commit message
git commit -m "commit message"
# push the changes to the remote repo
git push
```

### Turning in your lab

Please complete the following check list before turning in your lab.

- [ ] Self grade your lab using the rubric in the labs `README.md`.
- [ ] Record a video reflection on your lab([See here for details](video-reflection.md)).
- [ ] Create a pull request from your fork to the original repo. (See below for details).
- [ ] Submit the URL to your pull request and the video reflection in the assignment submission form.
      How to make a pull request:

<details>
<summary>How to Make a Pull Request</summary>
To turn in your lab, create a pull request from your fork to the original repo.
I will review your PR based on the tests passed and the rubric.
**Turn in the URL to YOUR pull request.**

> ⚠ If you don't turn in your pull request, I will not grade your lab.

![Pull Request](../assets/pull-request.webp)

1. Should be my repo.
2. Should be your forked repo.
3. Click the "create pull request" button.

## Coding Standard

In this class we will use [JavaScript Standard Style](https://standardjs.com/rules).
This is already the default WebStorm for VS Code you can install an extension.
Prettier is **not** the same thing (but mostly acceptable).
We will adhere strictly to Standard JS's rules where they conflict.
In projects that are turned in, you are only to use concepts covered in the learning unit.
**Using concepts outside the learning unit is not allowed and will flag academic dishonesty.**

Beyond the linter, you also need to follow the following principles to ensure your code is readable and maintainable.

### Dry Code

DRY stands for Don't Repeat Yourself.
vs. WET (Write Every Twice).

The Goal: If you have logic repeated in two or more places, abstract it into a reusable function or class.
This makes updating that logic easier and reduces total lines of code.

The Trap: Over-Obfuscation.
The counter-principle is to prioritize readability over extreme dryness.
Over-obfuscating occurs when you create overly complex abstractions or use dense, clever shortcuts (e.g., deeply nested
ternary operators, cryptic functional chaining) just to save a few lines of code.

While Dry is always the goal, sometimes we need to sacrifice readability that is why I adopt **Damp Code**.

### Document your code

Documentation vs. Explanation

Inline comments `//` are used sparingly to explain the rationale or context behind a piece of non-obvious code.
If the code is readable, you rarely need to comment on what it is doing.

- Explain Constraints or Tradeoffs: Why did you not use an array? Why is this code recursive?
- Explain Non-Obvious Workarounds: Why is this strange-looking logic required? (e.g.,
  `// This complex regex is required to...`)
- Explain Business Logic: Why is a specific magic number used?

Avoid explaining the obvious.

```js
const total = cost * 1.05; // calculate the total (DON'T DO THIS)
if (raining) {
    // check if it's raining (DON'T DO THIS)
    console.log("It's raining!");
}
```

Use [JSDocs](https://jsdoc.app/) to document your code.

```js
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {}
```

## Contribute to the Class

See something wrong or could use improvement?
Open an issue or a pull request.
Doing so can result in _bonus points_.
But you need to follow a few guidelines.

- Any suggested change must be significant.
    - No small spelling fixes.
    - No variable renames.
    - No small cosmetic changes.
    - No formatting changes.
    - No redundant refactoring.
- Contributions must follow Coding Standard (see above).
- Code changes must follow the flow of the class.
    - Change can't use concepts not covered in that part of the class. i.e., using an array in LU01.
- If you want to contribute to an assignment, make sure your pull request does not include the solution to the
  assignment.
