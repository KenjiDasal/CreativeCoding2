class HorizontalBarChart {
    constructor(_data, _title, _sideTitle, _chartW, _chartH, _posX, _posY, _spacing, _margin, _showV, _listV, _rotateV) {
        //let listValues = data.map(function(x) { return x.gen });

        this.data = _data;
        this.chartWidth = _chartW;
        this.chartHeight = _chartH;
        this.posX = _posX;
        this.posY = _posY;
        this.title = _title
        this.sideTitle = _sideTitle;
        this.spacing = _spacing;
        this.margin = _margin;

        this.numTicks = 10;

        this.tickXSpacing;
        this.tickYSpacing;
        this.barWidth;
        this.availableWidth;
        this.tickIncrements;
        this.maxValue;




        this.showValues = _showV;
        this.showLabels = _listV;
        this.rotateLabels = _rotateV;

        this.colors = [
            color('#242951'),
            color('#246390 '),
            color('#02A6EC'),
            color('#02D3EC '),
            color('#02ECE8')
        ];
        this.calculateMaxValue();
        this.updateValue();
    }

    updateValue() {
        this.tickXSpacing = this.chartWidth / this.numTicks; //space between ticks on  the left 
        this.tickYSpacing = this.chartHeight / this.numTicks; //space between ticks on  the left 
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barWidth = this.availableWidth / this.data.length; //bar widt
        this.availableHeight = this.chartHeight - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barHeight = this.availableHeight / this.data.length; //bar widt
    }

    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.Consumption })
        this.maxValue = round(max(listValues)).toFixed();
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {
        push();
        translate(this.posX, this.posY);
        //chart

        this.drawTitle();
        this.drawSideTitle();
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
        textSize(24);
        textAlign(CENTER, CENTER);
        text(this.title, (this.chartWidth / 2), -(this.chartHeight + this.margin));
    };

    drawSideTitle() {
        angleMode(DEGREES)
        push();
        textAlign(CENTER, CENTER);
        text(this.sideTitle, this.chartWidth / 2 - this.margin, this.margin * 2);
        pop();
    };

    drawTickLines() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            line((this.tickXSpacing) * i, 0, this.tickXSpacing * i, 10);

            //numbers (text)
            fill(255, 200);
            noStroke();
            textSize(20);
            textAlign(RIGHT, CENTER);
            // text((i * this.tickIncrements).toFixed(2), -15, this.tickSpacing * -i);
            text(((this.tickIncrements) * i).toFixed(0), this.numTicks + i, 20, this.tickXSpacing * i);

        }
    }

    drawVerticalLines() {
        for (let i = 0; i <= this.numTicks; i++) {
            //horizontal line
            stroke(255, 100);
            line(this.tickXSpacing * i, 0, this.tickXSpacing * i, -this.chartHeight);


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
            rect(0, -(this.barHeight + this.spacing) * i, -this.scaledData(-this.data[i].Consumption), this.barHeight);

            //numbers (text)
            if (this.showValues) {
                noStroke();
                fill(255);
                textSize(20);
                textAlign(CENTER, BOTTOM);
                // text(this.data[i].Consumption, this.scaledData(-this.data[i].Consumption) + this.textspacing, -((this.barWidth + this.spacing) * i) + this.barWidth / 2 + 10);
                text(this.data[i].Consumption, this.scaledData(this.data[i].Consumption) / 2, -((this.barHeight + this.spacing) * i) + this.barHeight / 2 + 10);
            }


            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push();
                    noStroke();
                    fill(255);
                    textSize(20);
                    textAlign(CENTER, BOTTOM);
                    // translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20)
                    translate(-(this.margin), this.barHeight / 2, 20)
                    rotate(PI / 2);
                    text(this.data[i].Code, -((this.barHeight + this.spacing) * i), 0);
                    pop();
                } else {
                    push();
                    noStroke();
                    fill(255);
                    textSize(20);
                    textAlign(CENTER, BOTTOM);
                    // text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, (this.margin * 3));
                    text(this.data[i].Code, -30, -(this.barHeight + this.spacing) * i + 23);

                    pop();
                }
            }
        }
        pop();
    }
}