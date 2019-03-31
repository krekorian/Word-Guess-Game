//var guessInput = document.getElementById("guess-letters");
//guessInput.innerHTML = '<li class="current-word">Current word:</li>';

currentWord = "vartan krekorian"
answerArray = [];
var guessInput;
//document.getElementById("letter").value = '';
/*var letter, i;
for (i = 0; i < currentWord.length; i++) {
    letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
    guessInput.insertAdjacentHTML('beforeend', letter);
}
*/
function startUp() {
    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }
    guessInput = answerArray.join();
    document.getElementById("guess-letters").innerHTML = guessInput;
}

