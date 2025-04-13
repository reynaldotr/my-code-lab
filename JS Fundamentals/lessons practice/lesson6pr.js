// 1. Create a "Traveler" object:

let traveler = {
    name: 'Greg',
    age: 18,
    hasPassport: true,
    destination: 'USA'
}

// 2. Print a welcome message using interpolation

console.log(`Airport: Welcome ${traveler.name} !`);

// 3. Use a conditional (if) to check

const destination = traveler.destination.toUpperCase();

if (traveler.age >= 18 && traveler.hasPassport && destination !== "USA" && destination !== "UK") {
    console.log(`${traveler.name} is allowed to travel to ${traveler.destination}`);

} else if (traveler.age >= 18 && traveler.hasPassport && (destination === "USA" || destination === "UK")) {
    // 4. Bonus: Add a check to see if the destination is "USA" or "UK"
    // If so, print "Note: Visa required for ${destination}"
    console.log(`Note: Visa required for ${traveler.destination}`);

} else {
    console.log(`${traveler.name} is not eligible for international travel`);
}

//ChatGPT Feedback:

//It thought me how to use ".toUpperCase()" properly. :)


