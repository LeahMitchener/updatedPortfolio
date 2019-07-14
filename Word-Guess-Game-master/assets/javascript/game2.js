var gameWords = [
  "demogorgon",
  "run",
  "will",
  "eleven",
  "eggos",
  "upside down",
  "mouth breather",
  "pollywog",
  "bitchin",
  "joyce byers",
  "jim hopper",
  "mike wheeler",
  "dustin henderson",
  "lucas sinclair",
  "nancy wheeler",
  "jonathan byers",
  "will byers",
  "steve harrington",
  "billy hargrove",
  "bob newby",
  "barb holland",
  "duffer brothers",
  "hawkins",
  "mental",
  "dart",
  "chapter one: the vanishing of will byers",
  "chapter two: the weirdo on maple street",
  "chapter three: holly, jolly",
  "chapter four: the body",
  "chapter five: the flea and the acrobat",
  "chapter six: the monster",
  "chapter seven: the bathtub",
  "chapter eight: the upside down",
  "chapter one: madmax",
  "chapter two: trick or treat, freak",
  "chapter three: the pollywog",
  "chapter four: will the wise",
  "chapter five: dig dug",
  "chapter six: the spy",
  "chapter seven: the lost sister",
  "chapter eight: the mind flayer",
  "chapter nine: the gate",
  "netflix",
  "#justiceforbarb",
  "beyond stranger things"
];

//number of wins
var win = 0;
//number of losses
var lose = 0;
//total of both wins and losses
var total = win + lose;
//number of tries available
var tries = 15;
//an array of the tried letters
var triedLetters = [];
//an array of the alphabet for data validation
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "#"
];

//function for the randomization, return the variable word.
function randomWord() {
  randomObject = gameWords[Math.floor(Math.random() * gameWords.length)];
  console.log(randomObject.word);
  if (randomObject.used === false) {
    randomObject.used = true;
    console.log("not used", randomObject.word);
    //why is this word not being returned
    console.log(randomObject);
    console.log(randomObject.word);
    word = randomObject.word;
  } else {
    console.log("already used", randomObject.word);
    randomWord();
  }
}

//function for printing out dashes and letters
function replaceDash() {
  if (dashArray) {
    document.getElementById("currentWord").innerHTML = dashArray.join(" ");
  }
}

//declared function for creating dashes
function dashes(word) {
  letterArray = word.split("");
  //finding the index number of the word in the original array
  //fix the removal of the words from the list. Or add an element to the object that is a boolean and changes
  //when the word is reset
  for (var i = 0; i < letterArray.length; i++) {
    if (letterArray[i] === " ") {
      dashArray.push(" ");
    } else {
      dashArray.push("__");
    }
  }
  replaceDash();
  console.log(dashArray);
}

//an array of the letters in the solution
var letterArray = [];
//the chosen word
var word = "";
//an array for the number of dashes to guess the word
var dashArray = [];

//declared function for displaying the letters pressed by user.
function displayLetters() {
  document.getElementById("lettersTried").innerHTML = triedLetters.join(", ");
}

//when a key is pressed
function guessLetter() {
  document.onkeyup = function(event) {
    //making event.key a variable.
    var letter = event.key;
    console.log(event);
    //making sure the letter is lowercase for comparison
    letter.toLowerCase();
    //the key is checked to see if it is part of the alphabet.
    if (alphabet.indexOf(letter) >= 0) {
      //then the key is checked to see if it is a unique letter.
      if (triedLetters.indexOf(letter) === -1) {
        //a new letter is added to the array of attempted letters.
        triedLetters.push(letter);
        displayLetters();
        tries = tries - 1;
        document.getElementById("remainingTries").innerHTML = tries;
        //check letter input against letterArray.
        for (var j = 0; j < letterArray.length; j++) {
          if (letterArray[j] === letter) {
            //when a letter matches a certain letter in the letterArray
            //the letter will replace the equivalent spot in the dashArray.
            dashArray[j] = letter;
            // console.log(dashArray[j]); for debugging
          }
          //win condition
          if (dashArray.toString() == letterArray.toString()) {
            win++;
            document.getElementById("wins").innerHTML = win;
            if (total === gameWords.length) {
              alert("You've played all of the words!");
            } else {
              restart();
            }
          }
          //losing condition
          replaceDash();
          if (tries === 0) {
            lose++;
            document.getElementById("currentWord").innerHTML = word;
            myTheme.stop();
            if (total === gameWords.length) {
              alert("You've played all of the words!");
            } else {
              restart();
            }
          }
        }
      } else {
        alert("Choose a new letter!");
      }
    } else {
      alert("Enter a letter!");
    }
  };
}
//for when the game is restarted after a word has been guessed.
function restart() {
  randomWord();
  console.log(word);
  dashArray = [];
  dashes(word);
  triedLetters = [];
  tries = 15;
  document.getElementById("remainingTries").innerHTML = tries;
  document.getElementById("lettersTried").innerHTML = triedLetters;
  guessLetter();
}
