//Discussion: Why do we need to move these constants here?
const FINE_RATE_PER_DAY = 0.25;
const GRACE_PERIOD_DAYS = 14;

//Discussion: Why do we NOT need to export this function?
function handleCheckout(event) {
    event.preventDefault();

    const currentButton = event.currentTarget;
    const bookCard = currentButton.closest('.book-card');

    let currentStatus = bookCard.getAttribute('data-status');

    //only available books can be checked out
    if (currentStatus !== "available") {
        const titleElement = bookCard.querySelector('.book-title');
        alert("Cannot checkout: " + titleElement.textContent + " is unavailable.");
        return;
    }

    // Update the status in the DOM
    bookCard.setAttribute('data-status', 'checked-out');

    currentButton.textContent = "Unavailable";
    currentButton.disabled = true;

    currentButton.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
    currentButton.classList.add('bg-gray-400', 'cursor-not-allowed');
}

export function calculateFine(event) {
    event.preventDefault();

    const dueDateInput = document.querySelector('#dueDate');
    const returnDateInput = document.querySelector('#returnDate');
    const fineResult = document.querySelector('#fineResult');

    const dueDate = new Date(dueDateInput.value);
    const returnDate = new Date(returnDateInput.value);

    let diffTime = returnDate.getTime() - dueDate.getTime();

    // converts milliseconds to days
    let diffDays = diffTime / (1000 * 60 * 60 * 24);

    let daysOverdue = 0;
    let totalFine = 0;

    if (diffDays > GRACE_PERIOD_DAYS) {
        daysOverdue = diffDays - GRACE_PERIOD_DAYS;
        totalFine = daysOverdue * FINE_RATE_PER_DAY;
    }

    fineResult.textContent = "Days overdue: " + daysOverdue + ". Total Fine: $" + totalFine.toFixed(2);
}

export function attachCheckoutHandlers() {
    const buttons = document.querySelectorAll('.checkout-btn');

    buttons.forEach(function (button) {
        button.addEventListener('click', handleCheckout);
    });
}