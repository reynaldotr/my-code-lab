class Robot {
    constructor(modelName, batteryLevel, status) {
      this.modelName = modelName;           // Save model name in this robot
      this.batteryLevel = batteryLevel;     // Save starting battery
      this.status = status;                 // Save initial status
    }
  
    report() {
      console.log(`[${this.modelName}] Status: ${this.status} | Battery: ${this.batteryLevel}%`);
    }
  
    charge() {
      this.status = "Charging";
      this.batteryLevel = Math.min(this.batteryLevel + 20, 100); // Don't go over 100%
    }
  
    deploy() {
      this.status = "Deployed";
      this.batteryLevel = Math.max(this.batteryLevel - 30, 0); // Don't go below 0%
    }
  }
  
  // 🧪 Test it out:
  
  const robotA = new Robot("RX-77", 60, "Idle");
  const robotB = new Robot("PX-99", 40, "Idle");
  
  robotA.report();     // [RX-77] Status: Idle | Battery: 60%
  robotA.deploy();     // Deploys & drops battery
  robotA.report();     // [RX-77] Status: Deployed | Battery: 30%
  
  console.log();       // Spacer
  
  robotB.report();     // [PX-99] Status: Idle | Battery: 40%
  robotB.charge();     // Charges up
  robotB.report();     // [PX-99] Status: Charging | Battery: 60%
  