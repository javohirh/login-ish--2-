const xValues = [
  "balon",
  "balon2",
  "balon3",
  "balon4",
  "balon5",
  "balon6",
  "balon7",
  "balon8",
  "balon9",
  "balon10",
  "balon11",
  "balon12",
  "balon13",
  "balon",
  "balon2",
  "balon3",
  "balon4",
  "balon5",
  "balon6",
  "balon7",
  "balon8",
  "balon9",
  "balon10",
  "balon11",
  "balon12",
  "balon13",
];
const yValues = [
  55, 49, 44, 24, 15, 50, 40, 45, 20, 100, 11, 12, 55, 49, 44, 24, 15, 50, 40,
  45, 20, 100, 11, 12, 13, 17,
];
const barColors = [];
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

xValues.forEach((i) => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  barColors.push(hexColor + "50");
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
        label: "SOTILGANLAR SONI",
      },
    ],
  },
});

console.log(myChart);
