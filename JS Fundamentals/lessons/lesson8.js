// Declarative function
helloOne();
function helloOne(){
    console.log('Hello one!');
}

// Anonymus function
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
function multipleByTwo(number){
    var result = number * 2;
    return result;
}
var myResult = multipleByTwo(5);
console.log(myResult);