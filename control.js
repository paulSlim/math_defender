 // canvas

 const scene = document.getElementById('canvas');
 const ctx = scene.getContext('2d');

 const windowHeight = window.innerHeight;
 const windowWidth = window.innerWidth;

 scene.width = windowWidth;
 scene.height = windowHeight;

 // controls

 const statistics = new Statistics();

 const startBtn = document.querySelector('.start_btn');

 const inputForm = document.querySelector('form');
 const input = document.querySelector('form input');

 const initGameTitle = () => {
     ctx.font = "100px Comic Sans MS";
     ctx.fillStyle = "red";
     ctx.textAlign = "center";
     ctx.fillText("Math Defender", windowWidth / 2, windowHeight / 2);
 }

 const hideGameTitle = () => {
     ctx.clearRect(0, 0, windowWidth, windowHeight);
 }

 const stopGame = () => {
     ctx.clearRect(0, 0, windowWidth, windowHeight);
     ctx.font = "70px Comic Sans MS";
     ctx.fillStyle = "red";
     ctx.textAlign = "center";
     ctx.fillText("Game Over", windowWidth / 2, windowHeight / 2);
     inputForm.classList.toggle('inputNr_active');
 }