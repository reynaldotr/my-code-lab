import * as helpers from './robotHelpers.js'

let robots = [

    {name: 'RX-01', battery: 90, errors: 1},
    {name: 'RX-77', battery: 27, errors: 5},
    {name: 'RX-23', battery: 45, errors: 4},
    {name: 'RX-48', battery: 12, errors: 0},
    {name: 'RX-36', battery: 72, errors: 0},

]

let evaluateBattery = helpers.evaluateBattery;
let isFunctional = helpers.isFunctional;

//1. Method 1:

for (let [index, robot] of robots.entries()){

    console.log();
    console.log(`Robot Number: ${index+1}`); //Or ${++index}
    console.log(`Robot: ${robot.name}`);
    console.log(evaluateBattery(robot.battery));

    if (isFunctional(robot.errors)){
        console.log(`✅ ${robot.name} is fully operational!`);
        console.log();
    } else {
        console.log(`❌ ${robot.name} has issues. Send for maintenance.`);
        console.log();
    }
}


// //2. Method 2:

let i = 0;

for (let robot of robots){
    i++;

        console.log();
    console.log(`Robot Number: ${i}`);
    console.log(`Robot: ${robot.name}`);
    console.log(evaluateBattery(robot.battery));

    if (isFunctional(robot.errors)){
        console.log(`✅ ${robot.name} is fully operational!`);
        console.log();
    } else {
        console.log(`❌ ${robot.name} has issues. Send for maintenance.`);
        console.log();
    }
}


//3. Method 3:

for (let i=0; i<robots.length; i++){
    let robot = robots[i]

    console.log();
        console.log(`Robot Number: ${i+1}`); //Or ${++index}
        console.log(`Robot: ${robot.name}`);
        console.log(evaluateBattery(robot.battery));
    
        if (isFunctional(robot.errors)){
            console.log(`✅ ${robot.name} is fully operational!`);
            console.log();
        } else {
            console.log(`❌ ${robot.name} has issues. Send for maintenance.`);
            console.log();
        }
    }

