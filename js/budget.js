document.addEventListener('DOMContentLoaded', function() {
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

});