function whatCentury(year)
{ 

    let century;

    if(Number(year) % 1000 === 0){
        return returnCentury(year);
    } else {
        return returnCentury(String(Number(year) + 100));
    }

    function returnCentury(someYear){

        let innerCentury;

        if(someYear[1] === '1' && someYear[0] !== '1'){
            innerCentury = someYear.slice(0,2).concat('st');
        } else if(someYear[1] === '2'  && someYear[0] !== '1'){
            innerCentury = someYear.slice(0,2).concat('nd');
        } else if(someYear[1] === '3'  && someYear[0] !== '1'){
            innerCentury = someYear.slice(0,2).concat('rd');
        }else {
            innerCentury = someYear.slice(0,2).concat('th');
        }
        return innerCentury;
    }
  
}

console.log(whatCentury('2259'));


// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"
