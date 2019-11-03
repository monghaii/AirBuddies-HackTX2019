$(document).ready(function(e) { 
    $("#test").click(function() {
       var interests = [true, false, true, true, false];
       var result = getMatches("DFW", "JFK", 22, true, true, false, 3, interests);
        alert("hello");
    })

    $("form").submit(function( event ) {
        var origin = $("#origin").val();
        var dest = $("#dest").val();
        var interest = $("#interest").val();
        var seatLocation = $("#seatLocation").val();
        var age = $("#age").val();
        var family = false;
        var DND = false;
        var firstClass = false;
        console.log(origin);
        console.log(dest);
        console.log(interest);
        // set other preferences
        if ($('#family').is(":checked")){
          family = true;
        }
        if ($('#DND').is(":checked")){
          DND = true;
        }
        if ($('#firstClass').is(":checked")){
          firstClass = true;
        }
        // mapping seatlocation to number
        if(seatLocation == 'Aisle') {
            seatLocation = 1;
        } else if(seatLocation == "Center") {
            seatLocation = 2;
        } else if(seatLocation == "Window") {
            seatLocation = 3;
        }
        
        // mapping interest to boolean array
        var interests = [false, false, false, false, false];
        if(interest == "Sports") {
            interests[0] = true;
        } else if(interest == "Video Games") {
            interests[1] = true;
        } else if(interest == "Music") {
            interests[2] = true;
        } else if(interest == "Art") {
            interests[3] = true;
        } else if(interest == "Travel") {
            interests[4] = true;
        }
        console.log("seatLocation" + seatLocation);
        console.log(age);
        console.log(family);
        console.log(DND);
        console.log(firstClass);
        console.log("interest " + interests);
        event.preventDefault();    
        var result = getMatches(origin, dest, age, DND, family, firstClass, 3, interests);
        // result[index].descript
        // descript can be 
        //   name: asdf, 
        //   age: 42,
        //   firstClass: true,
        //   doNotDisturb: false,
        //   family: false,
        //   seat_location: 2,
        //   interests: [true, false, false, false, false],
        console.log("first name: " + result[0].name);
    });
});



