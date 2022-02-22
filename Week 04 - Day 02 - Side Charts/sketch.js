let data = [
    { name: "Oranges", total: "30" },
    { name: "Bananas", total: "100" },
    { name: "Lemons", total: "90" },
    { name: "Limes", total: "20" },
    { name: "Apples", total: "100" },
    { name: "Grapes", total: "94" }
];



function setup() {
    createCanvas(800, 800);
    background(127);

    firstChart = new HorizontalBarChart(data);
    firstChart.chartWidth = 400;
    firstChart.chartHeight = 400;
    firstChart.posX = 100;
    firstChart.posY = 700;
    firstChart.updateValue();
    firstChart.rotateLabels = false;



}



function draw() {
    background(0);

    firstChart.updateValue();
    firstChart.render();
}