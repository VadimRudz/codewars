var isValid = function (s) {

    const bracketsMap = new Map([['(', ')'], ['[', ']'], ['{', '}']]);

    if (s[0] === ')' || s[0] === ']' || s[0] === '}') {
        return false
    } else {
        let copyS = s;
        while (copyS[0]) {
            let neededEndChar = bracketsMap.get(copyS[0]);
            let indexOpenedBracket = copyS.indexOf(copyS[0]);
            let indexClosedBracket = copyS.lastIndexOf(neededEndChar);
            if ((indexOpenedBracket < indexClosedBracket) && ((indexClosedBracket - indexOpenedBracket)%2 !== 0 )) {
                let start = copyS.slice(1, indexClosedBracket) + copyS.slice(indexClosedBracket+1);
                copyS = start;
            } else {
                return false;
            }
        }
    } return true;

};

console.log(isValid("(([]){})"));


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false