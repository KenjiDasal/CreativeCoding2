let data = [
    { name: "Oranges", total: "30" },
    { name: "Bananas", total: "100" },
    { name: "Lemons", total: "90" },
    { name: "Limes", total: "20" },
    { name: "Apples", total: "180" },
    { name: "Grapes", total: "94" }
];



function setup() {
    createCanvas(800, 800);
    background(127);

    firstChart = new VerticalChart(data);
    firstChart.chartWidth = 200;
    firstChart.chartHeight = 200;
    firstChart.posX = 400;
    firstChart.posY = 400;
    firstChart.updateValue();

    secondChart = new VerticalChart(data);
    secondChart.chartWidth = 200;
    secondChart.chartHeight = 200;
    secondChart.posX = 400;
    secondChart.posY = 400;
    secondChart.updateValue();
}



function draw() {
    background(0);

    firstChart.render();
    secondChart.render();
}