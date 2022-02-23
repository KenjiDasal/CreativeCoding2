let data = [


    { name: "Venti", total: 67.5, values: [16.6, 30.6, 20.3] },
    { name: "Zhongli", total: 53.4, values: [16.2, 26.7, 10.5] },
    { name: "Ganyu", total: 63.6, values: [16.6, 26.7, 20.3] },
    { name: "Hutao", total: 68.2, values: [12.4, 25.2, 30.6] },
    { name: "Klee", total: 44, values: [7, 22.7, 14.3] },
    { name: "Albedo", total: 31.71, values: [11.8, 17, 2.9] },
    { name: "Eula", total: 43, values: [12.6, 17, 13.4] }
];





function setup() {
    createCanvas(800, 800);
    background(127);

    firstChart = new StackedBarChart(data);
    firstChart.chartWidth = 400;
    firstChart.chartHeight = 400;
    firstChart.posX = 300;
    firstChart.posY = 700;
    firstChart.updateValue();
    firstChart.rotateLabels = false;



}



function draw() {
    background(127);

    firstChart.updateValue();
    firstChart.render();
}