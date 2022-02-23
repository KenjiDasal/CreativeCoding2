let data = [


    { name: "Venti", total: ["16.6", "30.6", "20.3"] },
    { name: "Zhongli", total: ["16.2", "26.7", "10.5"] },
    { name: "Ganyu", total: ["16.6", "26.7", "20.3"] },
    { name: "Hutao", total: ["12.4", "25.2", "30.6"] },
    { name: "Klee", total: ["7", "22.7", "14.3"] },
    { name: "Albedo", total: ["11.8", "17", "2.9"] },
    { name: "Eula", total: ["12.6", "17", "13.4"] }
];





function setup() {
    createCanvas(800, 800);
    background(127);

    firstChart = new StackedBarChart(data);
    firstChart.chartWidth = 400;
    firstChart.chartHeight = 400;
    firstChart.posX = 100;
    firstChart.posY = 700;
    firstChart.updateValue();
    firstChart.rotateLabels = false;



}



function draw() {
    background(127);

    firstChart.updateValue();
    firstChart.render();
}