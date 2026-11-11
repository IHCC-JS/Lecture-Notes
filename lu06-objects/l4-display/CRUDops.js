export default function createNewItem(name, quantity, price, id) {
    return {
        id: id, name: name, quantity: quantity, unitPrice: price
    };
}

