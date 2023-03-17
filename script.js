var win = 0;
var loss = 0;
var tie = 0;

function play () {

var userInput = prompt("Enter 'R' 'P' or 'S'");
var input = ["R", "P", "S"];
var computerInput = ["R", "P", "S"];
var computerInput = input["Math.floor(Math.random()* input.length"];
console.log(userInput);


if (userInput === "R" && computerInput === "S"){
    alert("You Win");
    win ++;
} else if (userInput === "S" && computerInput === "P"){
    alert("You Win");
    win ++;
} else if (userInput === "P" && computerInput === "R"){
    alert("You Win");
    win++;
} else if (userInput === computerInput){
    alert("You Tied");
    tie++;
} else {
    alert("You Lost");
    loss++
}

alert("Score: " + " Tie: " + tie + " Win: " + win + " Loss: " + loss);
var playAgain = confirm("Do you want to play again?");
console.log(playAgain);
if (playAgain){
    play ();
}
}

play ();
