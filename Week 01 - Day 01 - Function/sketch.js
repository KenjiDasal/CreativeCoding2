let xOffset = 100;
let yOffset = 100;

let spacing = 5;
let numBoxes = 5;



function setup(){
    createCanvas(500, 500);
    background(127);
}

function draw(){
   drawBox();
}

function drawBox(xOffset, yOffset, boxWidth, boxHeight, spacing, numBoxes){
    fill(255, 0, 0);
    noStroke();
    let totalSpace = boxSize + spacing;
    for(let i = 0; i < numBoxes; i++){
        rect(i * totalSpace + xOffset, totalSpace + yOffset, boxWidth, boxHeight);
    }
    
}



function text(startNumber, endNumber){
    let loopNumber = endNumber-startNumber
    for(let i = 0; i <= loopNumber; i++){
        console.log("testing");
    }

    return "done";
}

function sum(num1, num2){
    let total = num1 + num2; 
    console.log("all my work is done")
    return total;
}

