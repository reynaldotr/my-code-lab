// Declarative function
helloOne();
function helloOne(){
    console.log('Hello one!');
}

// Anonymous function
var helloTwo = function(){
    console.log(`Hello two!`);
}
helloTwo();

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three!')
}
helloThree();

//Function with arguments
function printName (name, lastName){
    console.log(name + ' ' + lastName);
}
printName('Mike', "Smith");

//Function with return
function multiplyByTwo(number){
    var result = number * 2;
    return result;
}
var myResult = multiplyByTwo(20);
console.log(myResult);

//import function
import { printAge } from '../helpers/printHelper.js'
printAge(5)

//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)