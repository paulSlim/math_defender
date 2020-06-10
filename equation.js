class Equation {
    constructor() {
        this.render = new EquElement();

        this.gameLevels = [15, 20, 25, 30, 35, 40];
        this.levelInd = 0;
        this.speedLevel = '';

        this.equList = [];

        this.constructEquList = () => {
            if (this.gameLevels[this.levelInd] === 0) this.levelInd++;
            for (let i = 0; i < this.gameLevels[this.levelInd]; i++) {
                setTimeout(() => {
                    let randPosX = Math.random() * window.innerWidth;
                    if (randPosX => window.innerWidthWidth - 45) randPosX -= 85;

                    let a = Math.floor(Math.random() * 10);
                    let b = Math.floor(Math.random() * 10);

                    const newElement = new EquElement(randPosX, -85, 'gray', `${a} + ${b}`, 1, a + b);
                    this.equList.push(newElement);
                    this.equList[i].drawElmnt(ctx);
                    this.equList[i].updateRect();

                }, 3000 * i);
            }
            this.gameLevels[this.levelInd] = 0;
        }

        this.initInput = () => {
            inputForm.classList.toggle('inputNr_active');
            input.value = '';
            inputForm.addEventListener('submit', this.destroyEquation);
        }

        this.destroyEquation = (e) => {
            e.preventDefault();
            const inp = input.value;
            const equInd = this.equList.findIndex(elmnt => elmnt.result == inp);

            if (inp == this.equList[equInd].result) {
                this.equList[equInd].animate = false;
                statistics.destroyedEqu++;
                statistics.propagateStats();
            }

            this.input.value = '';
        }


    }


}