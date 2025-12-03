const tableBody = document.querySelector('#inventoryTableBody');
const form = document.querySelector('#inventoryForm');
const nameInput = document.querySelector('#productName');
const quantityInput = document.querySelector('#quantity');
const priceInput = document.querySelector('#price');


function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

