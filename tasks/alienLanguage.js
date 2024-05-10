function alienLanguage(str){
    return str.toUpperCase().replace(/\w(?=\W|$)/g,x=>x.toLowerCase()); 
}

console.log(alienLanguage('My name is John'));
console.log(alienLanguage('this is an example'));
console.log(alienLanguage('Hello World'));
console.log(alienLanguage('HELLO WORLD'));

// Test.assertSimilar(alienLanguage("My name is John") , "My NAMe Is JOHn");
// Test.assertSimilar(alienLanguage("this is an example") , "THIs Is An EXAMPLe");
// Test.assertSimilar(alienLanguage("Hello World") , "HELLo WORLd");
// Test.assertSimilar(alienLanguage("HELLO WORLD") , "HELLo WORLd");
