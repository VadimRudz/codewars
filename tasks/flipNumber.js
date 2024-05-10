function flipNumber(n)
{
    let length = n.length;

    if (length === 1){
        return n;
    } else {

        let resultString = '';
        let reversedStr = n;

        do {
            reversedStr = reversedStr.split('').reverse().join('');
            resultString = resultString +  reversedStr[0];
            reversedStr = reversedStr.substring(1);
        } while ( reversedStr.length > 0);
        return resultString;
    }
}

console.log(flipNumber("0123456789"));
