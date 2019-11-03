/*
    Gets the top 5 matches to a person
    
    Parameters:
        origin - string
        destination - string
        age - number
        doNotDisturb - boolean
        family - boolean
        firstClass - boolean
        seatLocation - number
        interests - boolean[5]

    Returns:
        Array of 5 Person
*/
function getMatches(origin, destination, age, doNotDisturb, family, firstClass, seatLocation, interests){

    // function sends in a flight number and recies back a person array *Jennifer
    var people_on_flight = people_arr;
    var output = new Array(5);
    var compareScores = [0, 0, 0, 0, 0];

    for (index = 0; index < people_on_flight.length; index++) { 
        var compareScore = 0;
        var tempPerson = people_on_flight[index];

        // If both are same class, +2000 to compatibility score (don't want peasants mixing with the rich)
        if(firstClass == tempPerson.firstClass) {
            compareScore += 2000;
        }

        // If age is within 10 years of other person, +50 to compatibility score
        var minAge = tempPerson.age - 5;
        var maxAge = tempPerson.age + 5;
        if(age > minAge && age < maxAge) {
            compareScore += 50;
        }

        // If they both don't want to be disturbed, +300 to compatibility score
        if(doNotDisturb == tempPerson.doNotDisturb) {
            compareScore += 300;
        }

        // If both have families, +30 to compatibility score
        if(family == tempPerson.family) {
            compareScore += 30;
        }

        // If both want to sit in different seats, +15 to compatibility score
        if(seatLocation != tempPerson.seatLocation) {
            compareScore += 25;
        }

        // For every shared interest, +20 to compatibility score
        for(x = 0; x < interests.length; x++) {
            if(interests[x] && tempPerson.interests[x]) {
                compareScore += 50;
            }
        }

        // Checks if in the top 5, if so, then kicks lowest one out
        inTopFive = false;
        count = 0;
        while(!inTopFive && count < compareScores.length) {
            if(compareScore > compareScores[count]) { // Found, kick out lowest
                inTopFive = true;
                smallestIndex = 0;
                smallestCompareScore = 10000;
                for(x = 0; x < compareScores.length; x++) {
                    if(compareScores[x] < smallestCompareScore) {
                        smallestIndex = x;
                        smallestCompareScore = compareScores[x];
                    }
                }
                compareScores[smallestIndex] = compareScore;
                output[smallestIndex] = tempPerson; 
            }
            count++;
        }
    }

    for(var i = 0 ; i < 5 ; i++){
        console.log(output[i].name);
    }
    return output;
};

function get_flight_num(origin, dest){
    // Flight numbers generated from FlightEngineAPI
    var flight_num = [1755, 2288, 4699, 2641, 3782, 5977, 3191, 8168, 7855, 4416, 4669, 7977, 3515, 683, 9806, 8609];
    var org_num;
    var dest_num;
    if(origin == "JFK")
        org_num = 0;
    else if (origin == "DFW")
        org_num = 1;
    else if (origin == "LAX")
        org_num = 2;
    else 
        org_num = 3;

    if(dest == "JFK")
        dest_num = 0;
    else if (dest == "DFW")
        dest_num = 1;
    else if (dest == "LAX")
        dest_num = 2;
    else 
        dest_num = 3;

    return flight_num[org_num * 4 + dest_num];    

};