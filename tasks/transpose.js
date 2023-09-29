function transpose(matrix) {
    let array = [];
    let temporaryArray = [];
    for(let i = 0; i < matrix[0].length; i++){
        for(let j = 0; j < matrix.length; j++){
            temporaryArray.push(matrix[j][i]);
        }
        array.push(temporaryArray);
        temporaryArray = [];
    }
    return array;
}

console.log(transpose([[1,2,3],[4,5,6]]));
