
const gym_member = {
    memberName: 'Reynaldo',
    age: 25, 
    activeMembership: true,
    listOfClasses: ["Math", "Geo", "Spanish", "Art"]
}

console.log(gym_member);

let authorName = 'Reynaldo';
console.log(`Welcome ${authorName}!`);

let olderThan18 = gym_member.age >= 18;
console.log(`Older than 18?: ${olderThan18}`);

let activeMembership = true === gym_member.activeMembership;
console.log('Active Membership?: '+activeMembership);

let canEnterGym = olderThan18 == activeMembership;
console.log(`Can enter gym: ${canEnterGym}`);

let numberOfClasses = gym_member.listOfClasses.length;
console.log(`Signed up for classes: ${numberOfClasses>0}`)




