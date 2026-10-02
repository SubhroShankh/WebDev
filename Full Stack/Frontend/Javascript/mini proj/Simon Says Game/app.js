let gameSeq = [];
let userSeq = [];
const color = ["red", "yellow", "green", "purple"];


let started = false;
let level = 0;

let h2 = document.querySelector("h2");

//Start Game
document.addEventListener("keypress", function (){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = color[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    flashButton(randomBtn);
}

function flashButton(btn){
    btn.classList.add("flash");
     setTimeout(function (){
        btn.classList.remove("flash");
     }, 250);
}

function btnPress(){
    let btn = this;
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    flashButton(btn);
    check(userSeq.length - 1);
}

function check(i){
    if (userSeq[i] != gameSeq[i]) {
        h2.innerText = "Game Over";
        started = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
       
}

     else{
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}
