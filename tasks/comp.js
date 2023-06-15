function comp(array1, array2) {
  const squaredArray = array1.map((number) => number * number);
  return JSON.stringify(squaredArray.sort()) === JSON.stringify(array2.sort());
}

console.log(comp(
  [121, 144, 19, 161, 19, 144, 19, 11],
  [121, 14641, 20736, 361, 25921, 361, 20736, 361],
));
