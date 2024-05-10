// eslint-disable-next-line no-unused-vars
function solve(s) {
    const splitedStringArray = s.replace(/[a-z]/g, 'а')
        .replace(/ ([a])\1+/g, '$1')
        .match(/\d+/g);
    const sortedArray = splitedStringArray.sort( (a, b) => b - a);
    return Number(sortedArray[0]);
}
