function iam(input, n =0) {
    return input ? `I am ${'very '.repeat(n)}${input}` : x => iam(x, n+1);
}

console.log(iam()()()()('interested'));

// iam('happy') // returns the string "I am happy"
// iam('excited') // returns the string "I am excited"
// iam()('scared') // returns the string "I am very scared"
// iam()()('interested') // returns the string "I am very very interested"
