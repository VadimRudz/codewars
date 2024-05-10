function towerBuilder(nFloors) {
    let resultArray = [];

    for(let numberOfSnowflakes = nFloors*2 -1; numberOfSnowflakes > 0; numberOfSnowflakes = numberOfSnowflakes -2) {

        const spaces = ' '.repeat((nFloors*2 -1 - numberOfSnowflakes)/2);
        const snowflakes = '*'.repeat(numberOfSnowflakes);

        resultArray.unshift(`${spaces}${snowflakes}${spaces}`);

    }

    return resultArray;
}

console.log(JSON.stringify(towerBuilder(3)));
