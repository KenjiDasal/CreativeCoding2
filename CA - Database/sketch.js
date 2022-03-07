let dataTest = [
    { name: "CHN", consumption: 261.10, cost: 25.08, totalgen: 845.7, genration: [66.5, 116.6, 177.5, 224, 261.1] },
    { name: "USA", consumption: 132.63, cost: 17.6, totalgen: 465.031, genration: [54.866, 77.276, 93.365, 106.894, 132.63] },
    { name: "JAP", consumption: 84.45, cost: 8.3, totalgen: 322.471, genration: [45.761, 55.069, 62.668, 74.522, 84.451] },
    { name: "IND", consumption: 58.73, cost: 6.2, totalgen: 174.434, genration: [11.556, 21.545, 36.331, 46.273, 58.729] },
    { name: "GER", consumption: 51.09, cost: 12, totalgen: 219.99, genration: [38.1, 39.4, 45.78, 46.39, 50.32] },
    { name: "CHL", consumption: 7.47, cost: 10.2, totalgen: 118.7, genration: [22.1, 24.38, 22.65, 23.69, 25.88] },
    { name: "BRZ", consumption: 7.9, cost: 6.8, totalgen: 18.626, genration: [0.085, 0.832, 3.461, 6.655, 7.593] },
    { name: "AUS", consumption: 18.64, cost: 3.5, totalgen: 57.066, genration: [6.209, 8.071, 9.929, 14.218, 18.639] }
];

let labels = [
    { year: [2016, 2017, 2018, 2019, 2020] }
]


// map(value, start1, stop1, start2, stop2)


function setup() {
    createCanvas(1500, 1000);
    generateData()
    background(127);

    //(_data, _label, _title, _sideTitle, _chartW, _chartH, _posX, _posY, _spacin, _margin, _color, _showV, _listV, _rotateV, _showL)

    firstChart = new HorizontalBarChart(data, "Total Consumption", "Consumption (TWh)", 400, 400, 100, 700, 5, 30, true, true, false);
    firstChart.updateValue();

    secondChart = new VerticalBarChart(data, "Total Investment", "Investment (Billion)", 700, 500, 600, 700, 10, 30, true, true, false);
    secondChart.updateValue();

    //constructor(_data, _label, _title, _sideTitle, _bottomTitle, _chartW, _chartH, _posX, _posY, _spacing, _margin, _color, _showV, _listV, _rotateV, _showL) {
    thirdChart = new FullStackedBarChart(data, labels, "Generation per TWh (2015-2020)", "% of Energy Generation", "Countries", 700, 500, 100, 1400, 5, 30, true, true, false, true);
    thirdChart.updateValue();

    fourthChart = new PlotChart(data, "Investment VS Consumption", "Investment (Billions)", "Consumption (TWh)", 500, 500, 1400, 700, 5, 30, true, true, false);
    fourthChart.updateValue();

}



function draw() {
    background(127);
    scale(.68)
    firstChart.updateValue();
    firstChart.render();

    secondChart.updateValue();
    secondChart.render();

    thirdChart.updateValue();
    thirdChart.render();

    fourthChart.updateValue();
    fourthChart.render();
}