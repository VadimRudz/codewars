var isMatch = function(s, p) {

    if(p.includes('*') && s){
        return true;
    } else {
        for (let i = 0; i < s.length; i++){
            console.log('i am here');
            if(s[i] !== p[i] || p[i] === '?' || (!(p[i]))){
                return false;
            }
        }
    }
    
};

console.log(isMatch("adceb", "*a*b"));



// Example 1:
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Example 2:
// Input: s = "aa", p = ""aa""
// Output: true
// Explanation: '*' matches any sequence.

// Example 3:
// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
