var wins = 0;
var losses = 0;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var guesses = 10;
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);

function clickButton(userGuess) {

  if (userGuess === computerGuess) {
    wins++;
    document.getElementById("wins").innerText = wins;
    alert("You win! :)");
    guesses = 10;
    document.getElementById("guesses").innerText = guesses;
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  } else {

    guesses--;
    document.getElementById("guesses").innerText = guesses;
    alert("incorrect");
  }

  if (guesses === 0) {
    alert("You lost :(");
    guesses = 10;
    document.getElementById("guesses").innerText = guesses;
    losses++;
    document.getElementById("losses").innerText = losses;
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


  }
}
