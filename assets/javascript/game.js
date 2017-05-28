
$(document).ready(function() {


// Golbal variables
// ------------------------------------------------------------------------------------------------------------------------------


var game = {
    selectedCharacter: null, 
    selectedOpponent: null,
}


// Functions
// ------------------------------------------------------------------------------------------------------------------------------


// moves character sheets to selected character, and opponent opptions, and changes style class.
var characterSet = function(selectedCharacter) {

    if( selectedCharacter === "doctorFate") {
        game.selectedCharacter = doctorFate;
         $( "#doctorFate" ).remove().appendTo( "#selectedCharacter" ).addClass("playerOne");
         $( "#palpatine" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
         $( "#scorpion" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
         $( "#gollum" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");

    }

    else if ( selectedCharacter === "palpatine") {
        game.selectedCharacter = palpatine;
        $( "#palpatine" ).remove().appendTo( "#selectedCharacter" ).addClass("playerOne");
        $( "#scorpion" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#gollum" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#doctorFate" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
    }

    else if ( selectedCharacter === "scorpion") {
        game.selectedCharacter = scorpion;
        $( "#scorpion" ).remove().appendTo( "#selectedCharacter" ).addClass("playerOne");
        $( "#gollum" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#doctorFate" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#palpatine" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");

    }

    else if ( selectedCharacter === "gollum") {
        game.selectedCharacter = gollum;
        $( "#gollum" ).remove().appendTo( "#selectedCharacter" ).addClass("playerOne");
        $( "#doctorFate" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#palpatine" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#scorpion" ).remove().appendTo( "#opponentOptions" ).addClass("opponentStyle");

    }

    $("#character-row").empty();

}

var opponentSet = function(selectedCharacter) {
    if( selectedCharacter === "doctorFate") {
        game.selectedOpponent = doctorFate;
        $( "#doctorFate" ).remove().appendTo( "#selectedOpponent" ).addClass("playerTwo");

    }

    else if ( selectedCharacter === "palpatine") {
        game.selectedOpponent = palpatine;
        $( "#palpatine" ).remove().appendTo( "#selectedOpponent" ).addClass("playerTwo");
    }

    else if ( selectedCharacter === "scorpion") {
        game.selectedOpponent = scorpion;
        $( "#scorpion" ).remove().appendTo( "#selectedOpponent" ).addClass("playerTwo");
    }

    else if ( selectedCharacter === "gollum") {
        game.selectedOpponent = gollum;
        $( "#gollum" ).remove().appendTo( "#selectedOpponent" ).addClass("playerTwo");

    }
  
}

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

var doctorFate = character("doctorFate", 200, 10, 7);
var palpatine = character("palpatine", 250, 15, 17);
var scorpion = character("scorpion", 150, 22, 3);
var gollum = character("gollum", 300, 4, 27);



// function to recalculate score when attack button is hit.
var attackCalculator = function() {
    if (!game.selectedCharacter || !game.selectedOpponent) {
        alert("no characters selected");
    }
    else {
        console.log("ready to fight");
    }
};


// Main Process
// ------------------------------------------------------------------------------------------------------------------------------


$("#characterList>.characterSheet").click(function(event) {
    characterSet(event.currentTarget.id);
    alert(event.currentTarget.id);
        $("#opponentOptions>.characterSheet").on("click", function(event) {
        opponentSet(event.currentTarget.id);
        alert("opponent" + event.currentTarget.id);
        $("#opponentOptions>.characterSheet").off("click");
        });
});



$("#attackButton").click(attackCalculator);






});
