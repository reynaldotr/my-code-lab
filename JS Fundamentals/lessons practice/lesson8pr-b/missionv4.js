//2 - Import both functions:

import * as missionHelper from "../lesson8pr-b/helperforlesson8pr/agentHelpers.js"

//3 - Use both functions

let greetAgent = missionHelper.greetAgent;
let evaluateScore = missionHelper.evaluateScore;

console.log();
console.log(greetAgent('ShadowFox'));
console.log(`Agent status: ${evaluateScore(88)}`);
console.log();

//Method V4 - Array of Objects + Use for (let i = 0; i < array.length; i++)

let agentsAndScores = [
    {agentName: "RedBurn",   obtainedScore: 100},
    {agentName: "RobStick",  obtainedScore: 90 },
    {agentName: "Leviathan", obtainedScore: 80 },
    {agentName: "Safiro",    obtainedScore: 70 },
    {agentName: "BlueSky",   obtainedScore: 60 },
    {agentName: "Overseas",  obtainedScore: 50 }
]


for (let i = 0; i < agentsAndScores.length; i++) {
    let agent = agentsAndScores[i];

    console.log();
    console.log(`Agent Number ${i + 1}:`);
    console.log(greetAgent(agent.agentName)); // ALT: console.log(greetAgent(agentsAndScores[i].agentName));
    console.log(`Status: ${evaluateScore(agent.obtainedScore)}`); // ALT: console.log(`Status: ${evaluateScore(agentsAndScores[i].obtainedScore)}`);
    console.log();
}
