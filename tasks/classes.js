class Animal {
    constructor(x) {
        this.surname = x;
        this.name = `${this.surname}!!!!`;
    }
}

class Panda extends Animal {
    static x = "xexe";
}

class Tiger extends Animal {
    static x = "zeze";
}

let kungFuPanda = new Panda(Panda.x);

let tigranKeosoian = new Panda(Tiger.x);

console.log(kungFuPanda.name);
// console.log(kungFuPanda.surname);

console.log(tigranKeosoian.name);
// console.log(tigranKeosoian.surname);
