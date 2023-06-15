function test(){
    console.log('Hey there');
}

test.myVariable = 'Not here';

const newVariable = test.myVariable;

console.log(newVariable);

console.log(test.myVariable);
