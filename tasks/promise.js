
let promise1 = new Promise((resolve, reject) => {
    if( 15 < 14 ){
        resolve('evrything is ok');
    } else {
        reject('something went wrong');
    }
});

promise1.then(console.log).catch(console.error);
