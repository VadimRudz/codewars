const middleNode = function(head) {

    let arrayMiddle = (head.length % 2 === 0) ? head.length/2 : Math.floor(head.length/2) + 1;

    let reversedArray = head.reverse();

    reversedArray.length = arrayMiddle;

    return reversedArray.reverse();
};

console.log(middleNode([1,2,3,4,5,6,7]));
