let traveler = {
    name: "Reynaldo",
    age: 19,
    hasPassport: true,
    destination: "Nicaragua "
};

let destination = (traveler.destination ?? "").trim().toUpperCase();
let visaCountry = ["USA", "UK"]

if (traveler.age >= 18 && traveler.hasPassport) {
    const note = visaCountry.includes(destination)
    ? ` will need a VISA to travel to ${traveler.destination.trim()}`
    : ` can travel to ${traveler.destination.trim()}`

    console.log(`${traveler.name} ${note}`)

} else {
    console.log(`${traveler.name} is not eligible to travel`)
}

