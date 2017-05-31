
$(document).ready(function() {


// Golbal variables
// ------------------------------------------------------------------------------------------------------------------------------


var game = {
    selectedCharacter: null, 
    selectedOpponent: null,
}


    // math variables
    var playerOneHP;
    var opponentHP;
    var attackMultiplier = 0;
    var updatedAttack;
    var newAttackPoints;

    // sound variables
    var audioElement = document.createElement("audio");
    var victorySound = document.createElement("audio");
    var gameOver = document.createElement("audio");


// Functions
// ------------------------------------------------------------------------------------------------------------------------------


// moves character sheets to selected character, and opponent opptions, and changes style class.
var characterSet = function(selectedCharacter) {

    $("#attackButton").addClass("updatedAttackButton")

    if( selectedCharacter === "doctorFate") {
        game.selectedCharacter = doctorFate;
         $( "#doctorFate" ).remove().appendTo( "#selectedCharacter" ).addClass("playerOne");
         $( "#palpatine" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
         $( "#voldemort" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
         $( "#gollum" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");

         victorySound.setAttribute("src", "assets/sounds/fateHasIntervened.mp3");

    }

    else if ( selectedCharacter === "palpatine") {
        game.selectedCharacter = palpatine;
        $( "#palpatine" ).remove().appendTo( "#selectedCharacter" ).addClass("playerOne");
        $( "#voldemort" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#gollum" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#doctorFate" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");

        victorySound.setAttribute("src", "assets/sounds/unlimitedPower.mp3");
    }

    else if ( selectedCharacter === "voldemort") {
        game.selectedCharacter = voldemort;
        $( "#voldemort" ).remove().appendTo( "#selectedCharacter" ).addClass("playerOne");
        $( "#gollum" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#doctorFate" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#palpatine" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");

        victorySound.setAttribute("src", "assets/sounds/voldemort.mp3");

    }

    else if ( selectedCharacter === "gollum") {
        game.selectedCharacter = gollum;
        $( "#gollum" ).remove().appendTo( "#selectedCharacter" ).addClass("playerOne");
        $( "#doctorFate" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#palpatine" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#voldemort" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");

        victorySound.setAttribute("src", "assets/sounds/stupidFatHobbit.mp3");

    }

    $("#character-row").empty();

}

// function to select opponent
var opponentSet = function(selectedCharacter) {
    if( selectedCharacter === "doctorFate") {
        game.selectedOpponent = doctorFate;
        $( "#doctorFate" ).remove().appendTo( "#selectedOpponent" ).addClass("playerTwo");

    }

    else if ( selectedCharacter === "palpatine") {
        game.selectedOpponent = palpatine;
        $( "#palpatine" ).remove().appendTo( "#selectedOpponent" ).addClass("playerTwo");
    }

    else if ( selectedCharacter === "voldemort") {
        game.selectedOpponent = voldemort;
        $( "#voldemort" ).remove().appendTo( "#selectedOpponent" ).addClass("playerTwo");
    }

    else if ( selectedCharacter === "gollum") {
        game.selectedOpponent = gollum;
        $( "#gollum" ).remove().appendTo( "#selectedOpponent" ).addClass("playerTwo");

    }
  
}

// function to initialize variables for characters
var character = function(name, hitPoints, attackPoints, counterPoints) {
    var player = {
        name: name,
        hitPoints: hitPoints,
        attackPoints: attackPoints,
        counterPoints: counterPoints,

    }
    $("#"+ name + ">.HP").text(hitPoints) 
    return player;
}

// these variables assign stats to the charcters
// name, hitpoints, attackpoints, counterpoints
var doctorFate = character("doctorFate", 200, 10, 7);
var palpatine = character("palpatine", 250, 15, 17);
var voldemort = character("voldemort", 150, 22, 3);
var gollum = character("gollum", 300, 4, 27);


// function to calculate updaates stats
var mathFunctions = function() {

        // if the users attack points are greater than the opponents counter points
        // the attack is a success, and attackpoints will be updated
        if (game.selectedCharacter.attackPoints > game.selectedOpponent.counterPoints  || newAttackPoints > game.selectedOpponent.counterPoints) {

            console.log("Attack Success");
            updatedAttack = game.selectedCharacter.attackPoints * attackMultiplier;
            newAttackPoints = updatedAttack + game.selectedCharacter.attackPoints;
            console.log("damage = " + newAttackPoints);
            attackMultiplier++;

            // math that update the opponent HP, by subtracting the users attack points
            // if the attack was successful, the user attack points should increase by its base stat
            opponentHP = game.selectedOpponent.hitPoints - newAttackPoints;
            game.selectedOpponent.hitPoints = opponentHP

        }

        else {
            // math that update the opponent HP, by subtracting the users attack points
            opponentHP = game.selectedOpponent.hitPoints - game.selectedCharacter.attackPoints;
            game.selectedOpponent.hitPoints = opponentHP
        }

        // math that update the user HP, by subtracting the opponents counterpoints
        playerOneHP = game.selectedCharacter.hitPoints - game.selectedOpponent.counterPoints;
        game.selectedCharacter.hitPoints = playerOneHP;


        // testiing / debugging
        console.log("Player One HP = " + game.selectedCharacter.hitPoints);
        console.log("Opponent HP = " + game.selectedOpponent.hitPoints);
        console.log("----------------------------");
}

// function to check if either player has died.
var endGame = function() {

    // user lost
    if (game.selectedCharacter.hitPoints < 1) {
        alert("you died");
        gameOver.setAttribute("src", "assets/sounds/gameOver.mp3");
        gameOver.play();
    }

    // user won
    if (game.selectedOpponent.hitPoints < 1) {

        victorySound.play();
        console.log("you win!");
        $("#selectedOpponent").empty();

        // reset player
        $("#opponentOptions .characterSheet").on("click", function(event) {
            opponentSet(event.currentTarget.id);
            // alert("opponent" + event.currentTarget.id);
            $("#opponentOptions>.characterSheet").off("click");
        });
    }

    // play sound if opponent HP is less than 10
        if (game.selectedOpponent.hitPoints < 11 && game.selectedOpponent.hitPoints > 0) {
            audioElement.setAttribute("src", "assets/sounds/finishHim.mp3");
            audioElement.play();
        }

}


// function to recalculate score when attack button is hit.
var attackCalculator = function() {
    if (!game.selectedCharacter || !game.selectedOpponent) {
        alert("Not enough characters selected");
    }
    else {
        mathFunctions();
        endGame();
        $("#selectedCharacter .HP").text(game.selectedCharacter.hitPoints);
        $("#selectedOpponent .HP").text(game.selectedOpponent.hitPoints);
    }
}


// Main Process
// ------------------------------------------------------------------------------------------------------------------------------


$("#characterList>.characterSheet").click(function(event) {
    characterSet(event.currentTarget.id);
    // alert(event.currentTarget.id);

        $("#opponentOptions>.characterSheet").on("click", function(event) {
            opponentSet(event.currentTarget.id);
            // alert("opponent" + event.currentTarget.id);
            $("#opponentOptions>.characterSheet").off("click");
        });
});



$("#attackButton").click(attackCalculator);



});
