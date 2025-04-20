
export function evaluateBattery(batteryLevel){
    if (batteryLevel >= 80){
        return "Battery: Optimal";
    } else if (batteryLevel >= 50){
        return "Battery: Moderate";
    } else {
        return "Battery: Low";
    }
}
export let isFunctional = (errors) => errors === 0;

// export let isFunctional = (errors) =>{
//     if (errors === 0){
//         return true;
//     } else {
//         return false;
//     }
// }  

