function get_people_on_flight(origin, destination){
    var seed = "seed";
    const { Generator } = require('./Flight-Engine/src/Generator');
    var generator = new Generator(seed);
    return generator.flight(origin, destination).people_on_flight;

}

function getMatches(origin, destination, age, doNotDisturb, family, firstClass, seatLocation, interests){

    // function sends in a flight number and recies back a person array *Jennifer
    var people_on_flight = get_people_on_flight(origin, destination);
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
            compareScore += 15;
        }

        // For every shared interest, +20 to compatibility score
        for(x = 0; x < interests.length; x++) {
            if(interests[x] && tempPerson.interests[x]) {
                compareScore += 20;
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
    return output;
}