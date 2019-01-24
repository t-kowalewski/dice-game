// Generate first & second random number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;


// Insert first corresponding dice img
var diceImgSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".dice-img-1").setAttribute("src", diceImgSource1);

// Insert second corresponding dice img
var diceImgSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice-img-2").setAttribute("src", diceImgSource2);


// Select winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}