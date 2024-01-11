// Create a length converter function

function convertKiloToMiles (kilometers) {
    const miles =  kilometers * 0.621371;
    return miles;
}

const kilometers = 10;
const miles = convertKiloToMiles(kilometers);
console.log(`${kilometers} kilometers is equal to ${miles} miles.`)