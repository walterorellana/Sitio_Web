
let myDoughnutChart;
let myDoughnutChartt;
LLamada2();

// var url = "https://censopoblacion.gt/indicadores/2/999";

function LLamada1() {
  var cmbUbication = document.getElementById("cmbUbication");

  var url = "";
  if (cmbUbication != null) {
    url =
      "https://censopoblacion.gt/indicadores/2/" +
      (cmbUbication.value == "Mostrar Todos" ? "" : cmbUbication.value);
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

      drawPieChart();
    });
}

function LLamada2() {
  var cmbUbication = document.getElementById("cmbUbication");

  var url = "";
  if (cmbUbication != null) {
    url =
      "https://censopoblacion.gt/indicadores/" +
      (cmbUbication.value == "Mostrar Todos" ? "" : cmbUbication.value) +
      "/999";
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

      var extraPlusElement = document.getElementById("extra");
      var gariPlusElement = document.getElementById("gari");
      var ladiPlusElement = document.getElementById("ladi");
      var mayaPlusElement = document.getElementById("maya");
      var xincaPlusElement = document.getElementById("xinca");
      var ruralPlusElement = document.getElementById("rural");

      hombresElement.innerText = "Hombres: " + data[0].total_sexo_hombre;
      mujeresElement.innerText = "Mujeres: " + data[0].total_sexo_mujeres;
      age014Element.innerText = "0-14 años: " + data[0].pob_edad_014;
      age1564Element.innerText = "15-64 años: " + data[0].pob_edad_1564;
      age65PlusElement.innerText = "65 y más años: " + data[0].pob_edad_65;

      extraPlusElement.innerText =
        "extranjero: " + data[0].pob_pueblo_extranjero;
      gariPlusElement.innerText = "garifuna: " + data[0].pob_pueblo_garifuna;
      ladiPlusElement.innerText = "ladino: " + data[0].pob_pueblo_ladino;
      mayaPlusElement.innerText = "maya: " + data[0].pob_pueblo_maya;
      xincaPlusElement.innerText = "xinca: " + data[0].porc_pueblo_xinca;
      ruralPlusElement.innerText = "rural: " + data[0].porc_sector_rural;

      grafica(data[0].total_sexo_hombre, data[0].total_sexo_mujeres);
      grafica1(
        data[0].pob_pueblo_extranjero,
        data[0].pob_pueblo_garifuna,
        data[0].pob_pueblo_ladino,
        data[0].pob_pueblo_maya,
        data[0].porc_pueblo_xinca,
        data[0].porc_sector_rural
      );
    });
}

function grafica(hombres, mujeres) {
  const ctx = document.getElementById("myDoughnutChart").getContext("2d");

  const data = {
    labels: ["Hombres", "Mujeres"],
    datasets: [
      {
        label: "Población por género",
        data: [hombres, mujeres],
        backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  if (myDoughnutChart) {
    myDoughnutChart.data.datasets[0].data = [hombres, mujeres];
    myDoughnutChart.update();
  } else {
    myDoughnutChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  }
}

function grafica1(extranjero, garifuna, latino) {
  const ctx = document.getElementById("myDoughnutChartt").getContext("2d");

  const data = {
    labels: ["extranjero", "garifuna", "latino"],
    datasets: [
      {
        label: "Población por género",
        data: [extranjero, garifuna, latino],
        backgroundColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
          "rgb(0, 128, 0)",
          "rgb(255, 255, 0)",
          "rgb(128, 128, 128)",
          "rgb(128, 0, 128)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  if (myDoughnutChartt) {
    myDoughnutChartt.data.datasets[0].data = [extranjero, garifuna, latino];
    myDoughnutChartt.update();
  } else {
    myDoughnutChartt = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  }
}
