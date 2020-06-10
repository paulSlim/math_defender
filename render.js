        // Render elements

        class EquElement {
            constructor(xpos, ypos, color, text, speed, result) {

                this.xpos = xpos;
                this.ypos = ypos;
                this.color = color;
                this.text = text;
                this.speed = speed;
                this.result = result;
                this.animate = true;

                this.dy = 1 * this.speed;

                this.drawElmnt = () => {
                    ctx.fillStyle = this.color;
                    ctx.font = "15px Arial";
                    ctx.fillText(this.text, this.xpos + 40, this.ypos + 40);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.lineWidth = "3";
                    ctx.strokeStyle = this.color;
                    ctx.strokeRect(this.xpos, this.ypos, 80, 80);
                }

                this.moveElmnt = () => {

                    this.drawElmnt(ctx);
                    if (this.ypos + 80 >= windowHeight) {
                        this.animate = false;
                        statistics.lives--;
                        statistics.propagateStats();
                        if (statistics.lives <= 0) {
                            stopGame();
                            this.animate = false;
                        }

                    }

                    this.ypos += this.dy;
                }

                this.updateRect = () => {
                    if (this.animate) {
                        requestAnimationFrame(this.updateRect);
                        ctx.clearRect(this.xpos - 3, this.ypos - 3, 86, 90);
                        this.moveElmnt();
                    } else if (statistics.lives <= 0) {
                        return;
                    } else {
                        ctx.clearRect(this.xpos - 3, this.ypos - 3, 86, 90);
                        return;
                    }
                }
            }
        }