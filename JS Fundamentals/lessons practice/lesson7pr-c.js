//Chat GPT. Exercise II:
// You’re building logic for a pro gamer trying to qualify for a tournament. 
// You’ll check if the player is ready, and simulate up to 7 qualification attempts.

//1. Create a player object with:

let player = {
    username: 'shadowNinjaX',
    reactionTime: 6,
    hardwarePassedCheck: true,
    registeredGameServers: ["NA-East", "EU-West", "Asia-Pacific"]
}

//2. Print a welcome message using interpolation:

console.log();
console.log(`Welcome ${player.username}, preparing to enter qualifying rounds...`);
console.log();

//3. Check if the player is ready:

let hasEUWEST = false

for (let gameServer of player.registeredGameServers){
    if (gameServer.toUpperCase() === "EU-WEST"){
        hasEUWEST = true;
        break;
    }
}

//4. Use a for loop to simulate up to 7 qualification attempts:

for (let i=1; i<=7; i++){

    let playerIsReady = (player.reactionTime >= 7 && player.hardwarePassedCheck && hasEUWEST)

    if (playerIsReady){
        console.log(`✅ Attempt #${i}: ${player.username} qualified successfully!`)
        break;
    } else if  (i < 7){
        console.log(`❌ Attempt #${i}: Qualification failed. Retrying...`)
        player.reactionTime++
    } else {
        console.log(`🚫 Final Attempt #7: ${player.username} failed to qualify`)
    }
} 

//Extra: ES6 Syntax for Each Loop

console.log();

console.log('Available Game Servers:');
console.log();
player.registeredGameServers.forEach(gameServer =>{
    console.log(gameServer)
}
);

console.log();