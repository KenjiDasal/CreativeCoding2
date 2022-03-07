class FullStackedBarChart {
    constructor(_data, _label, _title, _sideTitle, _bottomTitle, _chartW, _chartH, _posX, _posY, _spacing, _margin, _showV, _listV, _rotateV, _showL) {
        //let listValues = data.map(function(x) { return x.total });

        this.data = _data;
        this.labels = _label;
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

        this.showLegend = _showL;


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
        this.listValues = this.data.map(function(x) { return max(x.total) });
        console.log("num", this.listValues);
        this.maxValue = max(this.listValues)
            // let listValues = this.data.map(function(x) { return max(x.total[h - 3]) + max(x.total[h - 2]) + max(x.total[h - 1]) });
        this.tickIncrements = this.maxValue / this.numTicks;
        console.log("test", this.maxValue)

    }

    render() {
        push();
        translate(this.posX, this.posY);
        this.drawTitle();
        this.drawSideTitle();
        this.drawLegend();
        this.drawAxis();
        this.drawTickLines();
        this.drawHorizontalLines();
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
        rotate(270)
        text(this.sideTitle, (this.chartHeight / 2) - this.margin, -this.margin - (this.spacing * 2));
        pop();
        push();
        textAlign(CENTER, CENTER);
        text(this.bottomTitle, this.chartWidth / 2 - this.margin, this.margin + this.spacing);
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
            text(round((i * this.tickIncrements) / this.data[3].total * 100), -15, this.tickSpacing * -i);
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
            // for (let i = 0; i < 1; i++) {

            push();
            for (let j = 0; j < 1; j++) {
                let colorNum = 0;

                //bars
                push();
                fill(this.colors[colorNum]);
                noStroke();
                // rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -this.scaledData(this.data[i].gen));
                rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -(this.data[i].first / this.data[i].total) * this.chartHeight);

                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, BOTTOM);
                text(round((this.data[i].first)), ((this.barWidth + this.spacing) * i) + j + this.barWidth / 2, -(this.data[i].first / this.data[i].total) * this.chartHeight / 2);

                pop();
                translate(0, j - (this.data[i].first / this.data[i].total) * this.chartHeight);

                //bars
                push();
                colorNum = 1;
                fill(this.colors[colorNum]);
                noStroke();
                // rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -this.scaledData(this.data[i].gen));
                rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -(this.data[i].second / this.data[i].total) * this.chartHeight);

                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, BOTTOM);
                text(round((this.data[i].second)), ((this.barWidth + this.spacing) * i) + j + this.barWidth / 2, -(this.data[i].second / this.data[i].total) * this.chartHeight / 2);

                pop();
                translate(0, j - (this.data[i].second / this.data[i].total) * this.chartHeight);

                //bars
                push();
                colorNum = 2;
                fill(this.colors[colorNum]);
                noStroke();
                // rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -this.scaledData(this.data[i].gen));
                rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -(this.data[i].third / this.data[i].total) * this.chartHeight);

                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, BOTTOM);
                text(round((this.data[i].third)), ((this.barWidth + this.spacing) * i) + j + this.barWidth / 2, -(this.data[i].third / this.data[i].total) * this.chartHeight / 2);


                pop();
                translate(0, j - (this.data[i].third / this.data[i].total) * this.chartHeight);

                //bars
                push();
                colorNum = 3;
                fill(this.colors[colorNum]);
                noStroke();
                // rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -this.scaledData(this.data[i].gen));
                rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -(this.data[i].fourth / this.data[i].total) * this.chartHeight);

                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, BOTTOM);
                text(round((this.data[i].fourth)), ((this.barWidth + this.spacing) * i) + j + this.barWidth / 2, -(this.data[i].fourth / this.data[i].total) * this.chartHeight / 2);

                pop();
                translate(0, j - (this.data[i].fourth / this.data[i].total) * this.chartHeight);

                //bars
                push();
                colorNum = 4;
                fill(this.colors[colorNum]);
                noStroke();
                // rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -this.scaledData(this.data[i].gen));
                rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -(this.data[i].fifth / this.data[i].total) * this.chartHeight);

                noStroke();
                fill(255);
                textSize(16);
                textAlign(CENTER, BOTTOM);
                text(round((this.data[i].fifth)), ((this.barWidth + this.spacing) * i) + j + this.barWidth / 2, -(this.data[i].fifth / this.data[i].total) * this.chartHeight / 2);

                pop();

            }
            pop();


            // //numbers (text)
            // push();
            // for (let j = 0; j < this.data[i].total.length; j++) {

            //     push();
            //     if (this.showConsumptions) {
            //         noStroke();
            //         fill(255);
            //         textSize(16);
            //         textAlign(CENTER, BOTTOM);
            //         text((this.data[i].Code), ((this.barWidth + this.spacing) * i) + j + this.barWidth / 2, -(this.data[i].Code / this.data[i].total) * this.chartHeight / 2);
            //     }
            //     pop();
            //     translate(-1, j - (this.data[i].Code / this.data[i].total) * this.chartHeight);

            // }
            // pop();






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
                    text(this.data[i].Code, 0, 0);
                    pop();
                } else {
                    push();
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].Code, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                    pop();
                }
            }

        }
        pop();
    }

    drawLegend() {
        // legend
        push();
        for (let j = 0; j < this.labels[0].year.length; j++) {
            let colorNum = j % 5;

            push();
            fill(this.colors[colorNum]);
            // if (this.showLegend) {
            rect(this.chartWidth + this.spacing, -this.chartHeight / 2, 20, 20)
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(this.labels[0].year[j], this.chartWidth + this.margin + (this.spacing * 3), -this.chartHeight / 2 + 20);
            // }
            pop();
            translate(0, j + 40);

        }
        pop();
    }
}