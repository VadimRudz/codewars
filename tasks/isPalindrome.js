const isPalindrome = function(head) {

    let isPalindrome = true;

    const lengthHalf = head.length/2;

    let indexOfLastElement = head.length- 1;

    for(let i =0; i < lengthHalf; i++, indexOfLastElement--) {
        console.log(head[i], head[indexOfLastElement]);
        if(head[i] !== head[indexOfLastElement]) {
            isPalindrome = false;
        }
    }
    return isPalindrome
};

console.log(isPalindrome([1,2]))

