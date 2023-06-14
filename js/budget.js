document.addEventListener('DOMContentLoaded', function() {
    // Hinzugefügte Kategorien speichern
    let addedCategories = [];

    // Überprüfen, ob im lokalen Speicher bereits Kategorien gespeichert sind
    if (localStorage.getItem('addedCategories')) {
        addedCategories = JSON.parse(localStorage.getItem('addedCategories'));
        updateCategoryOptions();
    }

    // Formular überwachen
    const form = document.getElementById('expense-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Ausgaben vom Benutzer abrufen
        const category = document.getElementById('category').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const description = document.getElementById('description').value;


        // Ausgaben zum Canvas-Diagramm hinzufügen
        addExpenseToCanvas(category, amount);

        // Ausgaben in der Transaktionsliste anzeigen
        displayTransaction(category, amount, description);

        // Hinzugefügte Kategorie speichern
        if (!addedCategories.includes(category)) {
            addedCategories.push(category);
            // Aktualisierte Kategorien im lokalen Speicher speichern
            localStorage.setItem('addedCategories', JSON.stringify(addedCategories));
        }

        // Optionen im Dropdown-Menü aktualisieren
        updateCategoryOptions();

        // Formular zurücksetzen
        form.reset();
    });

    // ...
});