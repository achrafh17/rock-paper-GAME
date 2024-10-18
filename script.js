const rules = document.querySelector(".rules");
const rulesWindow = document.querySelector(".rules-window");
const CloseRules = document.querySelector("#logo-close-rules");
const main = document.querySelector(".main");
const mainContent = document.querySelector(".main-content");

//-------------------------------------------------------------

rules.addEventListener("click", () => {
  if (rulesWindow.style.display === "none") {
    rulesWindow.style.display = "block";
  } else {
    rulesWindow.style.display = "none";
  }
});
CloseRules.addEventListener("click", () => {
  rulesWindow.style.display = "none";
});
//------------------------------------------------------------------

const rockpicked = document.querySelector("#rock-main-container");
const paperpicked = document.querySelector("#paper-main-container");
const scissorpicked = document.querySelector("#scissors-main-container");
//------------------------------------------------------------------

const YouPicked = document.createElement("p");
YouPicked.id = "YouPicked";
YouPicked.textContent = "YOU PICKED";

const HousePicked = document.createElement("p");
HousePicked.id = "HousePicked";
HousePicked.textContent = "THE HOUSE PICKED";
//------------------------------------------------------------------------------------------

const YouWinLose = document.createElement("p");
YouWinLose.id = "YouWinLose";
YouWinLose.textContent = "YOU WIN";

const playagain = document.createElement("button");
playagain.id = "playagain";
playagain.textContent = "PLAY AGAIN";

const score = document.querySelector("#score-number");
let scorenumber = 0;

//---------------------------------------------------------------
const newrock = document.createElement("div");
newrock.id = "newrock";
const newrockcircle = document.createElement("div");
newrockcircle.id = "newrockcircle";
const newlogorock = document.createElement("img");
newlogorock.id = "newlogorock";
newlogorock.src = "images/icon-rock.svg";
rockpicked.addEventListener("click", () => {
  mainContent.remove();
  main.appendChild(YouPicked);
  main.appendChild(HousePicked);
  main.appendChild(newrock);
  newrock.appendChild(newrockcircle);
  newrockcircle.appendChild(newlogorock);
  main.appendChild(rondomChoice);
  main.appendChild(playagain);
  main.appendChild(YouWinLose);
  score.textContent = `${scorenumber}`;
  if (rondomChoice === paperrondom) {
    YouWinLose.textContent = "YOU LOSE";
    scorenumber += 0;
    score.textContent = `${scorenumber}`;
  } else if (rondomChoice === rockrondom) {
    YouWinLose.textContent = "  IT'S TIE";
    scorenumber += 1;
    score.textContent = `${scorenumber}`;
  } else {
    YouWinLose.textContent = "YOU WIN";
    scorenumber += 3;
    score.textContent = `${scorenumber}`;
  }
});

const newpaper = document.createElement("div");
newpaper.id = "newpaper";
const newpapercircle = document.createElement("div");
newpapercircle.id = "newpapercircle";
const newlogopaper = document.createElement("img");
newlogopaper.id = "newlogopaper";
newlogopaper.src = "images/icon-paper.svg";

paperpicked.addEventListener("click", () => {
  mainContent.remove();
  main.appendChild(YouPicked);
  main.appendChild(HousePicked);
  main.appendChild(newpaper);
  newpaper.appendChild(newpapercircle);
  newpapercircle.appendChild(newlogopaper);
  main.appendChild(rondomChoice);
  main.appendChild(playagain);
  main.appendChild(YouWinLose);
 
  if (rondomChoice === scissorrondom) {
    YouWinLose.textContent = "YOU LOSE";
    scorenumber += 0;
    score.textContent = `${scorenumber}`;
  } else if (rondomChoice === paperrondom) {
    YouWinLose.textContent = "  IT'S TIE";
    scorenumber += 1;
    score.textContent = `${scorenumber}`;
  } else {
    YouWinLose.textContent = "YOU WIN";
    scorenumber += 3;
    score.textContent = `${scorenumber}`;
  }
});

const newscissor = document.createElement("div");
newscissor.id = "newscissor";
const newscissorcircle = document.createElement("div");
newscissorcircle.id = "newscissorcircle";
const newlogoscissor = document.createElement("img");
newlogoscissor.id = "newlogoscissor";
newlogoscissor.src = "images/icon-scissors.svg";

scissorpicked.addEventListener("click", () => {
  mainContent.remove();
  main.appendChild(YouPicked);
  main.appendChild(HousePicked);
  main.appendChild(newscissor);
  newscissor.appendChild(newscissorcircle);
  newscissorcircle.appendChild(newlogoscissor);
  main.appendChild(rondomChoice);
  main.appendChild(playagain);
  main.appendChild(YouWinLose);
  score.textContent = `${scorenumber}`;
  if (rondomChoice === rockrondom) {
    YouWinLose.textContent = "YOU LOSE";
    scorenumber += 0;
    score.textContent = `${scorenumber}`;
  } else if (rondomChoice === scissorrondom) {
    YouWinLose.textContent = "  IT'S TIE";
    scorenumber += 1;
    score.textContent = `${scorenumber}`;
  } else {
    YouWinLose.textContent = "YOU WIN";
    scorenumber += 3;
    score.textContent = `${scorenumber}`;
  }
});

//-------------------------------------------------------------------------------------------
const rockrondom = document.createElement("div");
rockrondom.id = "rockrondom";
const rockrondomcircle = document.createElement("div");
rockrondomcircle.id = "rockrondomcircle";
const rockrondomlogo = document.createElement("img");
rockrondomlogo.id = "rockrondomlogo";
rockrondomlogo.src = "images/icon-rock.svg";
rockrondom.appendChild(rockrondomcircle);
rockrondomcircle.appendChild(rockrondomlogo);

const paperrondom = document.createElement("div");
paperrondom.id = "paperrondom";
const paperrondomcircle = document.createElement("div");
paperrondomcircle.id = "paperrondomcircle";
const paperrondomlogo = document.createElement("img");
paperrondomlogo.id = "paperrondomlogo";
paperrondomlogo.src = "images/icon-paper.svg";
paperrondom.appendChild(paperrondomcircle);
paperrondomcircle.appendChild(paperrondomlogo);

const scissorrondom = document.createElement("div");
scissorrondom.id = "scissorrondom";
const scissorrondomcircle = document.createElement("div");
scissorrondomcircle.id = "scissorrondomcircle";
const scissorrondomlogo = document.createElement("img");
scissorrondomlogo.id = "scissorrondomlogo";
scissorrondomlogo.src = "images/icon-scissors.svg";
scissorrondom.appendChild(scissorrondomcircle);
scissorrondomcircle.appendChild(scissorrondomlogo);

function randomChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
const HouseChoice = [rockrondom, scissorrondom, paperrondom];
const rondomChoice = randomChoice(HouseChoice);

//-------------------------------------------------------------
playagain.addEventListener("click", () => {
  YouPicked.remove();
  HousePicked.remove();
  newscissor.remove();
  newpaper.remove();
  newrock.remove();
  rondomChoice.remove();
  YouWinLose.remove();
  playagain.remove();
  main.appendChild(mainContent);
});
