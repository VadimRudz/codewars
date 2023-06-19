function wheatFromChaff(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      while (arr[left] < 0) {
        left++;
      }
      while (arr[right] >= 0) {
        right--;
      }
      if (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
      }
    }
    return arr;
  }

console.log(wheatFromChaff([7, -8, 1 ,-2]));

// wheatFromChaff ([7, -8, 1 ,-2]) ==> return ([-2, -8, 1, 7]) 