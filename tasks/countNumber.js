function countNumber(arr,num){

    let newArray = new Array().concat(...arr);

    let filteredArray = newArray.filter(value => value === num);

    return filteredArray.length;
}

let arr=[
    [62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    [63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],
    [64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],
    [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83],
    [66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],
    [67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85]];

console.log(countNumber(arr, 81));
