
import { DronesDelivery } from "./lesson9/dronehelper.js";

const droneDelivery1 = new DronesDelivery(1084, "Warehouse", 70);
const droneDelivery2 = new DronesDelivery(2046, "In Warehouse", 50);

droneDelivery1.currentStatus(); //Show current status
droneDelivery1.performDelivery('In Transit');//Send the drone out for delivery

console.log();//Empty space

droneDelivery1.currentStatus();//Show updated status
droneDelivery1.recharge();//Recharging drone

console.log();//Empty space

droneDelivery1.currentStatus(); //Show status again (final)
droneDelivery1.performDelivery('Closer');

console.log();

droneDelivery1.currentStatus();

