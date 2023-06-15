function expandedForm(num) {
    const stringArray = num.toString().split('');
    let numLength = num.toString().length;

    let resultArray = stringArray.map(function(currentValue){
        if(currentValue === '0'){
            numLength--;
            return '';
        }
        currentValue = `${currentValue}${(0).toString().repeat(numLength-1)}`;
        numLength--;
        return  currentValue;
    })

    resultArray = resultArray.filter(n => n);

    let accamulate = "";
    for(let i = 0; i < resultArray.length; i++) {
        if(i === 0){
            accamulate = resultArray[0] + "";
        } else {
            accamulate = accamulate + ` + ${resultArray[i]}`
        }
    }

    return accamulate
  }

  expandedForm(70304);
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'