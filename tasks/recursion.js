function sumTo(n) { 
    if(n === 1) return n;
    else {
        return n + sumTo(n-1);
    }
}

function factorial(n) { 
    if(n === 1) return n;
    else {
        return n * factorial(n-1);
    }
}

let value = 1;

function fib(n) {
    console.log(n);
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}


console.log(fib(7));
