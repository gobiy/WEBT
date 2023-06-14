function displayTransactions(transactions) {
    const transactionList = document.getElementById('transaction-list');

    transactions.forEach((transaction) => {
        const { Kategorie, Betrag, Beschreibung } = transaction;

        const transactionItem = document.createElement('li');
        transactionItem.textContent = `Kategorie: ${Kategorie}, Betrag: ${Betrag}, Beschreibung: ${Beschreibung}`;

        transactionList.appendChild(transactionItem);

        
    });
}

fetch("add_expense.php")
.then((response) => response.json())
.then((json) => displayTransactions(json));





/*document.addEventListener('DOMContentLoaded', function() {
    let addedCategories = [];

    if (localStorage.getItem('addedCategories')) {
        addedCategories = JSON.parse(localStorage.getItem('addedCategories'));
        updateCategoryOptions();
    }

    const form = document.getElementById('expense-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const category = document.getElementById('category').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const description = document.getElementById('description').value;

        addExpenseToCanvas(category, amount);

        displayTransaction(category, amount, description);

        if (!addedCategories.includes(category)) {
            addedCategories.push(category);
            localStorage.setItem('addedCategories', JSON.stringify(addedCategories));
        }

        updateCategoryOptions();

        form.reset();
    });

});*/