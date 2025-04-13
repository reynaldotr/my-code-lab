// You're building a smart gym system that checks: Who a member is, if they can enter the gym & if they're allowed to take a special class

console.log();

//1. Create a "Member" Object:

let member = {
    name: 'Reynaldo', 
    age: 25, 
    isActiveMember: true, 
    signedUpClasses: ['Spanish', 'Math', "Science", "PE"]
};

//2. Print a welcome message using interpolation

// console.log("Welcome " + member.name + " !");
console.log(`Welcome ${member.name} !`);

//3. Check if the member can enter the gym. They must be 18+ AND have an activemembership

console.log(`Can ${member.name} enter the gym?: ${member.age >= 18 && member.isActiveMember}`);

//4. Print how many classes the member is signed up for

console.log(`How many classes does ${member.name} have?: ${member["signedUpClasses"].length}`);

//5. Print a full sentence *only if* the member is not signed up for any classes

if (!(member.signedUpClasses.length > 0)) {
    console.log(`${member.name} is not signed up for any classes`)
};

//OR

!member.signedUpClasses.length && console.log(`${member.name} is not signed up for any classes`); // Condition && action
!(member.signedUpClasses.length > 0) && console.log(`${member.name} is not signed up for any classes`); // My own longer version


//6. Print the list of classes (joined with commas)

console.log(`Classes ${member.name} is taking: ${member.signedUpClasses.join(', ')}`);

//7. Check if the member is allowed to take an advanced strength class, which requires: Age 21 or older OR they are already signed up for "Strength Basics"

console.log(`Is ${member["name"]} allowed to take an advanced strength class?: ${member.age >= 21 || member.signedUpClasses.includes("Strength Basics")}`);

//ChatGPT feedback:

// .join(", ") turns an array into a string with commas between items
// .length returns how many items are in an array (or characters in a string)
// .includes("item") checks if an array contains a specific value



