//objects

let customer = {
    firstName: 'John', 
    lastName: 'Smith',
    cars: ["volvo", 'Toyota', "Tesla"]
}

//Dot notation
customer.firstName = "Mike"
console.log(customer.lastName) //simply dot + the propery

//Bracket notation
customer['lastName'] = 'Silver'
console.log(customer['lastName']) //bracket + single/doble quotes

console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
var car = ["volvo", 'Toyota', "Tesla"]
car[1] = "BMW"
console.log(car[1])
console.log(customer.cars[0])
console.log(customer['cars[0]'])