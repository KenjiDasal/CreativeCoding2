class PlotChart {
    constructor(_data) {
        //let listValues = data.map(function(x) { return x.cost });

        this.data = _data;
        console.log(this.data)

        this.chartWidth = 300;
        this.chartHeight = 300;

        this.title = "Investment for Solar PV"
        this.sideTitle = "investments (Billions)"

        this.posX = 0;
        this.posY = 0;

        this.spacing = 5;
        this.margin = 30;
        this.numTicks = 12;
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

        this.showValues = false;
        this.showLabels = true;
        this.rotateLabels = false;

        this.calculateMaxXValue();
        this.calculateMaxYValue();
        this.updateValue();
    }

    updateValue() {
        this.tickSpacing = this.chartHeight / this.numTicks; //space between ticks on  the left 
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barWidth = this.availableWidth / this.data.length; //bar widt
    }

    calculateMaxYValue() {
        let listYValues = this.data.map(function(y) { return y.gen })
        this.maxYValue = max(listYValues);
        this.tickIncrements = this.maxYValue / this.numTicks;
    }

    calculateMaxXValue() {
        let listXValues = this.data.map(function(x) { return x.cost })
        this.maxXValue = max(listXValues);
        // this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {
        translate(this.posX, this.posY);
        //chart

        this.drawTitle();
        this.drawSideTitle();
        this.drawAxis();
        this.drawTickLines();
        this.drawHorizontalLines();
        this.drawRects();
    }

    drawTitle() {
        textAlign(CENTER, CENTER);
        text(this.title, (this.chartHeight / 2), -(this.chartHeight + this.margin));
    };


    //this accepts a parameter(number) and scales the number to the maxValue and chartHeight
    scaledXData(num) {
        return map(num, 0, this.maxXValue + 10, 0, this.chartWidth);
    }
    scaledYData(num) {
        return map(num, 0, this.maxYValue + 10, 0, this.chartHeight);
    }



    drawTickLines() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //numbers (text)
            fill(255, 200);
            noStroke();
            textSize(14);
            textAlign(RIGHT, CENTER);
            text((i * this.tickIncrements).toFixed(), -15, this.tickSpacing * -i);
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {
            //horizontal line
            stroke(255, 100);
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);

        }

        line(0, 0, this.chartWidth, -this.chartHeight)
    }

    drawSideTitle() {
        angleMode(DEGREES)
        push();
        textAlign(CENTER, CENTER);
        rotate(270);
        text(this.sideTitle, (this.barWidth + this.margin) * 4, -(this.barWidth - this.margin + (this.spacing * 4)) * 2);
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

            ellipse(this.scaledXData(this.data[i].cost) - this.margin, this.scaledYData(-this.data[i].gen), 20, 20)

            // ellipse(this.data[i].cost, this.data[i].);

            //numbers (text)
            if (this.showValues) {
                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, BOTTOM);
                text(this.data[i].cost, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaledYData(-this.data[i].cost));
                text(this.data[i].gen, this.scaledXData(-this.data[i].cost), ((this.barWidth + this.spacing) * i) + this.barWidth / 2);
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