function digPow(n, p){
    const arr = [].map.call('' + n, (number) => Math.pow(number, p++));
    const result = arr.reduce((sum, current) => sum + current, 0);
    if(result % n === 0){
        return result/n;
    } else {
        return -1;     
    }
}

console.log(digPow(46288, 3));
