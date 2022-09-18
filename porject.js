let playertext = document.querySelector("#player");
let computertext = document.querySelector("#computer");
let resulttext = document.querySelector("#result");
let choices_button = document.querySelectorAll(".pick");

let player_pick;
let computer_pick;
let game_result;

choices_button.forEach(button => button.addEventListener("click", ()=>{
    player_pick = button.textContent; 
    ComputerPick();
    playertext.textContent = `PLAYER : ${player_pick}`; 
    computertext.textContent = `COMPUTER : ${computer_pick}`;
    game_result = result();
    resulttext.textContent = `RESULT : ${game_result}`;
}))

function ComputerPick(){
    let randnum = Math.floor(Math.random()*3)+1;

    switch(randnum){
        case 1: 
            computer_pick = "Paper";
            break;
        case 2:
            computer_pick = "Rock";
            break;
        case 3:
            computer_pick ="Scissor"
            break;
    }
}

function result(){
    if(computer_pick == player_pick){
        return "DRAW";
    }else if(computer_pick == "Rock"){
        return (player_pick == "Paper") ? "YOU WIN !! " : "YOU LOSE !!";
    }else if(computer_pick == "Paper"){
        return (player_pick == "Scissor") ? "YOU WIN !! " : "YOU LOSE !!";
    }else if(computer_pick == "Scissor"){
        return (player_pick == "Rock") ? "YOU WIN !! " : "YOU LOSE !!";
    }
}

