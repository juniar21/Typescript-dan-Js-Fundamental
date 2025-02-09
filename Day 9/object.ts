// dalam pembuatan objek buat dulu interface agar kebayang
const s:number = 1

interface IUser {
    name :string
    age : number
    hobby? : string // optional
    address?: {
        city:string
        country:string
    }
}

const user1:IUser = {
    name : "Andi",
    age : 20
}
 

console.log(user1.name);
console.log(user1["name"]);

console.log(user1.age);

//optional chaining
console.log(user1.hobby); // hasilnya akan undifined

class User {  //dibuat untuk ketika membuat data objeck berulang
    name : string
    age : number

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
}

const user2 = new User("Andi", 33)
const user3 = new User("Latta", 23)

let i:number = 3

console.log(i--);




