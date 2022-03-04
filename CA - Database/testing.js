class FullStackedBarChart {
    constructor(_data, _labels) {
        //let listValues = data.map(function(x) { return x.totalCon });

        this.data = _data;
        this.labels = _labels;
        console.log(this.data)

        this.chartWidth = 300;
        this.chartHeight = 300;

        this.title = "Solar Consumption"
        this.sideTitle = "Number of consumptions % (2016-20) "

        this.posX = 0;
        this.posY = 0;

        this.spacing = 5;
        this.margin = 30;
        this.numTicks = 12;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        this.tickIncrements;
        this.listValues;
        this.maxValue;


        this.colors = [
            color('#242951'),
            color('#246390 '),
            color('#02A6EC'),
            color('#02D3EC '),
            color('#02ECE8')
        ];

        this.showConsumptions = true;
        this.showLabels = true;
        this.rotateLabels = false;
        this.showLegend = true;


        this.calculateMaxValue();
        this.updateValue();
    }

    updateValue() {
        this.tickSpacing = this.chartHeight / this.numTicks; //space between ticks on  the left 
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barWidth = this.availableWidth / this.data.length; //bar widt
    }

    calculateMaxValue() {
        this.listValues = this.data.map(function(x) { return max(x.consumptions) });
        console.log("num", this.listValues);
        this.maxValue = max(this.listValues)
            // let listValues = this.data.map(function(x) { return max(x.totalCon[h - 3]) + max(x.totalCon[h - 2]) + max(x.totalCon[h - 1]) });
        this.tickIncrements = this.maxValue / this.numTicks;
        console.log("test", this.maxValue)

    }

    render() {
        push();
        translate(this.posX, this.posY);


        this.drawTitle();
        this.drawSideTitle();
        this.drawAxis();
        // this.drawTickLines();
        // this.drawHorizontalLines();
        this.drawRects();
        pop();

    }

    drawTitle() {
        textAlign(CENTER, CENTER);
        text(this.title, (this.chartWidth / 2), -(this.chartHeight + this.margin));
    };

    drawSideTitle() {
        angleMode(DEGREES)
        push();
        textAlign(CENTER, CENTER);
        text("Countries", this.chartWidth / 2 - this.margin, this.margin + this.spacing);
        pop();
    };

    //this accepts a parameter(number) and scales the number to the maxValue and chartHeight
    scaledData(_num) {
        let newValue = map(_num, 0, this.chartHeight, 0, this.chartHeight);
        return newValue;
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
            stroke(255, 200);
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);

        }
    }

    drawAxis() {
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }

    drawRects() {
        translate(this.margin, 0);
        push();
        for (let i = 0; i < this.data.length; i++) {

            push();
            for (let j = 0; j < 5; j++) {
                let colorNum = j % 5;
                //bars
                push();
                fill(this.colors[colorNum]);
                noStroke();
                // rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -this.scaledData(this.data[i].consumptions[j]));
                rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -(this.data[i].consumptions[j] / this.data[i].totalCon) * this.chartHeight);


                pop();
                translate(0, j - (this.data[i].consumptions[j] / this.data[i].totalCon) * this.chartHeight);

            }
            pop();


            //numbers (text)
            push();
            for (let j = 0; j < this.data[i].consumptions.length; j++) {


                push();
                if (this.showConsumptions) {
                    noStroke();
                    fill(255);
                    textSize(16);
                    textAlign(CENTER, BOTTOM);
                    text(round((this.data[i].consumptions[j] / this.data[i].totalCon) * 100), ((this.barWidth + this.spacing) * i) + j + this.barWidth / 2, -(this.data[i].consumptions[j] / this.data[i].totalCon) * this.chartHeight / 2);
                }
                pop();
                translate(-1, j - (this.data[i].consumptions[j] / this.data[i].totalCon) * this.chartHeight);

            }
            pop();

            //legend
            push();
            for (let j = 0; j < this.data[i].consumptions.length; j++) {
                let colorNum = j % 5;

                push();
                fill(this.colors[colorNum]);
                // if (this.showConsumptions) {
                rect(this.chartWidth - 30, -this.chartHeight / 2, 20, 20)
                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, BOTTOM);
                text(this.labels[0].year[j], this.chartWidth + 20, -this.chartHeight / 2 + 20);
                // }
                pop();
                translate(0, j + 40);

            }
            pop();




            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push();
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20)
                    rotate(PI / 2);
                    text(this.data[i].name, 0, 0);
                    pop();
                } else {
                    push();
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                    pop();
                }
            }

        }
        pop();
    }
}