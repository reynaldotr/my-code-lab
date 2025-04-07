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





