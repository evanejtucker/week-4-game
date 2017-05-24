
$(document).ready(function() {


// Golbal variables
// ------------------------------------------------------------------------------------------------------------------------------

var characters = ["darthVader", "doctorFate", "scorpion", "gollum"];


// Functions
// ------------------------------------------------------------------------------------------------------------------------------

var doctorFateSelect = function () {
	$( "#doctorFate" ).appendTo( "#selectedCharacter" );
    $( "#palpatine" ).appendTo( "#opponentOptions" );
    $( "#scorpion" ).appendTo( "#opponentOptions" );
    $( "#gollum" ).appendTo( "#opponentOptions" );

     $("#character-row").empty();
}

var palpatineSelect = function() {
	$( "#doctorFate" ).appendTo( "#opponentOptions" );
    $( "#palpatine" ).appendTo( "#selectedCharacter" );
    $( "#scorpion" ).appendTo( "#opponentOptions" );
    $( "#gollum" ).appendTo( "#opponentOptions" );

     $("#character-row").empty();
}

var scorpionSelect = function() {
	$( "#doctorFate" ).appendTo( "#opponentOptions" );
    $( "#palpatine" ).appendTo( "#opponentOptions" );
    $( "#scorpion" ).appendTo( "#selectedCharacter" );
    $( "#gollum" ).appendTo( "#opponentOptions" );

     $("#character-row").empty();
}

var gollumSelect = function() {
	$( "#doctorFate" ).appendTo( "#opponentOptions" );
    $( "#palpatine" ).appendTo( "#opponentOptions" );
    $( "#scorpion" ).appendTo( "#opponentOptions" );
    $( "#gollum" ).appendTo( "#selectedCharacter" );

     $("#character-row").empty();
}

var characterSelect = function() {


    if ($(".characterSheet").is("#doctorFate") ) {
        console.log("fate has interviened");

        $( "#doctorFate" ).appendTo( "#selectedCharacter" );
        $( "#palpatine" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");
        $( "#scorpion" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");;
        $( "#gollum" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");;

        $("#character-row").empty();  

    }

    else if ($(".characterSheet").is("#palpatine") ) {
        console.log("you have selected Emporer Palpatine!");
        
        $( "#palpatine" ).appendTo( "#selectedCharacter" );
        $( "#scorpion" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");;
        $( "#gollum" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");;
        $( "#doctorFate" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");;
        
        $("#character-row").empty()

    }

    else if ($(".characterSheet").is("#scorpion") ) {
        console.log("you have selected Scorpion!");

        $( "#scorpion" ).appendTo( "#selectedCharacter" );
        $( "#gollum" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");;
        $( "#doctorFate" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");;
        $( "#palpatine" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");;

        $("#character-row").empty();

    }

    else if ($(".characterSheet").is("#gollum") ) {
        console.log("you have selected Gollum!");

        $( "#gollum" ).appendTo( "#selectedCharacter" );
        $( "#doctorFate" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");;
        $( "#palpatine" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");;
        $( "#scorpion" ).appendTo( "#opponentOptions" ).addClass("opponentStyle");;

        $("#character-row").empty();

    }

    else {
        alert("didnt work");
    }

}



// Main Process
// ------------------------------------------------------------------------------------------------------------------------------

$(".characterSheet").click(function(){
        // doctorFateSelect();
        characterSelect();
    });


});
