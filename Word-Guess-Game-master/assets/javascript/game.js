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
  "chapter one the vanishing of will byers",
  "chapter two the weirdo on maple street",
  "chapter three holly, jolly",
  "chapter four the body",
  "chapter five the flea and the acrobat",
  "chapter six the monster",
  "chapter seven the bathtub",
  "chapter eight the upside down",
  "chapter one madmax",
  "chapter two trick or treat, freak",
  "chapter three the pollywog",
  "chapter four will the wise",
  "chapter five dig dug",
  "chapter six the spy",
  "chapter seven the lost sister",
  "chapter eight the mind flayer",
  "chapter nine the gate",
  "netflix",
  "justiceforbarb",
  "beyond stranger things"
];

var randomIndex = Math.floor(Math.random() * 45);
var wordToGuess = gameWords[randomIndex];
var wordLength = wordToGuess.length;
var wordLetters = wordToGuess.split(" ");
var wins = 0;
var loses = 0;
var remainingTries = 15;
var wrongLettersGuessed = [];
var currentWord = document.getElementById("currentWord");
currentWord.textContent = gameWords[randomIndex];

function wordToGuess() {
    wordToGuess = gameWords[Math.floor(Math.random() * gameWords.length)];
    console.log(randomIndex.word);
    if (wordToGuess.used === false) {
        wordToGuess.used = true;
        console.log('not used', wordToGuess.word);

function genCharArray(charA, charZ) {
  var a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}
var alphabet = genCharArray("a", "z"); // ["a", ..., "z"]
console.log(alphabet);

//an array for the number of dashes to guess the word
var dashArray = [];

//function for printing out dashes and letters
function replaceDash() {
  if (dashArray) {
    document.getElementById("wordToGuess").innerHTML = dashArray.join(" ");
  }
}

document.onkeyup = function(event) {
  var userGuess = event.key;
  console.log(wordToGuess);
  console.log(wordToGuess.indexOf(userGuess));
  if (wordToGuess.indexOf(userGuess) === -1) {
    remainingTries = remainingTries - 1;
    console.log(remainingTries);
  }
};

function restart() {
  randomIndex();
  console.log(word);
  dashArray = [];
  dashes(word);
  triedLetters = [];
  tries = 15;
  document.getElementById("remainingTries").innerHTML = tries;
  document.getElementById("lettersTried").innerHTML = triedLetters;
  guessLetter();
}

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
