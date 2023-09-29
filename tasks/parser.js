function parse( data ) {
    let number = 0;

    let array = [];

    for (let char of data) {

        if(char === 'i'){
            number++;
        } else if(char === 'd'){
            number--;
        } else if(char === 's') {
            number = Math.pow(number, 2);
        } else if(char === 'o'){
            array.push(number);
        }
    }
    return array;
}

console.log(parse("iiisxxxdoso"));

// parse("iiisdoso") => [ 8, 64 ]
// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
