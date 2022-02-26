let data = [
    //{name: 'WORLD', gen: 'NUMBER', cost: '(Billion)USD', share: 'PERCENT'}
    { name: "World", gen: 844.39, cost: 820, Share: 3.27 },
    { name: "China", gen: 261.10, cost: 25.08, Share: 3.42 },
    { name: "USA", gen: 132.63, cost: 17.6, Share: 3.27 },
    { name: "Japan", gen: 84.45, cost: 8.3, Share: 8.79 },
    { name: "India", gen: 58.73, cost: 6.2, Share: 4.38 },
    { name: "Germany", gen: 51.09, cost: 12, Share: 8.79 },
    { name: "Italy", gen: 26.02, cost: 10.2, Share: 9.32 },
    { name: "Africa", gen: 19.38, cost: 11, Share: 2.23 },
    { name: "Austrailia", gen: 18.64, cost: 7.7, Share: 7.42 }
];





function setup() {
    createCanvas(1800, 1800);
    background(127);

    firstChart = new HorizontalBarChart(data);
    firstChart.chartWidth = 300;
    firstChart.chartHeight = 300;
    firstChart.posX = 800;
    firstChart.posY = 400;
    firstChart.updateValue();
    firstChart.rotateLabels = false;

    chart02 = new VerticalBarChart(data);
    chart02.chartWidth = 500;
    chart02.chartHeight = 500;
    chart02.posX = 100;
    chart02.posY = 1000;
    chart02.updateValue();
    chart02.rotateLabels = false;

    thirdChart = new VerticalBarChart(data);
    thirdChart.chartWidth = 500;
    thirdChart.chartHeight = 300;
    thirdChart.posX = 100;
    thirdChart.posY = 400;
    thirdChart.updateValue();
    thirdChart.rotateLabels = false;

}



function draw() {
    background(127);

    push();
    firstChart.render();
    pop();
    push();
    chart02.render();
    pop();
    push();
    thirdChart.render();
    pop();
}