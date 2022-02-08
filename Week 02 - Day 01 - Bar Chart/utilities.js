
function gridBoxes(numBoxes, c, s){
    noFill();
    strokeWeight(s);
    stroke(c,);
    let boxSize = width/numBoxes;
    // barWidth = margin * 
    for(let j = 0; j < numBoxes; j++){ //this creates a loop for each row of boxes.
        for(let i = 0; i < numBoxes; i++){ //this creates a loop for each column of boxes.
            push()
            translate(i * boxSize, j * boxSize);
            rotate(45)
            rect(0, 0, boxSize, boxSize); //this is a rect() that has many parameters that can be manipulated on console of the website.
            pop();
        }
    }
    return 'finished making the boxes';
}
