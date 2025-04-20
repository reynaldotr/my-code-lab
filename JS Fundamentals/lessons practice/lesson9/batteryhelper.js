export class Robot {

    constructor (modelName, batteryLevel, status){
        this.modelName = modelName;
        this.batteryLevel = batteryLevel;
        this.status = status;
    }

    report (){
        console.log();
        console.log(`Robot Name: ${this.modelName}`);
        console.log(`Current Battery Level: ${this.batteryLevel}`);
        console.log(`Current Status: ${this.status}`);
        console.log();
    }
    
    charge (){
        this.status = 'Charging';
        this.batteryLevel = Math.min(this.batteryLevel + 20, 100); //Built-in method to make sure the battery doesn't go over 100
    }

    deploy (){
        this.status = 'Deployed';
        this. batteryLevel = Math.max(this.batteryLevel - 30, 0); //Built-in method to prevent it from dropping below 0
    }
}