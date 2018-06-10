// create variable list of words
// create variable of random word
// display win tracker
// display current word 
// display letters guessed
// display progress or number of chances left

    //list of words and phrases
    var wordBank = ["cybersecure", "superimpose", "beachcomb", "counterrevolve", "cubbyhole", "leapfrog", "quartermaster", "rabbithole", "thunderstrike", "underweigh", "bulletproof", "fountainhead", "grandfather", "overintellectualize", ];
  
// randomly chosen words and phrases in game
var wordInPlay = "";

// word broken down letter by letter

var byTheRune = [];

// The blank spaces shown to be guessed by player

var runeDisplay = 0;

// Whitespace for phrases

var spaceBar

// the current guess of player
var guess = "";

// displayed word as game progresses and some letters are known and others are not
var knownUnknowns = [];

// previous guesses
var wrongGuesses = [];

// display wins
var wins = 0;

var whiteSpace = "&nbsp;"


// track the number of attempts
var attemptCountDown = 10;

var gallows = ['"assets/images/gallows/0.png"', 
              '"assets/images/gallows/1.png"', 
              '"assets/images/gallows/2.png"', 
              '"assets/images/gallows/3.png"', 
              '"assets/images/gallows/4.png"', 
              '"assets/images/gallows/5.png"', 
              '"assets/images/gallows/6.png"', 
              '"assets/images/gallows/7.png"', 
              '"assets/images/gallows/8.png"', 
              '"assets/images/gallows/9.png"', 
              '"assets/images/gallows/10.png"', ];

  


// Set up function to create random word

function runeGame() {
  //Begin countdown of chances by 10
  var attemptCountDown = 11;
// create a random word or phrase to play from the bank
wordInPlay = wordBank[Math.floor(Math.random() * wordBank.length)];
// split the word or phrase up into  runes

byTheRune = wordInPlay.split("");

runeDisplay = byTheRune.length;

knownUnknowns = [];

wrongGuesses = [];
 


for (var i = 0; i < runeDisplay; i++) {
  knownUnknowns.push("_");
 }

}

// set function for when player guesses 

function runeSearch (playerGuess) {
  var correctRune = false;
  
  for (var i = 0; i < runeDisplay; i++){
    if (wordInPlay[i] === playerGuess) {
      correctRune = true;
    }
  }

if (correctRune) {
  for (var x =0; x < runeDisplay; x++) {
    if (wordInPlay[x] === playerGuess) {
knownUnknowns[x] = playerGuess;
    }
  }
  console.log (knownUnknowns);
}



else {    
  wrongGuesses.push(playerGuess);
attemptCountDown--; 
gallows++;
}

}





//create function to update game-play info

function runeCheck() {

document.getElementById("attempt-countdown").innerHTML = attemptCountDown;

$("#current-word").html("<p>Word or Phrase: <br>" + knownUnknowns.join(" ") + "</p>");

$("#missed-letters").html("<p>Guessed Letters: <br>" + wrongGuesses.join(" ") + "</p>");

$("#wins").html("<p>Wins Total: " + wins + "</p>");

$("#hangman").html('<img src=' + gallows + '> ');



if (wordInPlay.toString() === knownUnknowns.toString()) {
  wins++;

  alert("Play again, winner");

  runeGame();


}

else if (attemptCountDown === 0) {
  alert("Don't get hung up on your loss, try again!");
  
 
      
      runeGame();
}

}

runeGame();

document.onkeyup = function(event) {

  guess = String.fromCharCode(event.which).toLowerCase();

  runeSearch(guess);

  runeCheck();


};