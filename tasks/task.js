function returnSumNumbers(number) {
  const stringNumber = String(number);

  let accNumber = 0;

  for (let letter of stringNumber) {
    accNumber = accNumber + +letter;
  }
  return accNumber;
}

console.log(returnSumNumbers(125));
