function mostMoney(students) {

    if(students.length === 1){
        return students[0].name;
    }

    let moneyArry = [];
    
    for (let student of students){
        let amounOfMoney = student.fives * 5 + student.tens * 10 + student.twenties * 20;
        moneyArry.push(amounOfMoney);
    }

    let maxAmount = 0;

    let index = 0;

    for (let i = 0; i < moneyArry.length; i++){

        if(moneyArry[i] >= maxAmount){
            maxAmount = moneyArry[i];
            index = i;
        }

    }

    const filteredArray = moneyArry.filter(value => value === maxAmount);

    if(filteredArray.length === moneyArry.length){
        return 'all';
    } else {
        return students[index].name;
    }

}

class Student {
    constructor(name, fives, tens, twenties) {
        this.name = name;
        this.fives = fives;
        this.tens = tens;
        this.twenties = twenties;
    }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

console.log(mostMoney([andy]));
 
