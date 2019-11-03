$(document).ready(function(e) { 
    $("#test").click(function() {
//        var interests = [true, false, true, true, false];
//        var result getMatches("DFW", "JFK", 22, true, true, false, 3, interests)
        alert("hello");
    })
    $("form").submit(function( event ) {
        alert("form submitted!");
        var origin = $("#origin").var();
        console.log(origin);
        console.log( $( this ).serializeArray() );
        event.preventDefault();
    });
});



