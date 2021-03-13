/*
    Classes
*/

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        console.log(`Username ${this.name} & age ${this.age}`);
    }
}

const author = new User("Duy Hiếu", 23);

console.log(author);