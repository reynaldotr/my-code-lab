//Practicing Loops Basics

// for (let i=0; i<=6; i++){
//     console.log (i)
// }

for (let i=1; i<=10; i=i+1){
    if (i<10){
        console.log(`Attempt Number ${i} to Connect. Trying Again...`);
    } else {
        console.log(`Attempt Number 10. Connection Failed`);
    }
}

console.log();

//let >> Block-scoped {}
//var >> Function-scoped (outside of {})

//First Exercise:

for (let i=1; i<=10; i++){
        if(i<=5){
            console.log(`Attempt Number ${i} to Connect. Trying Again...`);
    }
        else if (i<10){
            console.log(`Attempt Number ${i} to Connect. Force Re-Syncing + Trying Again...`);
    }   else {
            console.log(`Attempt Number 10. Connection Failed`);
            console.log();
        }
    }

//Second Exercise:

    storeProducts = ['keyboard', 'monitor', 'graphic card'];

for (product of storeProducts){
    console.log(product);
        if(product == 'monitor'){
            break;
    }
}

console.log();

//Third Exercise:
storeProducts.forEach(product => {
    console.log(product);
    }
)

console.log();

//4th:

companyDepartments = ['QA', 'Support', 'Marketing', 'Development']

for (department of companyDepartments){
    console.log(`Company Department Name: ${department}`);
}
console.log();
companyDepartments.forEach( companyDepartment =>{
    console.log(`Company Department Name: ${companyDepartment}`);
})

//5th:

classesCreditsObtained = [15, 10, 8, 10, 9, 7];

for (CreditsObtained of classesCreditsObtained){
    console.log (CreditsObtained);
        if (CreditsObtained == 8){
            break;
        }
    }

classesCreditsObtained.forEach(oneClassCredits => {
    console.log (`Class Credits: ${oneClassCredits}`);
})