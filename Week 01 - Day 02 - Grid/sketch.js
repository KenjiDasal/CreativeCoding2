

function setup(){
    createCanvas(500, 500);
    background(127);
}

function draw(){
   drawBox();
}

function drawBox(xOffset, yOffset, boxSize, spacing, colBoxes, rowBoxes, red, green, blue){
    noFill();
    stroke(red, green, blue);
    let totalSpace = boxSize + spacing;
    for(let row = 0; row < rowBoxes; row++){
        for(let col = 0; col < colBoxes; col++){
            rect(row * totalSpace + xOffset, col * totalSpace + yOffset, boxSize, boxSize);
        }
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

