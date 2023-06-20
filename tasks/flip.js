function flip(fn) {
    return function(...args){
        return fn(...args.reverse()) 
    };
}

console.log(flip(print)(4,5)) // returns "5 -> 4"

function print(a,b) {
  return a + " -> " + b;
}