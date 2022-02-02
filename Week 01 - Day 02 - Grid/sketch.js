

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

    for(let row = 0; row < rowBoxes; row++){ //this creates a loop for each row of boxes.
        
        for(let col = 0; col < colBoxes; col++){ //this creates a loop for each column of boxes.

            rect(row * totalSpace + xOffset, col * totalSpace + yOffset, boxSize, boxSize); //this is a rect() that has many parameters that can be manipulated on console of the website.
        }
    }
    return 'finished making the boxes';
}
