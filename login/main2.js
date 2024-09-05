const xValues = [];
const yValues = [];
const API = "http://localhost:7070/api/bozor";
const barColors = [];
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const elForm = document.querySelector("#search");
function getData() {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      data.data.forEach((one) => {
        xValues.push(one.balon);
        yValues.push(one.soni);
      });
      addColor();
      showChart();
    });
}
getData();
function addColor() {
  xValues.forEach((i) => {
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

function showChart(x = xValues, y = yValues) {
  new Chart("myChart", {
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
  });
}
const filterX = [];
const filterY = [];
elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (elForm.dan.value !== "" && elForm.gacha.value !== "") {
    const startDate = elForm.dan.value;
    const endDate = elForm.gacha.value;
    fetch(`${API}/statics?startDate=${startDate}&endDate=${endDate}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((one) => {
          filterX.push(one.balon);
          filterY.push(one.soni);
        });
        showChart(filterX, filterX);
        addColor();
      });
  }
  if (elForm.dan.value == "" || elForm.gacha.value == "") {
    showMessage("Qidirish uchun ikkala sanani ham to'liq kiriting kiriting");
  }

  elForm.reset();
});

function showMessage(
  message,
  time = 3000,
  color = "linear-gradient(to right, #00b09b, #96c93d)",
  position = "center"
) {
  Toastify({
    text: message,
    duration: time,

    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: position, // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: color,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

// showMessage("Profilga muvaffaqiyatli kirildi !!!", 2500, "green", "right");
