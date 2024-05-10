function common(a,b,c){

    const argsArray = Array.from([a,b,c]);

    argsArray.sort((a, b) => a.length - b.length);

    const arrayCopy = [...argsArray[0]];

    let result = 0;

    for( let i = 0; i < arrayCopy.length; i++){
        if(argsArray[1].includes(arrayCopy[i]) && argsArray[2].includes(arrayCopy[i])){
            result += arrayCopy[i];
            
            let index = argsArray[0].indexOf(arrayCopy[i]);
            argsArray[0].splice(index, 1);
            
            index = argsArray[1].indexOf(arrayCopy[i]);
            argsArray[1].splice(index, 1);

            index = argsArray[2].indexOf(arrayCopy[i]);
            argsArray[2].splice(index, 1);
        }
    }

    return result;
}
console.log(common([1,2,3],[5,3,2],[7,3,2]));
console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2]));
// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
