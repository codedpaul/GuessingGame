let stillActive = true;
let userName = prompt("Enter username: "); 
let range = 2;
let point = 0;
let mainGame = (range) => {
    let randomNum = Math.floor(Math.random() * range) + 1;
    console.log(randomNum);
    let guess = prompt(`Predict a number between 1 and ${range} `);
    let userGuess = Number(guess);

    if (randomNum === userGuess) {
      point = point + 1;
      alert(`Correct!!!, ${userName}, You've scored ${point} point`);
      mainGame(range + 1);
    } else {
      point = 0;
      stillActive = false;
      alert("Game Over!!!");
    }
  };
while(stillActive) {
  mainGame(2);
}