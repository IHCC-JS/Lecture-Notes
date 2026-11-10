const justTitles = ["The Catcher in the Rye", "Nine Stories"];
const justBooks = [
    {
        title: "The Catcher in the Rye",
        year: 1951,
    },
    {
        title: "Nine Stories",
        year: 1953,
    },
    {
        title: "Franny and Zooey",
        releaseYear: 1961, //doesn't have to be the same
    },
];

const library = {
    authors: [
        {
            name: "J.D. Salinger",
            books: [
                {
                    title: "The Catcher in the Rye",
                    year: 1951,
                },
                {
                    title: "Nine Stories",
                    year: 1953,
                },
                {
                    title: "Franny and Zooey",
                    year: 1961,
                },
            ],
        },
        {
            name: "Jack Kerouac",
            books: [
                {
                    title: "The Dharama Bums",
                    year: 1957,
                },
                {
                    title: "On the Road",
                    year: 1957,
                },
            ],
        },
    ],
};

//look at cool objects
console.log(library);

//get just one author jack
let jack = library.authors[1];
console.log(jack);

//get just one book of jacks, The Dharama Bums
let dharama = library.authors[1].books[0];
console.log(dharama);

//get just the year that dharma bums game out
let yearDharama = library.authors[1].books[0].year;
console.log(yearDharama);

//change dharma bums year to correct year 1958
library.authors[1].books[1].year = 1958;

//print out changed year
console.log(library.authors[1].books[1].year);

//let's build a new author and add it to the library
let newAuthor = {
    name: "Woody Guthrie",
    books: [
        {
            title: "Bound For Glory",
            year: 1943,
        },
    ],
};

//add this author to the author array
library.authors.push(newAuthor);
console.log(library);

//build a function that builds a string using an author object
const printOutAuthor = (author) => {
    let bookFormatted = "";

    for (let book of author.books) {
        bookFormatted += `Title: ${book.title} \n\tYear: ${book.year}\n\t`;
    }

    return `${author.name}: \n\t${bookFormatted}`;
};

//passing printOutAuthor an author from the array
console.log(printOutAuthor(library.authors[0]));
console.log(printOutAuthor(library.authors[2]));

//build a new author
let pete = {
    name: "Pete Seeger",
    books: [
        {
            title: "Abiyoyo",
            year: 1963,
        },
    ],
};

//print out pete
console.log(pete);

//print out pete with new method
console.log(printOutAuthor(pete));
