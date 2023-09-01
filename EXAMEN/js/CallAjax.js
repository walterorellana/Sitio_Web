

var url = "https://censopoblacion.gt/indicadores/2/999";


fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const hombresElement = document.getElementById("Tsm");
    var mujeresElement = document.getElementById("Tsf");
    var age014Element = document.getElementById("age14");
    var age1564Element = document.getElementById("age15");
    var age65PlusElement = document.getElementById("age65");

    hombresElement.innerText = "Hombres: " + data[0].total_sexo_hombre;
    mujeresElement.innerText = "Mujeres: " + data[0].total_sexo_mujeres;
    age014Element.innerText = "0-14 años: " + data[0].pob_edad_014;
    age1564Element.innerText = "15-64 años: " + data[0].pob_edad_1564;
    age65PlusElement.innerText = "65 y más años: " + data[0].pob_edad_65;

    drawPieChart();
  });

  function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Edad', 'Cantidad'],
        ['14 años o menos', parseInt(document.getElementById('age14').innerText.split(":")[1].trim())],
        ['15 años', parseInt(document.getElementById('age15').innerText.split(":")[1].trim())],
        ['65 años o más', parseInt(document.getElementById('age65').innerText.split(":")[1].trim())]
    ]);

    var options = {
        title: 'Distribución por edad',
        pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
    chart.draw(data, options);
}




function LLamada1() {
  var cmbUbication = document.getElementById("cmbUbication");

  var url = "";
  if (cmbUbication != null) {
    url =
      "https://censopoblacion.gt/indicadores/2/" +
      (cmbUbication.value == "Mostrar Todos" ? "" : cmbUbication.value);
  } else {
    url = "https://censopoblacion.gt/indicadores/2/999";
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const hombresElement = document.getElementById("Tsm");
      var mujeresElement = document.getElementById("Tsf");
      var age014Element = document.getElementById("age14");
      var age1564Element = document.getElementById("age15");
      var age65PlusElement = document.getElementById("age65");

      hombresElement.innerText = "Hombres: " + data[0].total_sexo_hombre;
      mujeresElement.innerText = "Mujeres: " + data[0].total_sexo_mujeres;
      age014Element.innerText = "0-14 años: " + data[0].pob_edad_014;
      age1564Element.innerText = "15-64 años: " + data[0].pob_edad_1564;
      age65PlusElement.innerText = "65 y más años: " + data[0].pob_edad_65;

      drawPieChart();
    });
}

function LLamada2() {
  var cmbUbication = document.getElementById("cmbUbication");

  var url = "";
  if (cmbUbication != null) {
    url =
      "https://censopoblacion.gt/indicadores/" +
      (cmbUbication.value == "Mostrar Todos" ? "" : cmbUbication.value) + "/999";
  } else {
    url = "https://censopoblacion.gt/indicadores/1/999";
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const hombresElement = document.getElementById("Tsm");
      var mujeresElement = document.getElementById("Tsf");
      var age014Element = document.getElementById("age14");
      var age1564Element = document.getElementById("age15");
      var age65PlusElement = document.getElementById("age65");

      hombresElement.innerText = "Hombres: " + data[0].total_sexo_hombre;
      mujeresElement.innerText = "Mujeres: " + data[0].total_sexo_mujeres;
      age014Element.innerText = "0-14 años: " + data[0].pob_edad_014;
      age1564Element.innerText = "15-64 años: " + data[0].pob_edad_1564;
      age65PlusElement.innerText = "65 y más años: " + data[0].pob_edad_65;

      grafica(data[0].total_sexo_hombre, data[0].total_sexo_mujeres);
    });
}

function grafica(hombres, mujeres) {
  const data = {
    labels: ['Hombres', 'Mujeres'],
    datasets: [{
      label: 'Población por género',
      data: [hombres, mujeres],
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
      ],
      hoverOffset: 4
    }]
  };

  const ctx = document.getElementById('myDoughnutChart').getContext('2d');
  const myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
  });
}
