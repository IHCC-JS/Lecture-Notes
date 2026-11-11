import {bookSeed} from "./bookSeed.js";

const AVERAGE_MINUTES_PER_PAGE = 1.5;
const dashboardContent = document.querySelector('#dashboard-content');

let books = bookSeed;

//state
let currentBookIndex = 0;
let bookDashboards = [];


const calculateStats = (book) => {
    const pagesRemaining = book.totalPages - book.pagesRead;
    const progressPercent = ((book.pagesRead / book.totalPages) * 100).toFixed(1);

    const totalMinutesRemaining = pagesRemaining * AVERAGE_MINUTES_PER_PAGE;
    const hoursToFinish = (totalMinutesRemaining / 60).toFixed(2);

    //return an object with the stats
    return {
        pagesRemaining,
        progressPercent,
        hoursToFinish
    };
};

const createBookDashboard = (book) => {
    const stats = calculateStats(book);

    return `
        <h2 class="text-2xl text-green-600 mb-4">${book.title}</h2>
        <div>
            <div>
                <p>Total Pages</p>
                <p>${book.totalPages}</p>
            </div>
            <div>
                <p>Pages Read</p>
                <p>${book.pagesRead}</p>
            </div>
            <div>
                <p>Pages Remaining</p>
                <p>${stats.pagesRemaining}</p>
            </div>
        </div>
        
        <div class="mt-6">
            <p class="text-l">Progress:</p>
            <div class="w-full bg-gray-200 rounded-full">
                <!-- The actual progress in the bar -->
                <div class="h-3 rounded-full bg-indigo-500" style="width: ${stats.progressPercent}%;"></div>
            </div>
            <h3 class="text-lg mt-4">Estimated Reading Remaining</h3>
            <p class="text-xl font-bold text-red-600">${stats.hoursToFinish} hrs</p>
        </div>
    `;
};


const handleNext = () => {
    //don't go forward if we are on the last book
    if (currentBookIndex < books.length - 1) {
        currentBookIndex++;
        dashboardContent.innerHTML = bookDashboards[currentBookIndex];
    }
};

const handlePrevious = () => {
    //don't go back if we are on the first book
    if (currentBookIndex > 0) {
        currentBookIndex--;
        dashboardContent.innerHTML = bookDashboards[currentBookIndex];
    }
};


const handleAddPages = () => {
    const book = books[currentBookIndex];

    //adds 10 pages until we reach the end of the book
    book.pagesRead = Math.min(book.totalPages, book.pagesRead + 10);
    //update the dashboard
    bookDashboards = books.map(createBookDashboard);
    dashboardContent.innerHTML = bookDashboards[currentBookIndex];
};

bookDashboards = books.map(createBookDashboard);
dashboardContent.innerHTML = bookDashboards[0];

document.querySelector('#next-btn').addEventListener('click', handleNext);
document.querySelector('#prev-btn').addEventListener('click', handlePrevious);
document.querySelector('#add-pages-btn').addEventListener('click', handleAddPages);
