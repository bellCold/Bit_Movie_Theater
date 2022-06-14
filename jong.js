//종찬
const starScore = document.getElementById("foreground");
const scoreSubmit = document.getElementById("score-submit");
const scoreValue = document.getElementById("scoreValue");
const userScore = document.getElementById("userScore");

function starScoreChange(event) {
    event.preventDefault();
    starScore.style.width = userScore.value * 20 + "%";
}

function liveUserScore() {
    scoreValue.innerText = `${userScore.value}`;
    console.log(userScore.value);
}

scoreSubmit.addEventListener("submit", starScoreChange);
userScore.addEventListener("input", liveUserScore);
