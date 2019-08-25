let userScore=0;
let computerScore=0;
const userScore_Span= document.getElementById('user-score');
const computerScore_Span= document.getElementById('computer-score');
const scoreBoard_Div= document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_Div = document.getElementById('r');
const paper_Div = document.getElementById('p');
const scissors_Div = document.getElementById('s');

function getComputerChoices(){
  const choices = [('r','p','s')];
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 1){
  return 'r';
}
  else if (randomNumber == 2){
  return 'p';
}
  else return 's';
}

console.log(getComputerChoices());
function game(userChoice){
  const computerChoice = getComputerChoices();
}

function game(userChoice){
  const computerChoice = getComputerChoices();
  switch(userChoice+computerChoice){
    case "rs":
    case "pr":
    case "sp":
      Win(userChoice, computerChoice);
      //console.log("User Wins");
      break;
    case "rp":
    case "ps":
    case "sr":
    Loose(userChoice, computerChoice);
      //console.log("User looses");
      break;
      case "rr":
      case "pp":
      case "ss":
      Draws();
        //console.log("It's a draw");
  }
}

function Win(userChoice, computerChoice){
  userScore++;
  userScore_Span.innerHTML = userScore;
  computerScore_Span.innerText = computerScore;
  console.log(user);
  console.log(computer);
  result_p.innerHTML = userChoice + 'beats ' + computerChoice + 'You Win!!!!';
  //console.log("WINS");
}

function Loose(){
  //console.log("LOOSE");
}

function Draws(){
  console.log("DRAWS");
}


function main(){
  rock_Div.addEventListener('click',function(){
    game("r");
  })
  paper_Div.addEventListener('click',function(){
    game("p");
  })
  scissors_Div.addEventListener('click',function(){
    game("s");
  })
}
main();
