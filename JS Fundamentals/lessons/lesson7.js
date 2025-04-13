//Loops

//STRUCTURE:
// for(statement1; statement2; statement3){
//
// }

//statement 1 is our initial statement - What we want to start the loop with
//statement 2 will define the condition of how long do we want to run our loop + when we want to stop the loop
//statement 3 what do we need to do after each cycle of the loop

//EXAMPLE:
//for loop (for i loop)

for(let i=0; i<5; i++){
   console.log('Hellow World!' + i);
}

console.log()

//Alternative:

// for (let i=0; i<5; i=i+1){
//     console.log('Hellow World!');
// }

var cars = ["volvo", 'Toyota', "Tesla"];

// for of loop

for(let car of cars){
    console.log(car); //car is our iterator
    if(car == "Toyota"){
        break;
    }
}

console.log();

// //ES6 syntax for each loop
cars.forEach(car => {
    console.log(car);
}
)

