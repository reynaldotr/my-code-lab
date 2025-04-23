// JS:

let familySize = 2;
let plannedDistanceToDrive = 100;

function recommendedCar (familySize, plannedDistanceToDrive){
    
    if (familySize <= 4 && plannedDistanceToDrive < 200){
        return "Tesla";
        
    } else if (familySize <= 4 && plannedDistanceToDrive >= 200){
        return "Toyota Camry";
        
    } else {
        return "Minivan"
    }
    
}

recommendedCar(2, 100);

//TS:

function recommendedCar2(familySize: number, plannedDistanceToDrive: number): string {

    if (familySize <= 4 && plannedDistanceToDrive < 200){
        return "Tesla";

    } else if (familySize <= 4 && plannedDistanceToDrive >= 200){
        return "Toyota Camry";

    } else {
        return "Minivan";
    }
}

const car = recommendedCar2(2, 100);
console.log(car);


//TS Example with Type Object:

type TripDetails = {
    familySize: number;
    plannedDistanceToDrive: number;
};

function recommendedCar3(trip: TripDetails): string {
    if (trip.familySize <= 4 && trip.plannedDistanceToDrive < 200){
        return "Tesla";
    } else if (trip.familySize <= 4 && trip.plannedDistanceToDrive >= 200){
        return "Toyota Camry";
    } else {
        return "Minivan";
    }
}

const myTrip: TripDetails = {
    familySize: 2,
    plannedDistanceToDrive: 100,
};

console.log(recommendedCar3(myTrip));
