function race(v1, v2, g) {
    if(v1 >= v2) return null;
    else{
        let array = [];
        let time = g / (v2 - v1);
        time = time * 60 * 60;
        let hours = Math.floor((time / (60 * 60)));
        time = time - (hours * 60 * 60);
        let minutes = Math.floor((time / 60));
        time = time - (minutes * 60);
        let seconds = Math.floor(time);

        array.push(hours);
        array.push(minutes);
        array.push(seconds);

        return array;
    }
}

console.log(race(720, 850, 37));
