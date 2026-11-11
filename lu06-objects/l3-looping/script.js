import displayProduct from "./displayProduct.js";

//data
const dealPercentage = [0.07, 0.10, 0.20, 0.30, 0, 0, 0, 0, 0, 0];
const computerStore = {
    storeName: "Ottumwa Electronics",
    products: {
        computers: [
            {name: "Gaming PC", price: 1_499.99, cpu: "Intel i9", gpu: true, ram: "32GB", storage: "2TB SSD"},
            {name: "Ultrabook", price: 999.99, cpu: "Intel i7", gpu: false, ram: "16GB", storage: "512GB SSD"},
            {name: "Desktop PC", price: null, cpu: "AMD Ryzen 5", gpu: false, ram: "8GB", storage: "1TB HDD"}
        ],
        phones: [
            {name: "iPhone 6", price: 0, storage: "156GB", color: "White", camera: "8MP"},
            {name: "Samsung S21", price: 799.99, storage: "128GB", color: "Phantom Black", camera: "108MP"},
            {name: "Google Pixel 6", price: 499.99, storage: "128GB", color: "Stormy Black", camera: "50MP"}
        ]
    },
    services: [
        {name: "Computer Repair", price: 89.99},
        {name: "Phone Screen Replacement", price: 129.99},
        {name: "Data Recovery", price: 199.99},
        {}
    ]
}

const productsContainer =  document.querySelector("#products");
const deal = document.querySelector("#deal");

//display store name on the website
document.querySelector("h1").textContent = computerStore.storeName;

//Validate the products and services to remove empty ones, and >= 0 price
computerStore.products.computers = computerStore.products.computers.filter(computer => computer.price > 0 && computer.price !== null);
computerStore.products.phones = computerStore.products.phones.filter(phone => phone.price > 0 && phone.price !== null);
computerStore.services = computerStore.services.filter(service => service.price != null);

//Use function to convert an array of objects to an array of HTML elements
const computers =  computerStore.products.computers.map(computer => displayProduct(computer));
const phones =  computerStore.products.phones.map(phone => displayProduct(phone));

//Append the new HTML elements to the screen
computers.forEach(product => {productsContainer.append(product)});
phones.forEach(product => {productsContainer.append(product)});

//On Button click, allow the user to get a random discount code.
//Do this if you have extra time.
document.querySelector("#deal-of-the-day").addEventListener("click", () => {
    let randomDeal = dealPercentage[Math.floor(Math.random() * dealPercentage.length)];
    deal.textContent = (randomDeal * 100).toFixed(0) + "%";
})

//TODO Extra practice: Display all the services on the website

