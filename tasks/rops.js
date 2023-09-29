function cutTheRopes(a) {
    const resultArray = [];
  
    let sortArray = a.filter((number) => number > 0);
  
    while (sortArray.length > 0) {
        resultArray.push(sortArray.length);
  
        let firstNumber = (sortArray.sort((a, b) => a - b))[0];
  
        sortArray = sortArray.map(num => num - firstNumber);
  
        sortArray = sortArray.filter((number) => number > 0);
    }
  
    const uniqueNumbersSet = new Set(resultArray);
  
    return [...uniqueNumbersSet];
}
  

console.log(cutTheRopes([13035, 6618, 13056, 20912, 1119, 13035, 6618, 6618, 8482, 13056]));
