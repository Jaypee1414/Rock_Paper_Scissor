let playertext = document.querySelector("#player");
let computertext = document.querySelector("#computer");
let resulttext = document.querySelector("#result");
let choices_button = document.querySelectorAll(".pick");

//player and robot score
let player_score = document.querySelector('.player');
let computer_score = document.querySelector('.robot');
let my_score=0, robot_score=0;


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
    
    if(result() == 'YOU LOSE !!'){
        robot_score++;
        computer_score.textContent = `${robot_score}`;
        return;
    }
    if(result() == 'YOU WIN !! '){
        my_score++;
        player_score.textContent = `${my_score}`;
        return;
    }

}))


function ComputerPick(){
    let randnum = Math.floor(Math.random()*3)+1;

    switch(randnum){
        case 1: 
            computer_pick = "PAPER";
            break;
        case 2:
            computer_pick = "ROCK";
            break;
        case 3:
            computer_pick ="SCISSOR"
            break;
    }
}

function result(){
    let player = 0; computer = 0;
    if(computer_pick == player_pick){
        return "DRAW";
    }else if(computer_pick == "ROCK"){
        // return (player_pick == "PAPER") ? "YOU WIN !! " : "YOU LOSE !!";
        if(player_pick == "PAPER"){
            player++;
            return "YOU WIN !!"
        }else{
            computer++;
            return "YOU LOSE !!"
        }
    }else if(computer_pick == "PAPER"){
        return (player_pick == "SCISSOR") ? "YOU WIN !! " : "YOU LOSE !!";
    }else if(computer_pick == "SCISSOR"){
        return (player_pick == "ROCK") ? "YOU WIN !! " : "YOU LOSE !!";
    }

}

function winner(){
  
}

