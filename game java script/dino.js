const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')
let score = document.querySelector('#score')

let number = 0; 
let cross = true; 
let scoreInterval = null;
let highScore = localStorage.getItem("highScore") || 0; 
document.getElementById('high-score').innerHTML = highScore;

function rotation() {
    setTimeout(() => {
        if (dino.classList != ('rotate-jump')) {
            dino.classList.add('rotate-jump');
            setTimeout(() => {
                dino.classList.remove('rotate-jump')
            }, 1000)
        }
    })
}



function jump() {
    setTimeout(() => {
        if (!dino.classList.contains('jump')) {
            dino.classList.add('jump');
            setTimeout(() => {
                dino.classList.remove('jump');
            }, 1000)
        }

    })
}

document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        jump()
    }
    if (event.key === "Enter") {
        cactus.classList.add('cactus-moving')
        number=0;
        score.innerHTML=number;

    }
   
    if (event.key === "ArrowUp") {
        rotation()
    }


})





let is_alive = setInterval(() => {
    //dino position
    let dinotop = parseInt(window.getComputedStyle(dino)
        .getPropertyValue('top'));
    //cactus position
    let cactusleft = parseInt(window.getComputedStyle(cactus)
        .getPropertyValue('left'));
    // dedectd collision
    if (cactusleft < 110 && cactusleft > 60 && dinotop > 200) {
        alert("game over")
        cactus.classList.remove("cactus-moving")
         if (number > highScore) {
        highScore = number;
        localStorage.setItem("highScore", highScore);
        document.getElementById('high-score').innerHTML = highScore;
    }
        number = 0;
        score.innerHTML= number;
        cross= true;
 }
 if (cactusleft<60 && cross=== true){
    number++;
    score.innerHTML=number;
    cross =false;
    setTimeout(()=>{
        cross= true;
    },500)
 }

}, 10);









