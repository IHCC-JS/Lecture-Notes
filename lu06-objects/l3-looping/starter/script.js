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

//TODO Extra practice: Display all the services on the website

