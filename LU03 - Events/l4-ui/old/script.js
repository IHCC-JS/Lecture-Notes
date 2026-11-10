const EXCELLENT_CREDIT = 720;
const GOOD_CREDIT = 650;
const MAX_RATIO_BEST = 0.35;
const MAX_RATIO_MID = 0.45;
const MULTIPLIER_BEST = 6;
const MULTIPLIER_MID = 4;

const form = document.getElementById("loanForm");
const incomeInput = document.getElementById("income");
const expensesInput = document.getElementById("expenses");
const creditInput = document.getElementById("creditScore");
const loanInput = document.getElementById("loanAmount");

const resultBox = document.getElementById("resultBox");
const resultMessage = document.getElementById("resultMessage");
const outIncome = document.getElementById("outIncome");
const outExpenses = document.getElementById("outExpenses");
const outRatio = document.getElementById("outRatio");
const outCredit = document.getElementById("outCredit");
const outLoan = document.getElementById("outLoan");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    //user input
    const income = Number(incomeInput.value);
    const expenses = Number(expensesInput.value);
    const credit = Number(creditInput.value);
    const loan = Number(loanInput.value);


    // validation
    if (income <= 0 || expenses < 0 || credit < 300 || loan <= 0) {
        resultMessage.textContent = "⚠️ Please enter valid numbers in all fields.";
        resultBox.classList.remove("hidden");
        return;
    }

    // business logic
    const ratio = expenses / income;
    let message = "";

    //TODO i think we can simplify this a bit.
    if (credit >= EXCELLENT_CREDIT && ratio < MAX_RATIO_BEST && loan <= income * MULTIPLIER_BEST) {
        message = "Congratulations! You qualify for our best loan terms.";
    } else if (credit >= GOOD_CREDIT && ratio < MAX_RATIO_MID && loan <= income * MULTIPLIER_MID) {
        message = "You might qualify — consider reducing expenses or loan amount.";
    } else {
        message = "Unfortunately, you do not currently qualify. Try improving your credit score or lowering expenses.";
    }

    //output
    resultMessage.textContent = message;
    outIncome.textContent = "$" + income.toFixed(2);
    outExpenses.textContent = "$" + expenses.toFixed(2);
    outRatio.textContent = `${(ratio * 100).toFixed(1)}%`;
    outCredit.textContent = credit.toFixed(0);
    outLoan.textContent = "$" + loan.toFixed(2);
    resultBox.classList.remove("hidden"); //make output visible
});