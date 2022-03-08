class VerticalBarChart {
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

        this.tickSpacing;
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
        this.tickSpacing = this.chartHeight / this.numTicks; //space between ticks on  the left 
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barWidth = this.availableWidth / this.data.length; //bar widt
    }

    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.Cost })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {
        push();
        translate(this.posX, this.posY);


        this.drawTitle();
        this.drawSideTitle();
        this.drawAxis();
        this.drawTickLines();
        this.drawHorizontalLines();
        this.drawRects();
        pop();
    }

    drawTitle() {
        textAlign(CENTER, CENTER);
        textSize(24);
        text(this.title, (this.chartWidth / 2), -(this.chartHeight + this.margin));
    };


    //this accepts a parameter(number) and scales the number to the maxValue and chartHeight
    scaledData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    drawTickLines() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //numbers (text)
            fill(255, 200);
            noStroke();
            textSize(20);
            textAlign(RIGHT, CENTER);
            text((i * this.tickIncrements).toFixed(), -10, this.tickSpacing * -i);
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {
            //horizontal line
            stroke(255, 100);
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);

        }
    }

    drawSideTitle() {
        angleMode(DEGREES)
        push();
        textAlign(CENTER, CENTER);
        rotate(270);
        text(this.sideTitle, this.chartHeight / 2, -this.margin * 2);
        pop();
    };


    drawAxis() {
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }

    drawRects() {
        translate(this.margin, 0);
        push();
        for (let i = 0; i < this.data.length; i++) {
            let colorNum = i % 5;

            //bars
            fill(this.colors[colorNum]);
            noStroke();
            rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaledData(-this.data[i].Cost));

            //numbers (text)
            if (this.showValues) {
                noStroke();
                fill(255);
                textSize(20);
                textAlign(CENTER, BOTTOM);
                text(this.data[i].Cost, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaledData(-this.data[i].Cost));
            }


            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push();
                    noStroke();
                    fill(255);
                    textSize(20);
                    textAlign(CENTER, BOTTOM);
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20)
                    rotate(PI / 2);
                    text(this.data[i].Code, 0, 0);
                    pop();
                } else {
                    push();
                    noStroke();
                    fill(255);
                    textSize(20);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].Code, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                    pop();
                }
            }
        }
        pop();
    }
}