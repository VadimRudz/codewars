function dontGiveMeFive(start, end)
{
    let numberArray = [];

    for (start; start <= end; start++){
        if(!(`${start}`.search(5) != -1)){
            numberArray.push(start);
        }
    }
    return numberArray.length;
}

console.log(dontGiveMeFive(-11, 0));
