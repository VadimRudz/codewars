function dontGiveMeFive(start, end){
let count = 0;
do{
  count = String(start).includes('5') ? count : ++count;
  start++;
}while(start <= end);
    
  return count;
}

console.log(dontGiveMeFive(4,17));