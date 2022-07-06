var score = 0;

function updateScore() {

    score ++;
    document.getElementById("score").innerHTML = "Score: " + score;
}

function saveScore() {

    localStorage.setItem("score", score);
}

function nextPage() {

    window.location = "activity_2.html"
}