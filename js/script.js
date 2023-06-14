/*document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('expense-form');
  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const category = document.getElementById('category').value;
      const amount = parseFloat(document.getElementById('amount').value);
      const description = document.getElementById('description').value;

      if (!category || !amount) {
          return; 
      }

      addExpenseToCanvas(category, amount);

      displayTransaction(category, amount, description);

      form.reset();
  });

  const addCategoryButton = document.getElementById('add-category');
  addCategoryButton.addEventListener('click', function() {
      const newCategory = document.getElementById('new-category').value;
      if (newCategory) {
          addCategoryOption(newCategory);
          document.getElementById('new-category').value = '';
      }
  });

  function addCategoryOption(category) {
      const selectElement = document.getElementById('category');
      const newOption = document.createElement('option');
      newOption.value = category;
      newOption.textContent = category;
      selectElement.appendChild(newOption);
  }

  function displayTransaction(category, amount, description) {
      const transactionList = document.getElementById('transaction-list');

      const transactionItem = document.createElement('li');
      transactionItem.textContent = `Kategorie: ${category}, Betrag: ${amount}, Beschreibung: ${description}`;

      transactionList.appendChild(transactionItem);
  }

  const chartData = [];

    function addExpenseToCanvas(category, amount) {
      const existingCategory = chartData.find(item => item.category === category);

      if (existingCategory) {
          existingCategory.amount += amount;
      } else {
          chartData.push({ category: category, amount: amount });
      }

      drawPieChart(chartData);
  }

  function drawPieChart(data) {
      const canvas = document.getElementById('canvas');
      const context = canvas.getContext('2d');
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) - 10;
      const total = data.reduce((sum, item) => sum + item.amount, 0);
      let startAngle = 0;

      context.clearRect(0, 0, canvas.width, canvas.height);

      data.forEach(item => {
          const sliceAngle = (item.amount / total) * 2 * Math.PI;

          context.beginPath();
          context.moveTo(centerX, centerY);
          context.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
          context.fillStyle = getRandomColor();
          context.fill();

          startAngle += sliceAngle;
      });
  }

   function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
});
*/
