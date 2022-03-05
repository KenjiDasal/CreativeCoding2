let dataTest = [
    { name: "CHN", gen: 261.10, cost: 25.08, Share: 3.42, totalCon: 845.7, consumptions: [66.5, 116.6, 177.5, 224, 261.1], wealth: 170000 },
    { name: "USA", gen: 132.63, cost: 17.6, Share: 3.27, totalCon: 465.031, consumptions: [54.866, 77.276, 93.365, 106.894, 132.63], wealth: 180000 },
    { name: "JAP", gen: 84.45, cost: 8.3, Share: 8.79, totalCon: 322.471, consumptions: [45.761, 55.069, 62.668, 74.522, 84.451], wealth: 5390 },
    { name: "IND", gen: 58.73, cost: 6.2, Share: 4.38, totalCon: 174.434, consumptions: [11.556, 21.545, 36.331, 46.273, 58.729], wealth: 2630 },
    { name: "GER", gen: 51.09, cost: 12, Share: 8.79, totalCon: 219.99, consumptions: [38.1, 39.4, 45.78, 46.39, 50.32], wealth: 3806 },
    { name: "CHL", gen: 7.47, cost: 10.2, Share: 9.32, totalCon: 118.7, consumptions: [22.1, 24.38, 22.65, 23.69, 25.88], wealth: 252.9 },
    { name: "BRZ", gen: 7.9, cost: 6.8, Share: 1.25, totalCon: 18.626, consumptions: [0.085, 0.832, 3.461, 6.655, 7.593], wealth: 1445 },
    { name: "AUS", gen: 18.64, cost: 3.5, Share: 7.42, totalCon: 57.066, consumptions: [6.209, 8.071, 9.929, 14.218, 18.639], wealth: 1331 }
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