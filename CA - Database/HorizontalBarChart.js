class HorizontalBarChart {
    constructor(_data) {
        //let listValues = data.map(function(x) { return x.gen });

        this.data = _data;

        this.chartWidth = 500;
        this.chartHeight = 500;

        this.posX = 10;
        this.posY = 10;
        this.textspacing = 20;

        this.title = "Solar Generation"


        this.spacing = 5;
        this.margin = 30;
        this.numTicks = 10;

        this.tickSpacing;
        this.barWidth;
        this.availableWidth;
        this.tickIncrements;
        this.maxValue;


        this.colors = [
            color('#242951'),
            color('#246390 '),
            color('#02A6EC'),
            color('#02D3EC '),
            color('#02ECE8')
        ];

        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = false;


        this.calculateMaxValue();
        this.updateValue();
    }

    updateValue() {
        this.tickSpacing = this.chartHeight / this.numTicks; //space between ticks on  the left 
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barWidth = this.availableWidth / this.data.length; //bar widt
    }

    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.gen })
        this.maxValue = round(max(listValues));
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {
        push();
        translate(this.posX, this.posY);
        //chart

        this.drawTitle();
        this.drawAxis();
        this.drawTickLines();
        this.drawVerticalLines();
        this.drawRects();
        pop();
    }

    //this accepts a parameter(number) and scales the number to the maxValue and chartHeight
    scaledData(num) {
        return map(num, 0, this.maxValue, 0, this.chartWidth);
    }

    drawTitle() {
        textAlign(CENTER, CENTER);
        text(this.title, (this.chartHeight / 2), -(this.chartHeight + this.margin));
    };

    drawTickLines() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            line((this.tickSpacing) * i, 0, this.tickSpacing * i, 10);

            //numbers (text)
            fill(255, 200);
            noStroke();
            textSize(14);
            textAlign(RIGHT, CENTER);
            // text((i * this.tickIncrements).toFixed(2), -15, this.tickSpacing * -i);
            text(((this.tickIncrements) * i).toFixed(0), 8 + i, 20, this.tickSpacing * i);

        }
    }

    drawVerticalLines() {
        for (let i = 0; i <= this.numTicks; i++) {
            //horizontal line
            stroke(255, 100);
            line(this.tickSpacing * i, 0, this.tickSpacing * i, -this.chartWidth);


        }
    }

    drawAxis() {
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }

    drawRects() {
        translate(0, -(20 + this.margin));
        push();
        for (let i = 0; i < this.data.length; i++) {
            let colorNum = i % 5;

            //bars
            fill(this.colors[colorNum]);
            noStroke();
            rect(0, -(this.barWidth + this.spacing) * i, -this.scaledData(-this.data[i].gen), this.barWidth);

            //numbers (text)
            if (this.showValues) {
                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, BOTTOM);
                text(this.data[i].gen, -this.scaledData(-this.data[i].gen) + this.textspacing, -((this.barWidth + this.spacing) * i) + this.barWidth / 2 + 10);
            }


            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push();
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    // translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20)
                    translate(-(this.margin), this.barWidth / 2, 20)
                    rotate(PI / 2);
                    text(this.data[i].name, -((this.barWidth + this.spacing) * i), 0);
                    pop();
                } else {
                    push();
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    // text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, (this.margin * 3));
                    text(this.data[i].name, -(this.margin), -((this.barWidth + this.spacing) * i) + this.barWidth / 2 + 10);

                    pop();
                }
            }
        }
        pop();
    }
}