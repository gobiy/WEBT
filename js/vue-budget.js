new Vue({
    // ... andere Optionen
    methods: {
      validateField: function(field) {
        if (!this.formData[field]) {
          this.errors[field] = true;
        } else {
          this.errors[field] = false;
        }
      },
      submitForm: function(event) {
        event.preventDefault();
        
        // Validierungslogik hier implementieren
        // ...
        
        // Überprüfen, ob ein Feld leer oder ungültig ist
        for (let field in this.formData) {
          if (!this.formData[field]) {
            this.errors[field] = true;
          }
        }
  
        if (!Object.values(this.errors).some(Boolean)) {
          // HTTP-Anfrage an den Server senden
          axios.post('add_expense.php', this.formData)
            .then(response => {
              // Antwort verarbeiten
              console.log(response.data); // Zum Testen in der Konsole anzeigen
            })
            .catch(error => {
              console.error(error);
              // Fehlerbehandlung
            });
        }
      }
    }
  });
  