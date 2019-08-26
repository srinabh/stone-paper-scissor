let userScore=0;
let computerScore=0;
const userScore_Span= document.getElementById('user-score');
const computerScore_Span= document.getElementById('comp-score');
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
      break;
    case "rp":
    case "ps":
    case "sr":
    Loose(userChoice, computerChoice);
      break;
      case "rr":
      case "pp":
      case "ss":
      Draws();
  }
}

function formattedNames(input)
{
  switch (input){
    case 's':
    return 'Scissor';
      break;
    case 'p': return 'Paper';
      break;
    case 'r': return 'Rock';
      break;
  }
}

function Win(userChoice, computerChoice){
  userScore++;
  userScore_Span.innerHTML = userScore;
  result_p.innerHTML = formattedNames(userChoice) + ' beats ' + formattedNames(computerChoice) + '!! You Win🔥🔥🔥🔥';
}

function Loose(userChoice, computerChoice){
  computerScore++;
  computerScore_Span.innerHTML = computerScore;
  result_p.innerHTML = formattedNames(computerChoice) + ' beats ' + formattedNames(userChoice) + '!!  You Loose💩💩💩💩';
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
