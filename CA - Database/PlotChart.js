class PlotChart {
    constructor(_data, _title, _sideTitle, _bottomTitle, _chartW, _chartH, _posX, _posY, _spacing, _margin, _showV, _listV, _rotateV) {
        //let listValues = data.map(function(x) { return x.gen });

        this.data = _data;
        this.chartWidth = _chartW;
        this.chartHeight = _chartH;
        this.posX = _posX;
        this.posY = _posY;
        this.title = _title
        this.sideTitle = _sideTitle;
        this.bottomTitle = _bottomTitle;
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
            color('#02DCE8')
        ];

        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = false;

        this.calculateMaxXValue();
        this.calculateMaxYValue();
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

    calculateMaxYValue() {
        let listYValues = this.data.map(function(y) { return y.Cost })
        this.maxYValue = max(listYValues);
        this.tickYIncrements = this.maxYValue / this.numTicks;
    }

    calculateMaxXValue() {
        let listXValues = this.data.map(function(x) { return x.Consumption })
        this.maxXValue = max(listXValues);
        this.tickXIncrements = this.maxXValue / this.numTicks;
    }

    render() {
        translate(this.posX, this.posY);
        //chart

        this.drawTitle();
        this.drawSideTitle();
        this.drawAxis();
        this.drawYTickLines();
        this.drawXTickLines();
        this.drawHorizontalLines();
        this.drawRects();
    }

    drawTitle() {
        textAlign(CENTER, CENTER);
        textSize(24);
        text(this.title, (this.chartWidth / 2), -(this.chartHeight + this.margin));
    };


    //this accepts a parameter(number) and scales the number to the maxValue and chartHeight
    scaledXData(num) {
        return map(num, 0, this.maxXValue + this.spacing, 0, this.chartWidth);
    }
    scaledYData(num) {
        return map(num, 0, this.maxYValue + this.spacing, 0, this.chartHeight);
    }



    drawYTickLines() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            line(0, this.tickYSpacing * -i, -10, this.tickYSpacing * -i);

            //numbers (text)
            fill(255, 200);
            noStroke();
            textSize(20);
            textAlign(RIGHT, CENTER);
            text((i * this.tickYIncrements).toFixed(), -15, this.tickYSpacing * -i);
        }
    }

    drawXTickLines() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            line((this.tickXSpacing) * i, 0, this.tickXSpacing * i, 10);

            //numbers (text)
            fill(255, 200);
            noStroke();
            textSize(20);
            textAlign(RIGHT, CENTER);
            text(((this.tickXIncrements) * i).toFixed(0), this.numTicks + i, 20, this.tickXSpacing * i);
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {
            //horizontal line
            stroke(255, 100);
            line(0, this.tickYSpacing * -i, this.chartWidth, this.tickYSpacing * -i);

        }

        line(0, 0, this.chartWidth, -this.chartHeight)
    }

    drawSideTitle() {
        angleMode(DEGREES)
        push();
        textAlign(CENTER, CENTER);
        rotate(270);
        text(this.sideTitle, (this.chartHeight / 2), -this.margin * 2);
        pop();
        text(this.bottomTitle, this.chartWidth / 2 - this.margin, (this.margin + this.spacing) * 2);
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

            ellipse(this.scaledXData(this.data[i].Consumption) - this.margin, this.scaledYData(-this.data[i].Cost), this.data[i].total / 4, this.data[i].total / 4)


            //numbers (text)
            if (this.showValues) {
                noStroke();
                fill(255);
                textSize(24);
                textAlign(CENTER, BOTTOM);
                text(this.data[i].Code, this.scaledXData(this.data[i].Consumption) - this.margin, this.scaledYData(-this.data[i].Cost));

            }


            //text
            // if (this.showLabels) {
            //     if (this.rotateLabels) {
            //         push();
            //         noStroke();
            //         fill(255);
            //         textSize(14);
            //         textAlign(CENTER, BOTTOM);
            //         translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20)
            //         rotate(PI / 2);
            //         text(this.data[i].cost, 0, 0);
            //         pop();
            //     } else {
            //         push();
            //         noStroke();
            //         fill(255);
            //         textSize(14);
            //         textAlign(CENTER, BOTTOM);
            //         text((i * this.tickIncrements).toFixed(), -this.tickSpacing * -i - 25, 25);
            //         pop();
            //     }
            // }
        }
        pop();
    }
}