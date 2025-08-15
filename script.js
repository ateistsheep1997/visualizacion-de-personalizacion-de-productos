const ctx = document.getElementById('preferencesChart').getContext('2d');

const options = document.getElementById('personalization');
options.addEventListener('change', updateChart);

let preferencesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Grupo A', 'Grupo B', 'Grupo C'],
        datasets: [{
            label: 'Preferencias',
            data: [12, 19, 3], // Datos simulados
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function updateChart() {
    // Aquí se podrían incluir lógica para obtener y actualizar datos según la opción seleccionada.
    // Por ejemplo, realizar una llamada a un API o actualizar la data directamente.
    preferencesChart.update();
}
