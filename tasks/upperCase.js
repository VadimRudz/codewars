function upperCase(line){
    line = line.split(' ').map((name) => {
        return name[0].toUpperCase() + name.slice(1);
    });
    return line.join(", ").trim();
}

console.log(upperCase('albert boris victor alex michael'));