function dashatize(num) {
    if((isNaN(num)) || (typeof num !== 'number')){
        return "NaN";
    } else {
        let stringNumber = num + "";

        if(num < 0 ){
            stringNumber = stringNumber.substring(1);
        }
        const resultString = Array.prototype.reduce.call(stringNumber, (acc, char) => { 
            if(Number(char) % 2 !== 0) {
                if(acc[acc.length -1]  === '-'){
                    return acc + `${char}-`
                } else {
                    return acc + `-${char}-`
                }
            } else{
                return acc + char;
            }
        }, '');

        const stringLength = resultString.length;

        if (resultString[0] === '-' && resultString[stringLength - 1] === '-') {
            return resultString.substring(1, resultString.length - 1);
        } else if (resultString[0] === '-') {
            return resultString.substring(1);
        } else if (resultString[stringLength - 1] === '-') {
            return resultString.substring(0, resultString.length - 1)
        }
        
        return resultString;
    }
}

console.log(dashatize(NaN));

