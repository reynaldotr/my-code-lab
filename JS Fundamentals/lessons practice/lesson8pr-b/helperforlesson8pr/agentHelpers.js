//You're building a system that evaluates secret agents based on code names, scores, and missions. Your job is to:

//1. Create a file called: agentHelpers.js

//a) Create a named (declarative) function with the following conditions:

export function evaluateScore(score){

    if (score >= 90){
        return 'Elite';

    } else if (score >= 70 && score < 90){
        return 'Average';

    } else {
        return 'Needs Training' 
 }
}

//b) Create an arrow function called #### that returns ####:

export let greetAgent = (codeName) => {
    return(`Welcome, Agent "${(codeName)}". Awaiting Orders...`)
}

//c) Export both functions

// DONE