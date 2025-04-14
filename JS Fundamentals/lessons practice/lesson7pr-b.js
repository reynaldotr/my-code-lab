// ChatGPT Exercise:

// 1. Create a rocket object:

let rocket = {
    name: 'Elisa 7',
    fuelLevel: 5,
    systemCheckPassed: true,
    availableLaunchSites: ['Vanderberg', 'Area 51', 'Cape Canaveral']
};

// 2. Print a welcome message using interpolation:

console.log();
console.log(`Mission Control: Preparing "${rocket.name}" for launch...`);
console.log();

// 3. Check if any launch site is Cape Canaveral (case-insensitive)
let hasCapeCanaveral = false;

for (let launchSite of rocket.availableLaunchSites) {
    if (launchSite.toUpperCase() === "CAPE CANAVERAL") {
        hasCapeCanaveral = true;
        break;
    }
}

// 4. Try up to 5 launch attempts
for (let i = 1; i <= 5; i++) {
    let rocketIsReady = (rocket.fuelLevel >= 7 && rocket.systemCheckPassed === true && hasCapeCanaveral);

    if (rocketIsReady) {
        console.log(`✅ Attempt #${i}: ${rocket.name} has launched successfully!`);
        break;
    } else if (i < 5) {
        console.log(`❌ Attempt #${i}: Launch failed. Retrying...`);
        rocket.fuelLevel++; // I'm adding more fuel :)
    } else {
        console.log(`🚫 Final Attempt #5: Mission aborted. ${rocket.name} failed to launch.`);
    }
}





