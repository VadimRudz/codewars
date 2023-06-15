function permuteAPalindrome(input) {
    const charCount = {};
    let oddCount = 0;
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
      if (charCount[char] % 2 === 1) {
        oddCount++;
      } else {
        oddCount--;
      }
    }
  
    return oddCount <= 1;
  }

console.log(permuteAPalindrome("fhmppivfpfjlfrvilnhkrnvdmjxbrwhdkwxprbv"));