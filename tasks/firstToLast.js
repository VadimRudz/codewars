function firstToLast(str,c){
    return str.indexOf(c) >= 0 ?  str.lastIndexOf(c) - str.indexOf(c) : -1; 
}

console.log(firstToLast("ababc","a"));
console.log(firstToLast("ababc","c"));
console.log(firstToLast("ababc","d"));
