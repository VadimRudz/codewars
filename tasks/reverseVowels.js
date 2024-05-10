function reverseVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const positionMap = new Map();

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            positionMap.set(i, str[i]);
        }
    }

    const arrayKeys = Array.from(positionMap.keys());
    const arrayValues = Array.from(positionMap.values()).reverse();

    for (let i = 0; i < arrayKeys.length; i++) {
    // eslint-disable-next-line no-param-reassign
        str = str.substring(0, arrayKeys[i]) + arrayValues[i] + str.substring(arrayKeys[i] + 1);
    }

    return str;
}

reverseVowels('Reverse Vowels In A String');
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
