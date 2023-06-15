/*document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('expense-form');
    const chartData = [];
  
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const category = document.getElementById('category').value;
        const amount = parseFloat(document.getElementById('amount').value);
        
        addExpenseToCanvas(category, amount);
        resetForm();
    });
  
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
  
        displayTransactions(chartData);
    }
  
    }
  
    function resetForm() {
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('description').value = '';
    }
  
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
  
    // Lade vorhandene Transaktionen beim Laden der Seite
    fetch('add_expense.php')
        .then(response => response.json())
        .then(json => {
            chartData.push(...json);
            drawPieChart(chartData);
            displayTransactions(chartData);
        })
        .catch(error => console.error('Fehler beim Laden der Transaktionen:', error));
});