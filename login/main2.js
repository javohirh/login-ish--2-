let chartInstance; // Declare chartInstance to store the current chart
const resetBtn = document.getElementById("reset");

const API = "http://api.power007.uz/api/bozor";
let barColors = [];
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const elForm = document.querySelector("#search");
const token = localStorage.getItem("token");

function getData() {
  fetch(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      let xValues = [];
      let yValues = [];
      data.data.forEach((one) => {
        xValues.push(one.balon);
        yValues.push(one.soni);
      });
      addColor(xValues);
      showChart(xValues, yValues); // Initially render the chart
    });
}
getData();

function addColor(x) {
  barColors = []; // Reset barColors before adding new ones
  x.forEach(() => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    barColors.push(hexColor + "50");
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function showChart(x, y) {
  if (chartInstance) {
    chartInstance.destroy(); // Destroy the previous chart before creating a new one
  }

  chartInstance = new Chart("myChart", {
    type: "bar",
    data: {
      labels: x,
      datasets: [
        {
          backgroundColor: barColors,
          data: y,
          label: "SOTILGANLAR SONI",
        },
      ],
    },
    options: {
      responsive: true,

      scales: {
        y: {
          beginAtZero: true, // Ensures the y-axis starts at 0
        },
      },
    },
  });
}

elForm.addEventListener("submit", (e) => {
  const filterX = [];
  const filterY = [];
  e.preventDefault();
  if (elForm.dan.value == "" || elForm.gacha.value == "") {
    showMessage("Ikkala sanani ham kiriting !!", 2500, "gold");
  }

  if (elForm.dan.value !== "" && elForm.gacha.value !== "") {
    const startDate = elForm.dan.value;
    const endDate = elForm.gacha.value;
    fetch(`${API}/statics?startDate=${startDate}&endDate=${endDate}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        filterX.length = 0; // Clear previous data
        filterY.length = 0; // Clear previous data

        data.forEach((one) => {
          filterX.push(one.balon);
          filterY.push(one.soni);
        });

        addColor(filterX); // Generate new colors for filtered data
        showChart(filterX, filterY); // Render chart with filtered data
      });
  }
});

resetBtn.addEventListener("click", () => {
  elForm.dan.value = "";
  elForm.gacha.value = "";
  getData();
});
function showMessage(
  message,
  time = 3000,
  color = "linear-gradient(to right, #00b09b, #96c93d)"
) {
  Toastify({
    text: message,
    duration: time,

    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: color,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
