function oddity(n) {
    let count = 0;
    let sqrt = Math.sqrt(n);
    for (let i = 1; i <= sqrt; i++) {
        if (n % i === 0) {
            count += 2;
            if (i === n / i) {
                count -= 1;
            }
        }
    }
    return count % 2 === 0 ? "even" : "odd";
}

console.log(oddity(1));
