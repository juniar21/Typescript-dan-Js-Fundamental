// const person1 = {
//     name: "david",
//     age:25
// }
// const person2 = {
//     name: "david",
//     age:25
// }
// const person3 = {
//     name: "david",
//     age:25
// }
// const person4 = {
//     name: "david",
//     age:25
// }
// const person5 = {
//     name: "david",
//     age:25
// }

class Person {
    name: string
    #age: number // properti private
    static phi:number = 3.14

    constructor(nama: string, umur:number){ //untuk menangkap argumen ke dalam class sebagai parameter 
        this.name = nama
        this.#age = umur
    }
    greet(){
        console.log(`Hello ${this.name}`);
        
    }
}
// date adalah satu class karena saat memanggilnya menggunakan new Date
const person1 = new Person("Andi", 20);
const person2 = new Person("Budi", 21);
const person3 = new Person("Caca", 22);
const person4 = new Person("Dodi", 23);

console.log(person1);
console.log(person2.name);
person1.greet()

// ini merupakan static method atau static properti
console.log(Person.phi);
console.log(Date.now());
console.log(Math.PI);






