const array = [111, 22, 3, 1734, 920023, 1100002, 9];
const stringArray = array.map((value) => value.toString());

let sumArray = [];

for(let value of stringArray){
    let sum = 0;
    for(let innerValue of value){
        sum = sum + Number(innerValue);
    }
    sumArray.push(sum);
}

let index;
let maxValue = 0;

for(let i = 0; i < sumArray.length; i++) {

    if(sumArray[i] >= maxValue){
        maxValue = sumArray[i];
        index = i;
    }

}
console.log(array[index]);
