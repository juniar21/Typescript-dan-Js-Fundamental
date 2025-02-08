// interface untuk membuat tipe data dan juga bisa menggunakan type tetapi di sarankan menggunakan iterface

interface ICar{ // dipakai dan harus sesuai
    brand : string;
    model : string;
    price? : number; //tanda tanya digunakan agar optional artinya bisa diisi atau tidak
}

const car:ICar = {  // tipe data object
    brand: "BMW", // ini semua adalah property
    model: "M135i x Drive",
    price : 800000000,
};
console.log(car);


interface IPerson {
    name : string;
    age : number;
    hobby? : string;
    address?: {
        city:string;
        country:string;
    };
}

const person:IPerson = {
    name : "Frangky",
    age : 26
}

// add property
person.hobby = "Coding"
person.hobby = "Reading"
person.name = "David"

delete person.hobby
console.log(person);

//Accesing value

console.log(person.name);
console.log(person["age"]); // ini cara kedua dan aksesnya begini walupun tipe data apapun itu

//Optional chaining
console.log(person.address?.city); // jadi membuat menanyakan properti address itu ada atau gk sebelum ke city

console.log(Object.keys(person)); // untuk mengecek ada data apa saja di dalam objeck

// looping for object

interface IUser {
    name : string;
    email : string;
    age : number;
}

const user: IUser = {
    name: "frangky",
    email: "frengky @gmail.com",
    age:26
};

for (let key in user){
    console.log(key);//untuk mendapatkan key
    console.log(user[key as keyof typeof user]); // untuk mendapatkan value dan pakem untuk js maupun ts
}




