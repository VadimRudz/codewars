function padIt(str,n){
    if(n > 0){
        while(n > 0) {
            str = '*' + str;
            n--;
            if(n > 0){
                str = str + '*';
                n--;
            }
        }
        return str;
    } else {
        return str;
    }
}

console.log(padIt("a",1));
console.log(padIt("a",2));
console.log(padIt("a",3));
console.log(padIt("a",4));
console.log(padIt("a",5));

// Test.assertSimilar(padIt("a",1),"*a");
// Test.assertSimilar(padIt("a",2),"*a*");
// Test.assertSimilar(padIt("a",3),"**a*");
// Test.assertSimilar(padIt("a",4),"**a**");
// Test.assertSimilar(padIt("a",5),"***a**");
