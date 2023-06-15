function validateForm() {
    const einnahmenInput = document.getElementById('einnahmen');
    const categoryInput = document.getElementById('category');
    const amountInput = document.getElementById('amount');
    const descriptionInput = document.getElementById('description');
  
    let isValid = true;
  
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((errorMessage) => {
      errorMessage.remove();
    });
  
    if (einnahmenInput.value.trim() === '') {
      displayErrorMessage(einnahmenInput, 'Bitte geben Sie Ihre Einnahmen ein');
      isValid = false;
    }
  
    if (categoryInput.value === '') {
      displayErrorMessage(categoryInput, 'Bitte wählen Sie eine Kategorie aus');
      isValid = false;
    }
  
    if (amountInput.value.trim() === '') {
      displayErrorMessage(amountInput, 'Bitte geben Sie einen Betrag ein');
      isValid = false;
    }
  
    if (descriptionInput.value.trim() === '') {
      displayErrorMessage(descriptionInput, 'Bitte geben Sie eine Beschreibung ein');
      isValid = false;
    }
  
    return isValid;
  }
  
  function displayErrorMessage(inputElement, message) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    inputElement.parentNode.appendChild(errorMessage);
  }
  
  const expenseForm = document.getElementById('expense-form');
  expenseForm.addEventListener('submit', (event) => {
    if (!validateForm()) {
      event.preventDefault();
    }
  });
  