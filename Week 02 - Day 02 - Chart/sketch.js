let chartWidth = 400;
let chartHeight = 400;

let maxValue;
let tickInc;

let data = [10, 70, 60, 30, 40, 80, 90, 90, 110];
let scaledData = [];

let spacing = 5;
let margin = 20;
let numTicks = 10;
let lineLength = 10;

let ticks = chartHeight / numTicks;

let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1));
let barWidth = availableWidth / data.length;

console.log(barWidth);
console.log(ticks);

let val = 4;

function setup() {
    createCanvas(500, 500);
    background(127, 127, 127);
    // angleMode(DEGREES);
    // rectMode(CENTER);


    maxValue = max(...data);
    console.log(maxValue);

    tickInc = Math.round(maxValue / numTicks);
    console.log(tickInc);

    for (let i = 0; i < data.length; i++) {
        let tempVal = map(data[i], 0, maxValue, 0, chartHeight)
        scaledData.push(tempVal);
    }
}

function draw() {
    background(127)

    stroke(0)
    strokeWeight(2)

    textSize(8);
    textAlign(RIGHT, CENTER);

    translate(50, 450);
    line(0, 0, 0, -chartHeight);
    line(0, 0, chartWidth, 0)

    fill(255, 255, 0)

    for (let j = 0; j <= numTicks; j++) {
        stroke(0)
        line(0, ticks * -j, -lineLength, ticks * -j);

        noStroke();
        text(round(tickInc * j), -20, ticks * -j);
    }

    translate(margin, 0)
    for (let i = 0; i < data.length; i++) {
        noStroke();
        fill('white')
        totalSpacing = barWidth + spacing;
        rect(totalSpacing * i, 0, barWidth, -scaledData[i])

        dataX = barWidth / 2;
        textAlign(CENTER)
        fill('cyan');
        text(round(data[i]), dataX + (totalSpacing * i), -scaledData[i] - spacing);
    }


}