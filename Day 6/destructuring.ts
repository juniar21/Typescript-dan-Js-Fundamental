// berlaku untuk array dan object dan tidak bisa dilooping hanya manual

let a,b
[a,b] = [10,20]

console.log(a);
console.log(b);

const person = {
    name: "david",
    age:25
}

const {name, age} = person
console.log(name);
console.log(age);

//spread operator (copy all values)

const arr1:number[] = [1,2,3]
const arr2:number[] = [4,5,6]
const arr3:number[] = [...arr1,...arr2];

console.log(arr3);
const objeckOne = {
    name: "david",
    adress: "Bandung"

}
const objeckTwo = {
    email: "david@gmail.com"
}
const finalObject = {...objeckOne, ...objeckTwo}
console.log(finalObject);


// this
const user = {
    firstName: "Frangky",
    lastName:"Sihombing",
    great(){
        console.log(`Hello ${this.firstName}`);
        
    }
}
user.great()




