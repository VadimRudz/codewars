function saleHotdogs(n){  
    if( n < 5 ){
        return 100 * n;
    } else if(n >= 5 && n < 10) {
        return 95 * n;
    } else if(n >= 10){
        return 90 * n;
    } else {
        return undefined;
    }
}

console.log(saleHotdogs(1));
console.log(saleHotdogs(4));
console.log(saleHotdogs(5));
console.log(saleHotdogs(9));
console.log(saleHotdogs(10));
console.log(saleHotdogs(100));
  
// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90