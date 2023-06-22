var groupAnagrams = function(strs) {

    let resultArray = [];

    strs.forEach((word => {
        let newArray = new Array();
        let wordCopy = word;
        
        wordCopy = String(Array(...wordCopy).sort()).replaceAll(',','');
        for (let i = 0; i < strs.length; i++){
            if(wordCopy === String(Array(...strs[i]).sort()).replaceAll(',','')){
                // console.log(indexesArray.includes(i));
                newArray.push(strs[i]);
            }
        }
        resultArray.push(newArray);
    }))

    const uniqueArr = resultArray.filter((resultArray, index, self) => {
        return index === self.findIndex((a) => {
          return JSON.stringify(a) === JSON.stringify(resultArray);
        });
      });

    return uniqueArr
    
};

console.log(groupAnagrams(["a"]));


// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]