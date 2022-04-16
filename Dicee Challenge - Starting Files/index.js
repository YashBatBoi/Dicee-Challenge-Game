// Dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);
var rollingDice1 = document.querySelector(".img1").setAttribute(`src`, `images/dice${randomNumber1}.png`);

// Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber2);
var rollingDice2 = document.querySelector(".img2").setAttribute(`src`, `images/dice${randomNumber2}.png`);

// Changing the Heading or Title of the page
var title = document.querySelector("h1");

if (randomNumber1 == randomNumber2) { 
    title.innerHTML = `Draw!`;    
} else if (randomNumber1 > randomNumber2) {
    title.innerHTML = `🚩 Play 1 Wins!`;    
} else if (randomNumber1 < randomNumber2) {
    title.innerHTML = `Player 2 Wins! 🚩`;    
} 