let data = [
    //{name: 'WORLD', gen: 'NUMBER', cost: '(Billion)USD', share: 'PERCENT'}
    // {
    //     name: "World",
    //     gen: 844.39,
    //     cost: 820,
    //     Share: 3.27,
    //     totalCon: 2894.197,
    //     consumptions: [329.564, 443.315, 572.908, 704.024, 844.386]
    // },
    { name: "CHN", gen: 261.10, cost: 25.08, Share: 3.42, totalCon: 845.7, consumptions: [66.5, 116.6, 177.5, 224, 261.1], wealth: 170000 },
    { name: "USA", gen: 132.63, cost: 17.6, Share: 3.27, totalCon: 187.496, consumptions: [54.866, 77.276, 93.365, 106.894, 132.63], wealth: 180000 },
    { name: "JAP", gen: 84.45, cost: 8.3, Share: 8.79, totalCon: 322.471, consumptions: [45.761, 55.069, 62.668, 74.522, 84.451], wealth: 5390 },
    { name: "IND", gen: 58.73, cost: 6.2, Share: 4.38, totalCon: 174.434, consumptions: [11.556, 21.545, 36.331, 46.273, 58.729], wealth: 2630 },
    { name: "GER", gen: 51.09, cost: 12, Share: 8.79, totalCon: 219.99, consumptions: [38.1, 39.4, 45.78, 46.39, 50.32], wealth: 3806 },
    { name: "CHL", gen: 7.47, cost: 10.2, Share: 9.32, totalCon: 144.11, consumptions: [22.1, 24.38, 22.65, 23.69, 25.88], wealth: 252.9 },
    { name: "BRZ", gen: 7.9, cost: 6.8, Share: 1.25, totalCon: 18.626, consumptions: [0.085, 0.832, 3.461, 6.655, 7.593], wealth: 1445 },
    { name: "AUS", gen: 18.64, cost: 3.5, Share: 7.42, totalCon: 57.066, consumptions: [6.209, 8.071, 9.929, 14.218, 18.639], wealth: 1331 }
];


// map(value, start1, stop1, start2, stop2)


function setup() {
    createCanvas(1800, 1800);
    background(127);

    firstChart = new HorizontalBarChart(data);
    firstChart.chartWidth = 300;
    firstChart.chartHeight = 300;
    firstChart.posX = 100;
    firstChart.posY = 400;
    firstChart.updateValue();
    firstChart.rotateLabels = false;

    secondChart = new VerticalBarChart(data);
    secondChart.chartWidth = 300;
    secondChart.chartHeight = 300;
    secondChart.posX = 600;
    secondChart.posY = 400;
    secondChart.updateValue();
    secondChart.rotateLabels = false;

    thirdChart = new StackedBarChart(data);
    thirdChart.chartWidth = 400;
    thirdChart.chartHeight = 500;
    thirdChart.posX = 100;
    thirdChart.posY = 100;
    thirdChart.updateValue();
    thirdChart.rotateLabels = false;

    fourthChart = new PlotChart(data);
    fourthChart.chartWidth = 400;
    fourthChart.chartHeight = 500;
    fourthChart.posX = 600;
    fourthChart.posY = 1100;
    fourthChart.updateValue();
    fourthChart.rotateLabels = false;

}



function draw() {
    background(127);
    scale(1)


    firstChart.updateValue();
    firstChart.render();

    secondChart.updateValue();
    secondChart.render();

    thirdChart.updateValue();
    thirdChart.render();


    fourthChart.updateValue();
    fourthChart.render();
}