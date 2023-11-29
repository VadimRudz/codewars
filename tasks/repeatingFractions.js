function repeatingFractions(numerator, denominator) {
    return String(numerator / denominator).replace(/(?<=\..*)(\d)\1+/g, '($1)');
}

console.log(repeatingFractions(1, 1));
console.log(repeatingFractions(1, 2));
console.log(repeatingFractions(1, 3));
console.log(repeatingFractions(2, 888));
console.log(repeatingFractions(1554, 70));

// describe('Initial Tests', () => {
//   Test.assertEquals(repeatingFractions(1, 1), '1');
//   Test.assertEquals(repeatingFractions(1, 2), '0.5');
//   Test.assertEquals(repeatingFractions(1, 3), '0.(3)');
//   Test.assertEquals(repeatingFractions(2, 888), '0.(0)(2)5(2)5(2)5(2)5(2)5(2)');
//   Test.assertEquals(repeatingFractions(1554, 70), '22.2');
// });
