let userScore=0;
let computerScore=0;
const userScore_Span= document.getElementById('user-score');
const computerScore_Span= document.getElementById('comp-score');
const scoreBoard_Div= document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_Div = document.getElementById('r');
const paper_Div = document.getElementById('p');
const scissors_Div = document.getElementById('s');
let snackbar_Div = document.getElementById('snackbar');

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
    return 'Scissor ✂';
      break;
    case 'p': return 'Paper 📰';
      break;
    case 'r': return 'Rock🥊';
      break;
  }
}

function Win(userChoice, computerChoice){
  userScore++;
  userScore_Span.innerHTML = userScore;
  //result_p.innerHTML = formattedNames(userChoice) + ' beats ' + formattedNames(computerChoice) + '!! You Win🔥🔥🔥🔥';----> For ES5
  result_p.innerHTML = `${formattedNames(userChoice)} beats ${formattedNames(computerChoice)}!!  You Win!🔥🔥🔥🔥`;
}

function Loose(userChoice, computerChoice){
  computerScore++;
  computerScore_Span.innerHTML = computerScore;
  //result_p.innerHTML = formattedNames(computerChoice) + ' beats ' + formattedNames(userChoice) + '!!  You Loose💩💩💩💩'; ----> For ES5
  result_p.innerHTML = `${(formattedNames(computerChoice))} beats ${(formattedNames(userChoice))}!!  You Loose!💩💩💩💩`;
}

function Draws(){
  result_p.innerHTML = 'Draw! 📰📰 ✂✂ 🥊🥊';
  }


function main(){
  rock_Div.addEventListener('click',function(){
    game("r");
    showSnackbarMessage('You Choose Rock! 🥊', 0.5);
  })
  paper_Div.addEventListener('click',function(){
    game("p");
    showSnackbarMessage('You Choose Paper! 📰', 0.5);
  })
  scissors_Div.addEventListener('click',function(){
    game("s");
    showSnackbarMessage('You Choose Scissor! ✂', 0.5);
  })
}
main();


//Snackbar
function showSnackbarMessage(message, time) {
  let snackbar_Div = document.getElementById('snackbar');
  snackbar_Div.classList.add("show");
  snackbar_Div.innerHTML = message;
  time=time*1000;//time is in seconds
  // After 2 seconds, remove the show class from DIV
  setTimeout(function(){ snackbar_Div.classList.remove("show")}, time);
};

//SnackBar needs all DOM elements to work, We will let the window load before displaying the snackBar
window.addEventListener('load', function() {
    showSnackbarMessage('Welcome to the page', 0.7);
})
