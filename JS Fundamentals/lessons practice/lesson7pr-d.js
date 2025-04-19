// You’re building a system to evaluate a student attempting to pass a final exam.
// The student has up to 6 retake attempts to reach the passing score.

// 1. Create a student object

// 2. Print a welcome message using interpolation

// 3. Check if the student is allowed to take the test

// 4. Use a for loop to simulate up to 6 exam retake attempts

//Exercise Execution:

//I - Initializing my Object

let student = {
    name: 'Shaun',
    currentScore: 63, //Has to be between 1-100
    hasIDCard: true,
    availableTestCenters: ["Central Campus", "East Wing", "Online Portal"]
}

//II - Conditional + Loop

if (student.currentScore >= 75){

    console.log();
    console.log(`Student ${student.name} does NOT need to take the exam. Already passed! 🎉`); //No need to take exam
    console.log();

} else {

    console.log();
    console.log (`Student ${student.name} your final exam starts now!`); //Has to take exam
    console.log();

    let containsOnlinePortal = false;

    for (let testCenter of student.availableTestCenters){
        if (testCenter.toUpperCase() === 'ONLINE PORTAL'){
            containsOnlinePortal = true;
            break;
    }
}

    for (let i=1; i<=6; i++){

    let passed = (student.currentScore >= 75 && 
                  student.hasIDCard && 
                  containsOnlinePortal);
    
        if (passed && i !== 6){
            console.log(`✅ Attempt #${i}: ${student.name} passed the exam!`);
            break;
    
        } else if (i <= 5){
            console.log (`❌ Attempt #${i}: Not enough. Retaking...`);
            student.currentScore = student.currentScore + 3; //Adds 3 points to the last `currentScore` per attempt
    
        } else if (passed){
            console.log(`⚠️ Final Attempt #6: ${student.name} passed at the last second!`);
            break;
    
        } else {
            console.log(`🚫 Final Attempt #6: ${student.name} failed the course.`);
            break;
        }
    }
}




