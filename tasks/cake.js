function cake(ingredient, amount){
    let recipe = {'caster sugar': 160, 'butter': 170, 'eggs': 3, 'self-raising flour': 115, 'cocoa powder': 55};

    const propertyValue = recipe[ingredient];

    const ratio = amount / propertyValue;

    for(let prop in recipe){
        recipe[prop] = (recipe[prop] * ratio).toFixed(1);
        if(recipe[prop][recipe[prop].length - 1] === '0'){
            recipe[prop] = recipe[prop].slice(0, -2);
        }
        if(prop !== 'eggs'){
            recipe[prop] = recipe[prop] + 'g';
        } else{
            recipe[prop] = Number(recipe[prop]);
        }
    }

    return recipe;
}

console.log(cake('butter',55));
