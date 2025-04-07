// //Practicing stuff

// const buttonPreferences = {
//     color: 'blue',
//     size: 'big',
//     style: 'clasic',
//     position: "top"
// };

// console.log(`Color: ${buttonPreferences.color}`);
// console.log(buttonPreferences['size']);
// console.log(buttonPreferences.style);
// console.log(buttonPreferences["position"])

// console.log(`Interpolation: ${buttonPreferences.color} & ${buttonPreferences['position']}`);
// console.log('concatenation:'+" "+buttonPreferences["style"]+" & "+buttonPreferences.position)

const purchaseRequirements = {
    price: 20,
    delivery: "delivery",
    warranty: "One Year",
    'payment type': "accept CC"
}

// console.log('I would accept '+purchaseRequirements.price+" and if they "+purchaseRequirements["payment type"]+' at least')


//ChatGPT exercise

let store = {
    name: "Nicaragua Store",
    products: [
        { name: "keyboard", price: 30, quantity: 10},
        { name: "Mouse", price: 20, quantity: 15},
        { name: "Monitor", price: 150, quantity: 5}
    ]
}

//1. Print store name

console.log(`Name of the store is ${store.name}`)

//2. Print name and price of the first product

console.log(`The price of the ${store.products[0].name} is ${store.products[0].price}`)

//3. Print how many different products there are

console.log(`Total number of products: ${store.products.length}`)