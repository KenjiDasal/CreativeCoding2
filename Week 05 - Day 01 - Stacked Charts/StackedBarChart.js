class StackedBarChart {
    constructor(_data) {
        //let listValues = data.map(function(x) { return x.total });

        this.data = _data;
        console.log(this.data)

        this.chartWidth = 300;
        this.chartHeight = 300;

        this.title = "Genshin Impact Rerun Sales"

        this.posX = 50;
        this.posY = 400;

        this.spacing = 5;
        this.margin = 30;
        this.numTicks = 12;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        this.tickIncrements;
        this.maxValue;


        this.colors = [
            color('#ffe066'),
            color('#ffab66 '),
            color('#f68f6a '),
            color('#f3646a ')
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
        let h = this.data[0].total.length
        console.log(h)
        let listValues = this.data.map(function(x) { return max(x.total[h - 3]) + max(x.total[h - 2]) + max(x.total[h - 1]) });
        this.maxValue = round(max(listValues));
        this.tickIncrements = this.maxValue / this.numTicks;
        console.log(this.maxValue)

    }

    render() {
        translate(this.posX, this.posY);
        //chart

        this.drawTitle();
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
    }

    drawAxis() {
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }

    drawRects() {
        translate(this.margin, 0);
        push();
        for (let i = 0; i < this.data.length; i++) {
            let j = 0;
            let colorNum = i % 1;
            fill(this.colors[colorNum]);

            push();
            for (let j = 0; j < this.data[i].total.length; j++) {
                let colorNum = j % 4;
                //bars
                push();
                fill(this.colors[colorNum]);
                noStroke();
                rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -this.scaledData(this.data[i].total[j]));

                if (this.showValues) {
                    noStroke();
                    fill(255);
                    textSize(16);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].total[j], ((this.barWidth + this.spacing) * i) + j + this.barWidth / 2, -this.scaledData(this.data[i].total[j]));
                }
                pop();
                translate(0, j - this.scaledData(this.data[i].total[j]));

            }
            pop();


            //numbers (text)
            push();
            for (let j = 0; j < this.data[i].total.length; j++) {
                let colorNum = j % 4;
                //bars
                push();
                if (this.showValues) {
                    noStroke();
                    fill(255);
                    textSize(16);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].total[j], ((this.barWidth + this.spacing) * i) + j + this.barWidth / 2, -this.scaledData(this.data[i].total[j]));
                }
                pop();
                translate(0, j - this.scaledData(this.data[i].total[j]));

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