let chartWidth = 400;
let chartHeight = 400;
let data = [230, 390, 120, 50, 30, 90, 120, 400];
let spacing = 20;
let margin = 60;
let numTicks = 10;
let lineLength = 10;

let ticks = chartHeight / numTicks;


let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1)) ;
let barWidth = availableWidth / data.length;

console.log(barWidth);
console.log(ticks)

    let val = 4;
function setup(){
    createCanvas(500, 500);
    background(127, 127, 127 );
    // angleMode(DEGREES);
    // rectMode(CENTER);
}

function draw(){
    background(127)
    
    stroke(0)
    strokeWeight(2)

    textSize(8);
    textAlign(RIGHT, CENTER);

    translate(50,450);
    line(0, 0, 0, -400);
    line(0, 0, 400, 0)

    fill(255, 255, 0)

    for(let j = 0; j <=  numTicks;  j++){ 
        stroke(0)
        line(0,  ticks * - j,  -lineLength,  ticks * -j);

        noStroke();
        text(ticks * j, -20, ticks * -j);
    }
    
    translate(margin, 0)
    for (let i = 0; i < data.length; i++){
        noStroke();
        fill('white')
        totalSpacing = barWidth + spacing;
        rect(totalSpacing * i, 0, barWidth, -data[i])

        let dataX = barWidth / 2;
        textAlign(CENTER, CENTER)
        fill('black');
        text(data[i], dataX + (totalSpacing  * i), -data[i] - spacing);
    }

    
}