var wins = 0;
var ties = 0;
var losses = 0;

var options = ["R", "P", "S"];

var playGame = function() {

    var userChoice = window.prompt("Enter R, P or S:");

    if (!userChoice) {
        return;
    }

    userChoice =userChoice.toLocaleUpperCase();

    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("The computer chose " + computerChoice);

    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a Tie!");
    }
    else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("You Win!");
    }
    else {
        losses++;
        window.alert("You Lose!");
    }

    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    var playAgain = window.confirm("Play Again?");

    if (playAgain) {
        playGame();
    }

};

playGame();