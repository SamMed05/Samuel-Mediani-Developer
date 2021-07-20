// JavaScript code
var score = {
    userScore: 0,
    cpuScore: 0
}

var userPick;
var cpuPick;

var allOptions = [
    {
        name: "rock",
        image: "assets/rock.png"
    },
    {
        name: "paper",
        image: "assets/paper.png"
    },
    {
        name: "scissors",
        image: "assets/scissors.png"
    }
]

var possibleUserPicks = document.getElementsByClassName("user-choice");

for(var i = 0; i < possibleUserPicks.length; i++) {
    possibleUserPicks[i].addEventListener('click', onUserPick);
}

function onUserPick() {
    userPick = this.dataset.name;
    generateCpuPick();

    var cpuPickImage = "<img src='" + cpuPick.image + "' />";
    var cpuPickText = "<h3>" + cpuPick.name + "</h3>";

    document.getElementById("computer-choice").innerHTML = cpuPickImage + cpuPickText;
    document.getElementById("result").innerHTML = checkWhoWon();

    document.getElementById("user-score").innerHTML = score.userScore;
    document.getElementById("cpu-score").innerHTML = score.cpuScore;
}

function generateCpuPick() {
    cpuPick = allOptions[Math.floor(Math.random() * allOptions.length)];
}

function checkWhoWon() {
    if (userPick == cpuPick.name) {
        return "Draw! :-|";
    } else {
        if (userPick == "rock") {
            if (cpuPick.name == "scissors") {
                score.userScore++;
                return "You won! :-)";
            } else {
                score.cpuScore++;
                return "You lost... :-(";
            }
        }
        
        if (userPick == "paper") {
            if (cpuPick.name == "rock") {
                score.userScore++;
                return "You won! :-)";
            } else {
                score.cpuScore++;
                return "You lost... :-(";
            }
        }
        
        if (userPick == "scissors") {
            if (cpuPick.name == "paper") {
                score.userScore++;
                return "You won! :-)";
            } else {
                score.cpuScore++;
                return "You lost... :-(";
            }
        }
    }
}