//Concatination and Interpolation
var price = 80
var itemName = "Table"
var messageToPrint = 'The price for your '+itemName+ " is "+price+ " dollars" //Concatination > Quite useful for all languages
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //Interpolation > Useful for JS

console.log(messageToPrint)
console.log(messageToPrint2)