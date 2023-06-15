function displayTransactions(transactions) {
const totalIncomeInput = document.getElementById('einnahmen');
const transactionList = document.getElementById('transaction-list');
const totalAmountElement = document.getElementById('total-amount');
let totalAmount = 0;

transactions.forEach((transaction) => {
    const { Kategorie, Betrag, Beschreibung } = transaction;

    const transactionItem = document.createElement('li');
    transactionItem.textContent = `Kategorie: ${Kategorie}, Betrag: ${Betrag}, Beschreibung: ${Beschreibung}`;
    transactionItem.setAttribute('data-amount', Betrag);

    transactionList.appendChild(transactionItem);

    totalAmount += parseFloat(Betrag);
});

totalAmountElement.textContent = `Gesamtbetrag: ${totalAmount.toFixed(2)}`;
updateTotalAmount();
}

function createExpenseChart(transactions) {
const ctx = document.getElementById('canvas').getContext('2d');

const categories = {};
transactions.forEach((transaction) => {
    const { Kategorie, Betrag } = transaction;
    if (categories[Kategorie]) {
    categories[Kategorie] += parseFloat(Betrag);
    } else {
    categories[Kategorie] = parseFloat(Betrag);
    }
});

const labels = Object.keys(categories);
const data = Object.values(categories);

new Chart(ctx, {
    type: 'pie',
    data: {
    labels: labels,
    datasets: [{
        data: data,
        backgroundColor: [
        '#ff6384',
        '#36a2eb',
        '#ffce56',
        '#8eff8e',
        '#f5a3ff',
        '#b2b2b2',
        '#ffd54c',
        ],
    }],
    },
});
}

function displayTransactions(transactions) {
const totalIncomeInput = document.getElementById('einnahmen');
const transactionList = document.getElementById('transaction-list');
const totalAmountElement = document.getElementById('total-amount');
let totalAmount = 0;

transactions.forEach((transaction) => {
    const { Kategorie, Betrag, Beschreibung } = transaction;

    const transactionItem = document.createElement('li');
    transactionItem.textContent = `Kategorie: ${Kategorie}, Betrag: ${Betrag}, Beschreibung: ${Beschreibung}`;
    transactionItem.setAttribute('data-amount', Betrag);

    transactionList.appendChild(transactionItem);

    totalAmount += parseFloat(Betrag);
    
});

totalAmountElement.textContent = `Gesamtbetrag: ${totalAmount.toFixed(2)}`;

createExpenseChart(transactions);
}

fetch("add_expense.php")
.then((response) => response.json())
.then((json) => displayTransactions(json));

updateTotalAmount();
