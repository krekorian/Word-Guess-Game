
// setting the default values
var wordLibrary = ["MADONNA", "STING", "EMINEM", "RIHANNA", "SHAKIRA", "ADELE", "CHER", "SCORPIONS", "FERGIE"]
var currentWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
//currentWord = "VARTAN"
var answerArray = [];
var guessCount = 0;
var guessInput;
var incorrectLetter = "";
var winCount = 0;
var loseCount = 0;
var correctLetter = 0;

//Initial content to view
function startUp() {
    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }
    guessInput = answerArray.join(" ");
    document.getElementById("guess-letters").innerHTML = guessInput;
    document.getElementById("letter-output").innerHTML = "Letter used";
    document.getElementById("missed-guess").innerHTML = "Number of guesses left: " + (5 - guessCount);
    document.getElementById("win-count").innerHTML = "Number of wins " + winCount;
    document.getElementById("lose-count").innerHTML = "Number of loss " + loseCount;
}

//verification part
function checking(inputLetter) {
    var letterfound = false;
    letter = inputLetter.toUpperCase();
    for (var j = 0; j < currentWord.length; j++) {
        if (currentWord[j] === letter) {
            answerArray[j] = letter;
            letterfound = true;
            correctLetter++;
        }
    }
    //document.getElementById("win-count").innerHTML = correctLetter;
    if (letterfound == false) {
        incorrectLetter = incorrectLetter + " " + letter;
        document.getElementById("letter-output").innerHTML = "Letter used" + incorrectLetter;
        guessCount++;
    }

    if (correctLetter == currentWord.length) {
        document.getElementById("missed-guess").innerHTML = "You win";
        //var image = document.createElement("img");

        var path = "assets/images/" + currentWord + ".jpg"
        //document.getElementById("lose-count").innerHTML = path;
        image = document.getElementById("guess-image");
        image.src = path;

        guessCount = 0;
        correctLetter = 0;
        incorrectLetter = "";
        answerArray = [];
        winCount++;
        document.getElementById("letter-output").innerHTML = "Letter used" + incorrectLetter;
        document.getElementById("win-count").innerHTML = "Number of wins " + winCount;
        document.getElementById("lose-count").innerHTML = "Number of loss " + loseCount;
        currentWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
        startUp();
    }

    if (guessCount > 5) {
        document.getElementById("missed-guess").innerHTML = "You Lose, try another puzzle";
        guessCount = 0;
        correctLetter = 0;
        incorrectLetter = "";
        answerArray = [];
        loseCount++;
        document.getElementById("letter-output").innerHTML = "Letter used" + incorrectLetter;
        document.getElementById("win-count").innerHTML = "Number of wins " + winCount;
        document.getElementById("lose-count").innerHTML = "Number of loss " + loseCount;
        currentWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
        startUp();
    }

    guessInput = answerArray.join(" ");
    document.getElementById("guess-letters").innerHTML = guessInput;
    document.getElementById("missed-guess").innerHTML = "Number of guesses left: " + (5 - guessCount);
    document.getElementById("win-count").innerHTML = "Number of wins " + winCount;
    document.getElementById("lose-count").innerHTML = "Number of loss " + loseCount;




}

// Getting input fro keyboard
document.onkeyup = function (event) {

    var userinput = event.key;
    //winnerText.textContent = "userinput";
    userinput.toUpperCase;

    checking(userinput);

};