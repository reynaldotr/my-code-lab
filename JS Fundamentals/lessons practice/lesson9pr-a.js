import { Robot } from "./lesson9/batteryhelper.js";

const robot1 = new Robot ('Wall-E', 58, 'Unknown');
const robot2 = new Robot ('Eva', 12, 'Idle');

robot1.report();
robot1.charge();
robot1.report();

console.log();

robot2.report();
robot2.deploy();
robot2.report();
