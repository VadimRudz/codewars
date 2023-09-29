function findHack(arr) {
    let points = { 'A': 30, 'B': 20, 'C': 10, 'D': 5 };
    let score1 = (arr) => arr.reduce((s, v) => s += points[v] || 0, 0);
    let score2 = (arr) => score1(arr) + (arr.filter(v => /[AB]/.test(v)).length > 4 ? 20 : 0);
    return arr.filter(v => (v[1] != score1(v[2]) && v[1] != score2(v[2])) || v[1] > 200).map(v => v[0]);
}

const array = [
    ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
    ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
    ["name3", 200, ["B", "A", "A", "C"]] // name3 point is 200 but real point is 90 => hacked
];

console.log(findHack(array));
