const canConstruct = function(ransomNote, magazine) {

    let isConditionalTrue = true;

    for (let char of ransomNote) {

        let elementIndex = magazine.indexOf(char);

        if(elementIndex < 0) {
            isConditionalTrue = false; 
        } else {
            magazine = magazine.substring(0, elementIndex) + magazine.substring(elementIndex + 1);
        }
    }

    return isConditionalTrue;
    
};

console.log(canConstruct('aa' , 'abaa'));
