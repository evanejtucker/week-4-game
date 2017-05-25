
$(document).ready(function() {


// Golbal variables
// ------------------------------------------------------------------------------------------------------------------------------

var characters = ["darthVader", "doctorFate", "scorpion", "gollum"];

var isSelectedCharacter = "";

    //stat variables
    var healthPoints = 0;
    var attackPoints = 0;
    var counterAttackPoints = 0;


// Functions
// ------------------------------------------------------------------------------------------------------------------------------


// this function check which characterSheet is clicked, then sets "isSelectedCharacter" to that chatacter
var characterSelect = function($characterClicked) {
    var checkDoctorFate = $characterClicked.is("#doctorFate");
    var checkPalpatine = $characterClicked.is("#palpatine");
    var checkScorpion = $characterClicked.is("#scorpion");
    var checkGollum = $characterClicked.is("#gollum");


    if (checkDoctorFate === true) {
        console.log("fate has interviened");
        isSelectedCharacter = "doctorFate";   
        healthPoints = 100;
    }

    else if (checkPalpatine === true) {
        console.log("you have selected Emporer Palpatine!");
        isSelectedCharacter = "palpatine";
        healthPoints = 200;
        
    }

    else if (checkScorpion === true) {
        console.log("you have selected Scorpion!");
        isSelectedCharacter = "scorpion";
        healthPoints = 300;

    }

    else if (checkGollum === true) {
        console.log("you have selected Gollum!");
        isSelectedCharacter = "gollum";
        healthPoints = 400;
    }
}

// moves character sheets to selected character, and opponent opptions, and changes style class.
var characterSet = function() {

    if( isSelectedCharacter === "doctorFate") {
         $( "#doctorFate" ).appendTo( "#selectedCharacter" ).addClass("playerOne");
         $( "#palpatine" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");
         $( "#scorpion" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");
         $( "#gollum" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");
 
         $("#character-row").empty();

    }

    else if ( isSelectedCharacter === "palpatine") {
        $( "#palpatine" ).appendTo( "#selectedCharacter" ).addClass("playerOne");
        $( "#scorpion" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#gollum" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#doctorFate" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");
        
        $("#character-row").empty()

    }

    else if ( isSelectedCharacter === "scorpion") {
        $( "#scorpion" ).appendTo( "#selectedCharacter" ).addClass("playerOne");
        $( "#gollum" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#doctorFate" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#palpatine" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");

        $("#character-row").empty();

    }

    else if ( isSelectedCharacter === "gollum") {
        $( "#gollum" ).appendTo( "#selectedCharacter" ).addClass("playerOne");
        $( "#doctorFate" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#palpatine" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#scorpion" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");

        $("#character-row").empty();

    }

}

var opponentSet = function() {


}

// sets style fro opponent options
var styleSet = function() {
    $("selctedCharacter").addClass("playerOne");
    $("OpponentOptions").addClass("opponentStyle");

    
}

// function to recalculate score when attack button is hit.
var attackCalculator = function() {


}



// Main Process
// ------------------------------------------------------------------------------------------------------------------------------


$(".characterSheet").click(function(){
    characterSelect($(this));
    characterSet();

});


$("#attackButton").click(function() {
    console.log("button works");
    $("#HP").html(healthPoints);

});


});
