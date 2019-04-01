
// setting the default values
var wordLibrary = ["MADONNA", "STING", "EMINEM", "RIHANNA", "SHAKIRA", "ADELE", "CHER", "SCORPIONS", "FERGIE"]
var currentWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
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
    //if the guess is incorrect, add to incorrect guess count
    if (letterfound == false) {
        incorrectLetter = incorrectLetter + " " + letter;
        document.getElementById("letter-output").innerHTML = "Letter used" + incorrectLetter;
        guessCount++;
    }
    //if the player makes the correct guess, display singer's image
    //and start a new puzzle
    if (correctLetter == currentWord.length) {
        document.getElementById("missed-guess").innerHTML = "You win";
        var path = "assets/images/" + currentWord + ".jpg";
        const sound = new Audio();
        sound.src = "assets/audio/" + currentWord + ".mp3"
        sound.play()
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
    //if player makes more than 5 incorrent guess, start a new puzzle
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
    //display output
    guessInput = answerArray.join(" ");
    document.getElementById("guess-letters").innerHTML = guessInput;
    document.getElementById("missed-guess").innerHTML = "Number of guesses left: " + (5 - guessCount);
    document.getElementById("win-count").innerHTML = "Number of wins " + winCount;
    document.getElementById("lose-count").innerHTML = "Number of loss " + loseCount;




}

// Getting input from keyboard
document.onkeyup = function (event) {

    var userinput = event.key;
    userinput.toUpperCase;
    checking(userinput);

};