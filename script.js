//Char.js
var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bubble',
    data: {
        labels: [
            'Completed',
            'Ongoing',
            'Stalled'
        ],
        datasets: [{
            label: 'Query 1',
            data: [300, 50, 100],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
            hoverOffset: 3
        }]
    },

});

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Completed',
            'Ongoing',
            'Stalled'
        ],
        datasets: [{
            label: 'Query 2',
            data: [300, 50, 100],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
            hoverOffset: 3
        }]
    },

    options: {
        indexAxis: 'y',
    }

});

var ctx = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'Completed',
            'Ongoing',
            'Stalled'
        ],
        datasets: [{
            label: 'Query 3',
            data: [300, 50, 100],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
            hoverOffset: 3
        }],

        options: {
            indexAxis: 'y'
        }
    },

});

var ctx = document.getElementById('myChart4').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'A tiempo',
            'Tarde',
            'Cancelados'
        ],
        datasets: [{
            label: 'Query 4',
            data: [300, 50, 100],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
            hoverOffset: 3
        }]
    },

});

var ctx = document.getElementById('myChart5').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'Completed',
            'Ongoing',
            'Stalled'
        ],
        datasets: [{
            label: 'Query 5',
            data: [300, 50, 100],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
            hoverOffset: 3
        }]
    },

});

var ctx = document.getElementById('myChart6').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Completed',
            'Ongoing',
            'Stalled'
        ],
        datasets: [{
            label: 'Query 6',
            data: [300, 50, 100],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
            hoverOffset: 3
        }]
    },

});
