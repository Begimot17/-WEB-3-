class Person {
    constructor(name, age, heigth) {
        this.name = name;
        this.age = age;
        this.heigth = heigth;
    }
}

console.log('Hello World');
let person = new Person('Nikita', 19, 190);
let {
    name
} = person;
console.log(name);
/*class Array {
    static getLastValue(array) {
        return array[array.length-1];
    }
    static getValue(array, value) {
        array.push(value);
        return array;
    }
    static getArray(array) {
        return array;
    }
}*/
/*class Animal {
}

class Bird extends Animal {

}
class Flamingo extends Bird {

}*/
/*let arr = [1, 2, 3, 4];
console.log(arr);
console.log(Array.getValue(arr, 5));
console.log(Array.getLastValue(arr));
console.log(Array.getArray(arr));*/
