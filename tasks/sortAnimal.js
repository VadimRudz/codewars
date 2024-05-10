function sortAnimal(animals) {

    if (animals.length === 0) {
        return [];
    } else {
        animals.sort((a, b) => a.numberOfLegs - b.numberOfLegs);
        
    }
    const compareArray = [];

    let resultArray = [];

    for (let i = 0; i < animals.length; i++){
        if(!compareArray.includes(animals[i].numberOfLegs)){
            compareArray.push(animals[i].numberOfLegs);
            let filteredArray = animals.filter((animal) => animal.numberOfLegs === animals[i].numberOfLegs);
            filteredArray.sort((a, b) => {
                const nameA = a.name;
                const nameB = b.name;
                
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                
                return 0;
            });
            resultArray = [...resultArray, ...filteredArray];
        }
    }
    return resultArray;
}
  
console.log(sortAnimal([
    { name: "Centipede", numberOfLegs: 100 },
    { name: "Snail", numberOfLegs: 0 },
    { name: "Lizard", numberOfLegs: 4 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 }
]));

// [
//     { name: 'Snail', numberOfLegs: 0 },
//     { name: 'Bird', numberOfLegs: 2 },
//     { name: 'Human', numberOfLegs: 2 },
//     { name: 'Dog', numberOfLegs: 4 },
//     { name: 'Lizard', numberOfLegs: 4 },
//     { name: 'Centipede', numberOfLegs: 100 }
//   ]);
