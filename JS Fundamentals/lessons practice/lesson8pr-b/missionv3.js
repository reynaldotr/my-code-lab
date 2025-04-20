//2 - Import both functions:

import * as missionHelper from "../lesson8pr-b/helperforlesson8pr/agentHelpers.js"

//3 - Use both functions

let greetAgent = missionHelper.greetAgent;
let evaluateScore = missionHelper.evaluateScore;

console.log();
console.log(greetAgent('ShadowFox'));
console.log(`Agent status: ${evaluateScore(88)}`);
console.log();

//Method V3 - Array of Objects + Use for...of + manual index (i)

let agentsAndScores = [
    {agentName: "RedBurn",   obtainedScore: 100},
    {agentName: "RobStick",  obtainedScore: 90 },
    {agentName: "Leviathan", obtainedScore: 80 },
    {agentName: "Safiro",    obtainedScore: 70 },
    {agentName: "BlueSky",   obtainedScore: 60 },
    {agentName: "Overseas",  obtainedScore: 50 }
]

let i = 0;

for (let agentAndScore of agentsAndScores){
    
    i++//Manually increment

        console.log();
        console.log(`Agent Number ${i}:`);
        console.log(greetAgent(agentAndScore.agentName));
        console.log(`Status: ${evaluateScore(agentAndScore.obtainedScore)}`);
        console.log();

}