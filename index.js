let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr){
 score = scoreStr ? JSON.parse(scoreStr) : {
  win : 0,
  lost : 0,
  tie : 0,
};

 score.displayScore=function displayScore(){
  return `Win : ${score.win}
  Lost : ${score.lost}
  Tie: ${score.tie}`
}
}
function generateComputerChoice() {
  let Choice;
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}
function getResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Ball") {
      score.win++;
      return "Congratulations .... You are the Winner";
    } else if (computerMove === "Bat") {
      score.tie++;
      return "🙆‍♀️....Its a tie";
    } else if (computerMove === "Stump") {
      score.lost++;
      return "Computer has won...";
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      score.tie++;
      return "🙆‍♀️....Its a tie";
    } else if (computerMove === "Bat") {
      score.lost++;
      return "Computer has won...";
    } else if (computerMove === "Stump") {
      score.win++;
      return "Congratulations .... You are the Winner";
    }
  } else {
    if (computerMove === "Ball") {
      score.lost++;
      return "Computer has won...";
    } else if (computerMove === "Bat") {
      score.win++;
      return "Congratulations .... You are the Winner";
    } else if (computerMove === "Stump") {
      score.tie++;
      return "🙆‍♀️....Its a tie ";
    }
  }
}

function finalResult(userMove, computerMove, result){
 localStorage.setItem('Score',JSON.stringify(score));
document.querySelector('#user-move').innerText = userMove  ?  `You Have Chosen ${userMove}` : '';

document.querySelector('#computer-move').innerText = computerMove ? `Computer Choice is ${computerMove}` : '';

document.querySelector('#result').innerText = result || '';

document.querySelector('#score').innerText = `${score.displayScore()};`


}
