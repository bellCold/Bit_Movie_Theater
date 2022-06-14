const ctx = document.getElementById('movieChart');
const data ={
    labels:[
        'fun',
        'scary',
        'sad',
        'carzy',
        'gore'
    ],
    datasets:[{
        label:'movie',
        data:[10,9,5,7,4],
        fill:true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: 'black',
        pointHoverBackgroundColor: 'black',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
}
const config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };

const movieChart = new Chart(ctx, config);