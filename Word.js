var Letter = require("./Letter");

function Word(word){
    this.word = word
    this.wordArray = []
    this.displayWordArray = function(){
        var wordArray = this.word.split("")
        for(var j = 0; j < wordArray.length;j++){
           var newLetter = new Letter (this.wordArray[j])
            // this.wordArray[j].guessed = false
            // this.letterArray[j].reveal()
            this.wordArray.push(newLetter)
        }
        console.log(wordArray)
    }

    this.wordDisplay = function(){
        
        var wordDisplayString = ""
    
        for(var j = 0; j < this.word.length; j++){
            var currentLetter =this.word[j]
            console.log(currentLetter)
            wordDisplayString += this.word[j].reveal() +"_ "
        }
        console.log(wordDisplayString )
    }


        this.userGuessCheck = function(guess){
            for(var k = 0; k <this.wordArray.length; j++){
                this.wordArray[k].check(guess)
            }
        }
}
module.exports = Word
var bigtestcase = new Word("bigtestcase")
bigtestcase.displayWordArray()
var bigtestcase = new Word("bigtestcase")
bigtestcase.wordDisplay()
var guess = "b";
bigtestcase.userGuessCheck