//2 - Import both functions:

import * as missionHelper from "../lesson8pr-b/helperforlesson8pr/agentHelpers.js"

//3 - Use both functions

let greetAgent = missionHelper.greetAgent;
let evaluateScore = missionHelper.evaluateScore;

console.log();
console.log(greetAgent('ShadowFox'));
console.log(`Agent status: ${evaluateScore(88)}`);
console.log();

//Method V1 - Separate Arrays + For "i" Loop + Math.min()

let agentNames = ["RedBurn", "RobStick", "Leviathan", "Safiro", "BlueSky", "Overseas"]
let obtainedScores = [100, 90, 80, 70, 60, 50, 40, 30]

for (let i=0; i < Math.min(agentNames.length, obtainedScores.length); i++){

        console.log();
        console.log(`Agent Number ${i+1}:`);
        console.log(greetAgent(agentNames[i]));
        console.log(evaluateScore(obtainedScores[i]));
        console.log();

}