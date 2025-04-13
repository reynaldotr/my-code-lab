// Logical "AND"
console.log(true && true); //all values have to be TRUE for expression to be TRUE

// Logical "OR" //Double Pipe
console.log(true || false); //any value should be TRUE for the expression to be TRUE

let ageIsMoreThanEighteen = true;
let isUSCitizen = true;

let eligibilityDriversLicense = ageIsMoreThanEighteen && isUSCitizen;
console.log('This customer is eligible for DL: ' + eligibilityDriversLicense);

//Logical "NOT"
console.log(!true);
console.log(`Data Comparison: ${ 6 !== 10}`)

//Always use === and !==
// Avoid == and != unless you know exactly what type coercion will do.