// class Enemy {
//   constructor(name, phrase, power, speed){
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//     this.speed = speed;
//   } 
// }

// class Alien extends Enemy {
//   #birthYear // Сначала нужно объявить закрытое свойство, используя в начале его имени символ '#'

//   constructor (name, phrase, power, speed, birthYear) {
//       super(name, phrase, power, speed)
//       this.species = "alien"
//       this.#birthYear = birthYear // Затем внутри функции конструктора мы присваиваем его значение
//   }
//   fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
//   howOld = () => console.log(`I was born in ${this.#birthYear}`) // и используем его в соответствующем методе
// }
  
// // Привычным образом выполняем инстанцирование
// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50, 10000)
// alien1.fly();
// alien1.howOld();

// let testObject = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';

// for (let value of testObject){ //It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
//   console.log(value);
// }

let someArray = ['AA', 'BB', 'CC'];
console.table(someArray);