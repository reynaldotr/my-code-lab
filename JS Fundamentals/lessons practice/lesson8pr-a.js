//Functions

classifiedMember('Donato', 'Stephano')
function classifiedMember(number1, number2){
    console.log(`${number1} & ${number2}, como here please`)
}


var classifiedMember2 = function(number3, number4){
    console.log(`${number3} & ${number4}, please come here`)
}

classifiedMember2('Maite', 'Sebastian')

var classifiedMember3 = (number5, number6) => {
    console.log(`${number5} & ${number6}, do not come closer`)
}

classifiedMember3('Miranda', "lolo")

function multiplybyThree (number){
    let result = number * 3;
    return result
}

console.log(multiplybyThree(3));

//EXAMPLE after lesson8pr-b:

let agentsAndScores = [
    {agentName: "RedBurn",   obtainedScore: 100},
    {agentName: "RobStick",  obtainedScore: 90 },
    {agentName: "Leviathan", obtainedScore: 80 },
    {agentName: "Safiro",    obtainedScore: 70 },
    {agentName: "BlueSky",   obtainedScore: 60 },
    {agentName: "Overseas",  obtainedScore: 50 }
]

//A)

for (let entry of agentsAndScores){
    console.log(entry)
}

// { agentName: 'RedBurn', obtainedScore: 100 }
// { agentName: 'RobStick', obtainedScore: 90 }
// { agentName: 'Leviathan', obtainedScore: 80 }
// { agentName: 'Safiro', obtainedScore: 70 }
// { agentName: 'BlueSky', obtainedScore: 60 }
// { agentName: 'Overseas', obtainedScore: 50 }

//B)

for (let entry of agentsAndScores.entries()){
    console.log(entry)
}

// [ 0, { agentName: 'RedBurn', obtainedScore: 100 } ]
// [ 1, { agentName: 'RobStick', obtainedScore: 90 } ]
// [ 2, { agentName: 'Leviathan', obtainedScore: 80 } ]
// [ 3, { agentName: 'Safiro', obtainedScore: 70 } ]
// [ 4, { agentName: 'BlueSky', obtainedScore: 60 } ]
// [ 5, { agentName: 'Overseas', obtainedScore: 50 } ]

//C)

for (let [number, entry] of agentsAndScores.entries()){
    console.log(number+1)
    console.log(entry.agentName)
    console.log(entry.obtainedScore)
}

// 1
// RedBurn
// 100
// 2
// RobStick
// 90
// 3
// Leviathan
// 80
// 4
// Safiro
// 70
// 5
// BlueSky
// 60
// 6
// Overseas
// 50