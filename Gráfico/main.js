const canvasCTX = document.getElementById('canvas').getContext('2d');

const meuGrafico = new Chart(canvasCTX, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Produtos',
            data: [2339, 1765, 967, 1028, 823, 1264, 1488, 1946, 1652, 1783, 2071, 2790],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Quantidade de produtos vendidos em 2021',
                padding: {
                    bottom: 30
                }
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        },
        layout: {
            padding: {
                top: 30,
                bottom: 20,
                left: 50,
                right: 50
            }
        }
    }
});