var divide = function (dividend, divisor) {

    if ((dividend / divisor) < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    } else if ((dividend / divisor) >= Math.pow(2, 31)) {
        console.log('i am here 1');
        return Math.pow(2, 31) -1;
    } else {
        console.log('i am here 2');
        return dividend/divisor> 0 ? Math.floor(dividend/divisor) : Math.ceil(dividend/divisor);
    }

};

console.log(divide(-2147483648, -1));
