//Functions

classifiedMember('Donato', 'Stephano')
function classifiedMember(number1, number2){
    console.log(`${number1} & ${number2}, como here please`)
}


var classifiedMember2 = function(number3, number4){
    console.log(`${number3} & ${number4}, please come here`)
}

classifiedMember2('Maite', 'Sebastian')

var classifiedMember3 = (number5, number6) => {
    console.log(`${number5} & ${number6}, do not come closer`)
}

classifiedMember3('Miranda', "lolo")

function multiplybyThree (number){
    let result = number * 3;
    return result
}

console.log(multiplybyThree(3));
