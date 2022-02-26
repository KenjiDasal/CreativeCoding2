let data = [
    { name: "Venti", total: 68.2, values: [16.6, 30.6, 21] },
    { name: "Zhongli", total: 53.4, values: [16.2, 26.7, 10.5] },
    { name: "Ganyu", total: 63.6, values: [16.6, 26.7, 20.3] },
    { name: "Hutao", total: 68.2, values: [12.4, 25.2, 30.6] },
    { name: "Klee", total: 44, values: [7, 22.7, 14.3] },
    { name: "Albedo", total: 31.71, values: [11.8, 17, 2.9] },
    { name: "Eula", total: 43, values: [12.6, 17, 13.4] }
];





function setup() {
    createCanvas(1800, 1800);
    background(127);

    firstChart = new FullStackedBarChart(data);
    firstChart.chartWidth = 500;
    firstChart.chartHeight = 500;
    firstChart.posX = 100;
    firstChart.posY = 700;
    firstChart.updateValue();
    firstChart.rotateLabels = false;

    // chart02 = new StackedBarChart(data);
    // chart02.chartWidth = 500;
    // chart02.chartHeight = 500;
    // chart02.posX = 800;
    // chart02.posY = 700;
    // chart02.updateValue();
    // chart02.rotateLabels = false;

}



function draw() {
    background(127);

    push();
    firstChart.render();
    pop();
    // push();
    // chart02.render();
    // pop();
}