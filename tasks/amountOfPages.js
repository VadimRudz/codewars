function amountOfPages (summary){
    let accNumber = '';
    let returnValue; 
    for (let i = 1; accNumber.length < summary; i++) {
        accNumber = accNumber + i;
        returnValue = i;
    }
    return returnValue;
}

console.log(amountOfPages(5));
