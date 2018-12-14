function Letter(character){
    this.character = character,
    this.guessed = false,
    this.reveal = function(){
       
        if(this.guessed === false){
            return "_";
            // console.log("_")
        }else{
            return this.character
            // console.log(this.character)
        }
    }
    this.check = function(guess){
        
        if(guess === this.character){
            this.guessed = true
        }else{
            this.guessed = false
        }
        // console.log(this.guessed)
        
        }
}
// var letter1= new Letter ("a")
// letter1.reveal()
// letter1.check()
module.exports = Letter