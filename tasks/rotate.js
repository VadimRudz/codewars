function rotate(str) {
    
    let accamulatedArray = [];

    for (let i = 0 ; i < str.length; i++){
        let firstLetter = str[0];
        str = (str.concat('',firstLetter)).slice(1);
        accamulatedArray.push(str);
    }

    console.log(accamulatedArray);
    
}

    rotate("Hello");