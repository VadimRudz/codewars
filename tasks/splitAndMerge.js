function splitAndMerge(string, separator) {
    const wordArray = string.split(" ");

    const returnArray = [];

    wordArray.forEach(element => {
        const letterArray = element.split("");
        returnArray.push(letterArray.join(separator));
    });

    return returnArray.join(" ");
}

console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge("My name is John","-"));
console.log(splitAndMerge("Hello World!","."));
console.log(splitAndMerge("Hello World!",","));

// assert.strictEqual(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
// assert.strictEqual(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
// assert.strictEqual(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
// assert.strictEqual(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");
