function rot13(str) {
    const stringArray = [...str];
    const UpperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    // eslint-disable-next-line array-callback-return
    stringArray.map((value, index) => {
        if (value.match(/^[A-Z]*$/)) {
            if (UpperCaseAlphabet.indexOf(value) < 13) {
                stringArray[index] = UpperCaseAlphabet.charAt(UpperCaseAlphabet.indexOf(value) + 13);
            }
            if (UpperCaseAlphabet.indexOf(value) >= 13) {
                stringArray[index] = UpperCaseAlphabet.charAt(UpperCaseAlphabet.indexOf(value) - 13);
            }
        }
        if (value.match(/^[a-z]*$/)) {
            if (LowerCaseAlphabet.indexOf(value) < 13) {
                stringArray[index] = LowerCaseAlphabet.charAt(LowerCaseAlphabet.indexOf(value) + 13);
            }
            if (LowerCaseAlphabet.indexOf(value) >= 13) {
                stringArray[index] = LowerCaseAlphabet.charAt(LowerCaseAlphabet.indexOf(value) - 13);
            }
        }
    });
    return stringArray.join('');
}

console.log(rot13('Guvf vf zl svefg EBG13 rkprepvfr!'));
