$(document).ready(function(e) { 
    // form submitted
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
        
        // log inputs for debugging
        console.log("seatLocation" + seatLocation);
        console.log(age);
        console.log(family);
        console.log(DND);
        console.log(firstClass);
        console.log("interest " + interests);
        event.preventDefault();
        
        // send to backend
        var result = getMatches(origin, dest, age, DND, family, firstClass, 3, interests);

        // Format data returned
        var seatLocations = ["none", "Aisle", "Center", "Window"];
        var interestOptions = ["Sports", "Video Games", "Music", "Art", "Travel"];
        var individInterests = [0, 0, 0, 0, 0];
        for(var person = 0; person < 5; person++) {
            for(var i = 0; i < 5; i++) {
                if(result[0].interests[i]) {
                    individInterests[person] = interestOptions[i];
                }
            }          
        }

        // manipulate DOM
        $("#resultString").text("Results for Flight " + get_flight_num(origin, dest));
        $("#name1").text(result[0].name);
        $("#name2").text(result[1].name);
        $("#name3").text(result[2].name);
        $("#name4").text(result[3].name);
        $("#name5").text(result[4].name);
        $("#match-desc1").html("Age: " + result[0].age + "<br/>" +
                               "First Class: " + result[0].firstClass + "<br/>" +
                               "Prefers silence: " + result[0].doNotDisturb + "<br/>" +
                               "Seated with family: " + result[0].family + "<br/>" +
                               "Seat Location: " + seatLocations[result[0].seat_location] + "<br/>" +
                               "Interested in: " + individInterests[0] + "<br/>");
        $("#match-desc2").html("Age: " + result[1].age + "<br/>" +
                               "First Class: " + result[1].firstClass + "<br/>" +
                               "Prefers silence: " + result[1].doNotDisturb + "<br/>" +
                               "Seated with family: " + result[1].family + "<br/>" +
                               "Seat Location: " + seatLocations[result[1].seat_location] + "<br/>" +
                               "Interested in: " + individInterests[1] + "<br/>");
        $("#match-desc3").html("Age: " + result[2].age + "<br/>" +
                               "First Class: " + result[2].firstClass + "<br/>" +
                               "Prefers silence: " + result[2].doNotDisturb + "<br/>" +
                               "Seated with family: " + result[2].family + "<br/>" +
                               "Seat Location: " + seatLocations[result[2].seat_location] + "<br/>" +
                               "Interested in: " + individInterests[2] + "<br/>");
        $("#match-desc4").html("Age: " + result[3].age + "<br/>" +
                               "First Class: " + result[3].firstClass + "<br/>" +
                               "Prefers silence: " + result[3].doNotDisturb + "<br/>" +
                               "Seated with family: " + result[3].family + "<br/>" +
                               "Seat Location: " + seatLocations[result[3].seat_location] + "<br/>" +
                               "Interested in: " + individInterests[3] + "<br/>");
        $("#match-desc5").html("Age: " + result[4].age + "<br/>" +
                               "First Class: " + result[4].firstClass + "<br/>" +
                               "Prefers silence: " + result[4].doNotDisturb + "<br/>" +
                               "Seated with family: " + result[4].family + "<br/>" +
                               "Seat Location: " + seatLocations[result[4].seat_location] + "<br/>" +
                               "Interested in: " + individInterests[4] + "<br/>");
        $("#wrappingDiv").attr("style", "display:block");
    });
    
    jQuery('button').click( function(e) {
        jQuery('.collapse').collapse('hide');
    });
    
});



