var xValues = ["Parking", "Battery", "Tyre"];
var yValues = [55, 49, 44];
var barColors = ["red", "green","blue"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Parkville Daily Income"
    }
  }
});