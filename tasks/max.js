function max(array) {
    return array.length === 0 ? -Infinity : array.sort((a , b) => a - b).reverse()[0];
}

console.log(max([1,2,3,4,5]));

console.log(max([]));