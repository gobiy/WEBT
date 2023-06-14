new Vue({
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
        
        for (let field in this.formData) {
          if (!this.formData[field]) {
            this.errors[field] = true;
          }
        }
  
        if (!Object.values(this.errors).some(Boolean)) {
          axios.post('add_expense.php', this.formData)
            .then(response => {
    
              console.log(response.data); 
            })
            .catch(error => {
              console.error(error);
            });
        }
      }
    }
  });
  