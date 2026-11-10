//Get element by ID
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
const introSection = document.getElementById("intro");
console.log("Intro section:", introSection);

// Get elements by tag name
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName
const allParagraphs = document.getElementsByTagName("p");
console.log("All <p> elements:", allParagraphs);

//Get the first image with querySelector
//https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
const firstImage = document.querySelector("img");
console.log("First image element:", firstImage);

//Get all list items inside the training section
//https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
const trainingItems = document.querySelectorAll("#training ul li");
console.log("Training list items:", trainingItems);

//Get the article titles inside the mission section
const articleHeadings = document.querySelectorAll("#mission article h3");
console.log("Mission article headings:", articleHeadings);

//Get the blockquote with an attribute selector (no id/class)
const tributeQuote = document.querySelector('blockquote[title="Tribute"]');
console.log("Tribute quote element:", tributeQuote);

//Get footer paragraphs without using IDs
const footers = document.getElementsByTagName("footer");
console.log("Footer elements:", footers);

//Get the last paragraph in the legacy section (no class/id)
const legacySection = document.querySelector("#legacy");
const legacyParagraphs = legacySection.getElementsByTagName("p");
const lastLegacyParagraph = legacyParagraphs[legacyParagraphs.length - 1];
console.log("Last paragraph in legacy section:", lastLegacyParagraph);

//Get all navigation links using querySelectorAll
const navLinks = document.querySelectorAll("nav ul li a");
console.log("Navigation links:", navLinks);

//Get the figure caption inside the intro section
const figCaption = introSection.querySelector("figcaption");
console.log("Figure caption:", figCaption.textContent);
