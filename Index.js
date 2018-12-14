var Word = require("./Word");
var inquirer = require("inquirer");

var wordBank = ["Afghanistan","Albania", "Algeria","Andorra", "Angola","Argentina",
    "Armenia","Australia","Austria","Azerbaijan"]
var randomCountry


function newGame(){
    var j = parseInt(Math.floor(Math.random()*(wordBank.length)))
    randomCountry = wordBank[j];
    console.log(randomCountry)
}
function displayWord(){
    displayWord = randomCountry.wordDisplay()
    console.log(displayWord)
}


function startGame(){
    displayWord()
    inquirer.prompt ([
        {
            type: "input",
            name: "letterAsk",
            message: "Guess a lettter"
        }
    ])

}
newGame()
startGame()
