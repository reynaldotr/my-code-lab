const gym_member = {
    memberName: 'Reynaldo',
    age: 25, 
    activeMembership: true,
    listOfClasses: ["Math", "Geo", "Spanish", "Art"]
}

// 1. Welcome message using interpolation
console.log(`Welcome ${gym_member.memberName}!`);

// 2. Check if member is 18 or older
let olderThan18 = gym_member.age >= 18;
console.log(`Older than 18?: ${olderThan18}`);

// 3. Check active membership
let activeMembership = gym_member.activeMembership;
console.log(`Active Membership?: ${activeMembership}`);

// 4. Can enter gym (must be adult AND active member)
let canEnterGym = olderThan18 && activeMembership;
console.log(`Can enter gym: ${canEnterGym}`);

// 5. Check if signed
let numberOfClasses = gym_member.listOfClasses.length;
console.log(`Signed up for classes: ${numberOfClasses > 0}`);
console.log()

//NEW WAY: No variables in between
console.log("NEW WAY: No variables in between");
console.log();

// 1. Welcome message using interpolation
console.log('welcome '+gym_member["memberName"]+ "!");

// 2. Check if member is 18 or older
console.log(`Older than 18?: ${gym_member.age >= 18}`);

// 3. Check active membership
console.log(`Active Membership?: ${gym_member.activeMembership}`);

// 4. Can enter gym (must be adult AND active member)
console.log(`Can enter gym: ${gym_member.age && gym_member.activeMembership}`);

// 5. Check if signed
console.log(`Signed up for classes: ${gym_member.listOfClasses.length > 0}`)

console.log(`List of clases: ${gym_member.listOfClasses}`)
console.log(`List of classes: ${gym_member.listOfClasses.join(', ')}`)





