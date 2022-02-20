let chartWidth = 300;
let chartHeight = 300;
let posX = 100;
let posY = 450;
let maxValue;

// let data = [30, 100, 90, 20, 180, 94];
// let dataLabels = ["Oranges", "Bananas", "Lemons", "Limes", "Apples", "Grapes"];

let data = [
    { name: "Oranges", total: "30" },
    { name: "Bananas", total: "100" },
    { name: "Lemons", total: "90" },
    { name: "Limes", total: "20" },
    { name: "Apples", total: "180" },
    { name: "Grapes", total: "94" }
];

//An array method to map out a new array. 
let listValues = data.map(function(x) { return x.total });

let scaledData = [];
let spacing = 30;
let margin = 10;
let numTicks = 10;
let tickIncrements;
let colors;

let tickSpacing = chartHeight / numTicks; //space between ticks on  the left 
let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1)); //available space for bars
let barWidth = availableWidth / data.length; //bar width

let showValues = true;
let showLabels = true;
let rotateLabels = false;


function setup() {
    createCanvas(500, 500);
    background(0);

    colors = [
        color('#ffe066'),
        color('#ffab66 '),
        color('#f68f6a '),
        color('#f3646a ')
    ];

    maxValue = max(listValues);
    tickIncrements = Math.round(maxValue / numTicks);

    for (let i = 0; i < data.length; i++) {
        //this is different from the one above and maps out (value, start1, end)
        let tempVal = map(data[i].total, 0, maxValue, 0, chartHeight);
        scaledData.push(tempVal);
    }
}

function draw() {
    background(0);


    translate(posX, posY);
    //chart
    stroke(255, 180);
    strokeWeight(1);

    line(0, 0, 0, -chartHeight); //y

    line(0, 0, chartWidth, 0); //x

    for (let i = 0; i <= numTicks; i++) {
        //ticks
        stroke(255);
        line(0, tickSpacing * -i, -10, tickSpacing * -i);

        //numbers (text)
        fill(255, 200);
        noStroke();
        textSize(14);
        textAlign(RIGHT, CENTER);
        text((i * tickIncrements).toFixed(2), -15, tickSpacing * -i);
    }

    translate(margin, 0);
    for (let i = 0; i < scaledData.length; i++) {

        let colorNum = i % 4;

        //bars
        fill(colors[colorNum]);
        noStroke();
        rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);

        //numbers (text)
        if (showValues) {
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(data[i].total, ((barWidth + spacing) * i) + barWidth / 2, -scaledData[i]);
        }


        //text
        if (showLabels) {
            if (rotateLabels) {
                push();
                noStroke();
                fill(255);
                textSize(14);
                textAlign(CENTER, BOTTOM);
                translate(((barWidth + spacing) * i) + barWidth / 2, 20)
                rotate(PI / 2);
                text(data[i].name, 0, 0);
                pop();
            } else {
                noStroke();
                fill(255);
                textSize(14);
                textAlign(CENTER, BOTTOM);
                text(data[i].name, ((barWidth + spacing) * i) + barWidth / 2, 20);
            }
        }
    }
}