//GLOBAL VARIABLES
var wins = 0;
var losses = 0;
var score =0;
//generate number to reach
var goalNumber = Math.floor(Math.random()*50)+50;
//generate 4 random numbers
var crystalOneValue = Math.floor(Math.random()*10)+10;
var crystalTwoValue = Math.floor(Math.random()*10)+10;
var crystalThreeValue = Math.floor(Math.random()*10)+10;
var crystalFourValue = Math.floor(Math.random()*10)+10;



//set up scoreboard (wins/losses/goal number)
function scoreBoard() {
    document.getElementById("winSpace").innerHTML(wins);
    document.getElementById("lossSpace").innerHTML(losses);
    createCrystals();
    
}

//create crystals
function createCrystals(){
    //assign random number to each crystal
    var 
    crystalOne = document.createElement("DIV") 
    crystalOne.setAttribute("id","crystalOne")

    var crystalTwo = document.createElement("DIV") 
    crystalTwo.setAttribute("id","crystalTwo")

    var crystalThree = document.createElement("DIV") 
    crystalThree.setAttribute("id","crystalThree")

    var crystalFour = document.createElement("DIV") 
    crystalFour.setAttribute("id","crystalFour")

    //apply crystals to html
    document.getElementById("crystalSpace").appendChild(crystalOne);
    document.getElementById("crystalSpace").appendChild(crystalTwo);
    document.getElementById("crystalSpace").appendChild(crystalThree);
    document.getElementById("crystalSpace").appendChild(crystalFour);
    //reset score to zero
    score = 0;
    document.getElementById("scoreSpace").innerHTML(score);
    //set new random goal score
    goalNumber = Math.floor(Math.random()*50)+50;
    document.getElementById("randomSpace").innerHTML(goalNumber);
    

}
// when user clicks crystal
    //add crystal value to score
    //check if user win/loss
    //compare current score with goal
        //if equal, user wins
            //update for win
        //if under, game continues
            //update for game continue
        //if over, user loses
            //update for user loss



//when user wins
    //update win counter
    //alert "win"
    //run cthreateCrystals


//when user loses
    //update loss counter
    //alert "you lose"
    //run createCrystals


//if neither
    //update score










