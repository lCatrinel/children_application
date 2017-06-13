/**
 * Created by Kitty on 6/5/2017.
 */
var score = 0;

var answers = [null, 3, 1, 2, 1, 3, 1, 1];

function checkAnswer(questionIndex) {
    if ($('input[name=question-' + questionIndex + ']:checked').val() == answers[questionIndex])
        score++;
    localStorage.setItem("score", score);
}

function getScore() {
    return localStorage.getItem("score");
}

function getReward() {
    var nbrOfApples = getScore() == 0 ? 1 : getScore();
    document.getElementById("reward").src = "../includes/img/reward-" + nbrOfApples + ".png";
}