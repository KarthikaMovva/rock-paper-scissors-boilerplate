document.querySelector(".flex").addEventListener("click", function(event) {
    let play1 = document.querySelector(".display");
    let target1 = event.target;

    if (target1.classList.contains("rb")) {
        play1.src = './assets/rock-hand.png';
    } else if (target1.classList.contains("pb")) {
        play1.src = './assets/paper-hand.png'; 
    } else if (target1.classList.contains("sb")) {
        play1.src = './assets/scissors-hand.png'; 
    }
});
list = ["rock","paper","scissors"];
let getnum = Math.floor(Math.random()*3)

document.querySelector(".flex").addEventListener("click", function(event) {
    let play2 = document.querySelector(".display1");
    let target2 = event.target;
    let getnum = Math.floor(Math.random()*3)

    if (target2.classList.contains("rb")) {
        play2.src = `./assets/${list[getnum]}-hand.png`;
    } else if (target2.classList.contains("pb")) {
        play2.src = `./assets/${list[getnum]}-hand.png`; 
    } else if (target2.classList.contains("sb")) {
        play2.src = `./assets/${list[getnum]}-hand.png`;
    }
});
let sp1 = 0;
let sp2 = 0;
document.querySelector(".flex").addEventListener("click", function(event) {
    let play1 = document.querySelector(".display");
    let play2 = document.querySelector(".display1");
    let play1Src = play1.getAttribute('src');
    let play2Src = play2.getAttribute('src');
    


    if (play1Src == './assets/rock-hand.png' && play2Src == './assets/scissors-hand.png') {
        sp1++;
       
    } else if (play1Src === './assets/paper-hand.png' && play2Src === './assets/rock-hand.png') {
        sp1++;
        
    } else if (play1Src === './assets/scissors-hand.png' && play2Src === './assets/paper-hand.png') {
        sp1++;
      
    } else if (play1Src === play2Src) {
        console.log('Its a draw!');
    } else {
        sp2++;
    }
    let g1 = document.querySelector(".player1").innerHTML=sp1;
    let g2 = document.querySelector(".player2").innerHTML=sp2;

    
    if(sp1 === 5) {
        let c1 = document.querySelector(".complete").innerHTML="You won the game";
        let playAgain = document.getElementsByTagName("button")[0];
        playAgain.style.display="inline";
    } else if(sp2 === 5) {
        let c1 = document.querySelector(".complete").innerHTML="Computer won the game";
        let playAgain = document.getElementsByTagName("button")[0];
        playAgain.style.display="inline";
    }

});
let playAgain = document.getElementsByTagName("button")[0];
playAgain.addEventListener("click",function(){
    window.location.href="index.html";
    playAgain.style.border='10px solid white'
})


