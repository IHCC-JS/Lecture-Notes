import createNewItem from "./CRUDops.js";

const inventory = [
    {
        id: 1,
        name: "Laptop Charger",
        quantity: 15,
        unitPrice: 35.00
    },
    {
        id: 2,
        name: "Wireless Mouse",
        quantity: 45,
        unitPrice: 19.99
    },
    {
        id: 3,
        name: "USB-C Hub",
        quantity: 8,
        unitPrice: 55.50
    }
];

const tableBody = document.querySelector('#inventoryTableBody');
const form = document.querySelector('#inventoryForm');
const nameInput = document.querySelector('#productName');
const quantityInput = document.querySelector('#quantity');
const priceInput = document.querySelector('#price');


function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

function createTableCell(content) {
    const cell = document.createElement('td');
    cell.textContent = content;
    return cell;
}


function renderInventory() {
    tableBody.innerHTML = '';

    inventory.forEach(function (item) {
        let newRow = document.createElement('tr');

        newRow.appendChild(createTableCell(item.id));
        newRow.appendChild(createTableCell(item.name));
        newRow.appendChild(createTableCell(item.quantity));
        newRow.appendChild(createTableCell(formatCurrency(item.unitPrice)));

        tableBody.appendChild(newRow);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const id = inventory.length + 1;
    const name = nameInput.value.trim();
    const quantity = parseInt(quantityInput.value, 10);
    const unitPrice = parseFloat(priceInput.value);

    const newItem = createNewItem(name, quantity, unitPrice, id);
    inventory.push(newItem);
    renderInventory();
}

form.addEventListener('submit', handleFormSubmit);
renderInventory();
