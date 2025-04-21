
class DronesDelivery {
    constructor(droneID, batteryLevel) {
      this.droneID = droneID;
      this.batteryLevel = batteryLevel;
  
      // Predefined delivery route
      this.deliverySteps = ['Warehouse', 'Preparing', 'In Transit', 'Close', 'Delivered'];
      this.i = 0; // Start at first location
    }
  
    currentStatus() {
      console.log(`Drone ID: ${this.droneID} | Current Location: ${this.deliverySteps[this.i]} | Battery Level: ${this.batteryLevel}`);
    }
  
    recharge() {
      this.batteryLevel = Math.min(this.batteryLevel + 25, 100);
    }
  
    performDelivery() {
      if (this.i < this.deliverySteps.length - 1) {
        this.i++;
        this.batteryLevel = Math.max(this.batteryLevel - 25, 0);
      } else {
        console.log(`Drone ID: ${this.droneID} has already completed the delivery.`);
      }
    }
  }
  

const drone1 = new DronesDelivery(1084, 80);

while (drone1.deliverySteps[drone1.i] !== "Delivered") {
  
  // Recharge until battery hits 100 if it's too low to deliver
  while (drone1.batteryLevel < 25) {
    drone1.recharge();
    drone1.currentStatus();
  }

  // Once battery is ready, do the delivery
  drone1.performDelivery();
  drone1.currentStatus();
}