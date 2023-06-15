function solution(number) {
  if (number < 0) {
    return 0;
  }

  const arrayNumber = [];
  for (let i = 1; i < number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      arrayNumber.push(i);
    }
  }
  const result = arrayNumber.reduce((sum, current) => sum + current, 0);
  return result;
}

console.log(solution(10));
