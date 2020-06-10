class Statistics {
    constructor() {
        this.statsCon = document.querySelector('.stats');
        this.livesCon = document.querySelector('.lives span');
        this.solvedEquCon = document.querySelector('.equ span');

        this.lives = 10;
        this.destroyedEqu = 0;

        this.propagateStats = () => {
            this.livesCon.textContent = this.lives;
            this.solvedEquCon.textContent = this.destroyedEqu;
        }

    }
}