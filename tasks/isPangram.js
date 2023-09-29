function isPangram(string) {
    const alphabet = new Set(Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i)));
    const editedString = new Set(string.toLowerCase()
        .replace(/[^a-zA-Z]/gi, '')
        .replace(' ')
        .split('')
        .sort());
    const eqSet = (xs, ys) => xs.size === ys.size
    && [...xs].every((x) => ys.has(x));
    return eqSet(alphabet, editedString);
}

console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'));
