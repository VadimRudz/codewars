function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i && arr.lastIndexOf(arr[i]) === i) {
      return arr[i];
    }
  }
}

console.log(findUniq([0, 0, 1]));
