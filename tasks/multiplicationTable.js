let multiplicationTable = function(size) {
    let globalArray = [];
    let valueMagnifier = 0;
    for (let i = 0; i < size; i++) {
        let insideArray = [];
        valueMagnifier = i + 1;
        for (let j = 0; j < size; j++) {
            if(j === 0){
                insideArray.push(i + 1);
            } else{
                insideArray.push(insideArray[j-1] + valueMagnifier);
            }  
        }
        globalArray.push(insideArray);
    }
    return globalArray;
  }

  console.log(multiplicationTable(3));