class Drone {

constructor (droneID, batteryLevel){

    this.droneID = droneID;
    this.batteryLevel = batteryLevel;

    this.deliverySteps = ['Warehouse', 'Preparing', 'In Transit', 'Close', 'Delivered']
    this.currentStepIndex = 0;
    this.rechargeAmount = 25;
    this.deliveryCost = 25
}

    currentStatus(){
        console.log(`DroneID: ${this.droneID} | Current Location: ${this.deliverySteps[this.currentStepIndex]} | Battery Level: ${this.batteryLevel}`)
    }

    recharge(){
        this.batteryLevel = Math.min(this.batteryLevel + this.rechargeAmount, 100)
    }

    performDelivery(){
        if (this.currentStepIndex < this.deliverySteps.length -1){
            this.currentStepIndex++     
            this.batteryLevel = Math.max(this.batteryLevel - this.deliveryCost, 0)
        } else {
            console.log (`Drone ID ${this.droneID} has been delivered`)
        }
    }
}

const drone1 = new Drone(10485, 85);

//Exercise 1:

// drone1.currentStatus();
// drone1.recharge();
// drone1.currentStatus();
// drone1.performDelivery();
// drone1.currentStatus();
// drone1.performDelivery();
// drone1.performDelivery();
// drone1.currentStatus();
// drone1.recharge();
// drone1.performDelivery();
// drone1.currentStatus();
// drone1.performDelivery();

//Exercise 2:

while ((drone1.deliverySteps[drone1.currentStepIndex].toUpperCase()) !== "DELIVERED"){

    while (drone1.batteryLevel < drone1.deliveryCost){
        drone1.recharge();
        drone1.currentStatus();
    }

    drone1.performDelivery();
    drone1.currentStatus();
}

