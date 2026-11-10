const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const bill = Number(data.get('bill'));
    const tipPercent = Number(data.get('tip'));

    if (!bill || bill < 0 || !tipPercent) {
        result.textContent =
            'Please enter a valid bill amount and choose a tip.';
        return;
    }

    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;

    result.textContent = `Tip: $${tipAmount.toFixed(2)} | Total: $${total.toFixed(2)}`;
});
