//Notice the use of default export so we don't have to use {}
//We can do this because we only have one function here
/**
 * Builds an HTML card for a product without checking the product type.
 * Missing fields will display "N/A".
 * @param {object} product - The product object to display.
 * @returns {HTMLElement} The created product card element.
 */
export default function displayProduct(product) {
    // Function inside a function :)
    const getValue = (key) => {
        if(product[key] == null){
            return "N/A";
        }
        return product[key];
    }

    const card = document.createElement('article');
    card.className = 'bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100';

    const name = document.createElement('h3');
    name.className = 'text-2xl font-bold text-gray-800 mb-2';
    name.textContent = product.name;
    card.appendChild(name);

    const price = document.createElement('p');
    price.className = 'text-xl font-extrabold text-indigo-600 mb-4';
    price.textContent = "$" + product.price;
    card.appendChild(price);

    //empty div to hold specs
    const specList = document.createElement('div');
    specList.className = 'space-y-2 text-gray-600 text-sm';
    card.appendChild(specList);

    // Helper function to append a spec line
    const appendSpec = (label, value) => {
        const p = document.createElement('p');
        p.textContent = label + ': ' + value;
        specList.appendChild(p);
    }

    appendSpec('Storage', product.storage);
    appendSpec('CPU', getValue('cpu'));
    appendSpec('RAM', getValue('ram'));

    // boolean  to "Dedicated/Integrated/N/A" clarity
    const gpuValue = product.gpu === true ? 'Dedicated' : (product.gpu === false ? 'Integrated' : 'N/A');
    appendSpec('GPU', gpuValue);

    appendSpec('Color', getValue('color'));
    appendSpec('Camera', getValue('camera'));

    return card;
}
