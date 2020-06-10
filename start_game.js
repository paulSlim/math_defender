const equInit = new Equation();

const initGameStartBtn = () => {
    startBtn.addEventListener('click', () => {
        hideGameTitle();
        startBtn.classList.toggle('start_btn_active');
        setTimeout(() => {
            equInit.equList.length = 0;
            equInit.constructEquList();
            equInit.initInput();
            statistics.statsCon.classList.toggle('stats_active');
            statistics.propagateStats();
        }, 3000);
    })
}

initGameTitle();
initGameStartBtn();