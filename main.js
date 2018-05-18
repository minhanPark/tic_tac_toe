let player = "X";
let winner = null
startGame();

function startGame(){
  for(let i=1; i<10; i++){
    clearBox(i);
  }
  player = "X";
  winner = null;
  setMessage("게임을 시작하지. "+ player + " Gazua!!")
}

function clearBox(number){
  document.getElementById("s"+number).innerText = "";
}

function setMessage(message){
  let msg = document.getElementById('message');
  msg.innerText = message;
}

function nextMove(square){
  if(winner != null){
    setMessage("끝났습니다");
  }else if(square.target.innerText == ''){
    square.target.innerText = player;
    switchPlayer();
  } else {
    setMessage("다른 거 Gazua");
  }
}

function switchPlayer(){
  if(checkWinner(player)){
    setMessage("축하합니다. " +player+"가 이겼습니다." );
    winner = player;
  }else if(player == "X"){
    player = "O";
    setMessage(player + " Gazua!!!");
  } else {
    player = "X";
    setMessage(player + " Gazua!!!");
  }
}

function getBox(number){
  return document.getElementById('s'+number).innerText;
}
function checkLine(a, b, c, text){
  let result = false;
  if(getBox(a)== text && getBox(b) == text && getBox(c) == text){
    result = true;
  }
  return result;
}
function checkWinner(text){
  var result = false;
  if(
    checkLine(1, 2, 3, text) ||
    checkLine(4, 5, 6, text) ||
    checkLine(7, 8, 9, text) ||
    checkLine(1, 4, 7, text) ||
    checkLine(2, 5, 8, text) ||
    checkLine(3, 6, 9, text) ||
    checkLine(1, 5, 9, text) ||
    checkLine(3, 5, 7, text)){
    result = true
  }
  return result;
}

let restart = document.getElementById("restart");
restart.addEventListener("click", startGame);

for(let i=1; i<10; i++){
  let td = document.getElementById("s" + i);
  td.addEventListener("click", nextMove);
}
