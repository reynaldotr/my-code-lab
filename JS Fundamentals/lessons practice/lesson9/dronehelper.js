
export class DronesDelivery {

    
    constructor(droneID, currentLocation, batteryLevel)
    
    {
        this.droneID = droneID;
        this.currentLocation = currentLocation;
        this.batteryLevel = batteryLevel;
    }

    currentStatus(){
        console.log(`Drone ID: ${this.droneID} | Current Location: ${this.currentLocation} | Battery Level: ${this.batteryLevel}`);
    }

    recharge (){
        this.batteryLevel = Math.min(this.batteryLevel + 40, 100);
    }

    performDelivery(newLocation){
        this.currentLocation = newLocation
        this.batteryLevel = Math.max(this.batteryLevel - 25, 0);
    }

}


