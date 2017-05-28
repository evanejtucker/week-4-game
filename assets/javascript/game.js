
$(document).ready(function() {


// Golbal variables
// ------------------------------------------------------------------------------------------------------------------------------


var game = {
    selectedCharacter: null, 
    selectedOpponent: null,
}

var playerOneHP;
var opponentHP;
var initialAttackPoints = 0;

var audioElement = document.createElement("audio");
var victorySound = document.createElement("audio");


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
    $("#"+ name + ">#HP").text(hitPoints) 
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
        if (game.selectedCharacter.attackPoints > game.selectedOpponent.counterPoints) {
            console.log("Attack Success");

            // if it is a succesful attack, update the user attack points
            newAttackPoints = game.selectedCharacter.attackPoints + game.selectedCharacter.attackPoints;
            // initialAttackPoints = game.selectedCharacter.attackPoints;
            game.selectedCharacter.attackPoints = newAttackPoints;
            console.log("damage = " + newAttackPoints);
        }

        // math that update the user HP, by subtracting the opponents counterpoints
        playerOneHP = game.selectedCharacter.hitPoints - game.selectedOpponent.counterPoints;
        game.selectedCharacter.hitPoints = playerOneHP;

        // math that update the opponent HP, by subtracting the users attack points
        // if the attack was successful, the user attack points should increase by its base stat
        opponentHP = game.selectedOpponent.hitPoints - game.selectedCharacter.attackPoints;
        game.selectedOpponent.hitPoints = opponentHP;

        // testiing / debugging
        console.log("Player One HP = " + game.selectedCharacter.hitPoints);
        console.log("Opponent HP = " + game.selectedOpponent.hitPoints);
        console.log("----------------------------");
}

// function to check if either player has died.
var endGame = function() {

    if (game.selectedOpponent.hitPoints < 11 && game.selectedOpponent.hitPoints > 0) {
        audioElement.setAttribute("src", "assets/sounds/finishHim.mp3");
        audioElement.play();
    }

    if (game.selectedCharacter.hitPoints < 1) {
        alert("you died");
    }

    if (game.selectedOpponent.hitPoints < 1) {

        victorySound.play();
        console.log("you win!");
        $("#selectedOpponent").empty();

        // reset player
        $("#opponentOptions>.characterSheet").on("click", function(event) {
            opponentSet(event.currentTarget.id);
            // alert("opponent" + event.currentTarget.id);
            $("#opponentOptions>.characterSheet").off("click");
        });
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
        $("#HP").text(game.selectedCharacter.hitPoints);
        // $("#HP").text(game.selectedOpponent.hitPoints);
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
