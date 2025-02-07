
let arr:string[] = ["a","b","c","d","e"] // cara pertama pake kurung siku
let arr2:string[] = new Array("a","b","c","d","e") //cara kedua pake kurung kurawal

console.log(arr); 
console.log(arr2); 

console.log(arr[1]);
// ada beberapa function yang tidak harus dibuatkan variabel karena akan beda hasilnya
arr.push("f") // untuk menambah data dari belakang
let sip = arr.join(";") // untuk membuat array menjadi terhubung
console.log(arr); 

arr.pop() // untuk menghapus value paling akhir
console.log(sip);
console.log(arr); 

//menambah value baru di depan
arr.unshift("z")
console.log(arr);

// untuk menghapus value pertama
arr.shift();
console.log(arr); 

// untuk menghitung panjang value
let len = arr.length;
console.log(len);

let arr3:string[] = ["a","b","c","d","e"]
// untuk menghapus value mulai dari mana dan berapa
arr3.splice(1,2)
arr3.splice(1,0,"g") // bisa juga untuk menambah value pada nomor berapa 
console.log(arr3);

// mengurutkan
arr3.sort()
console.log(arr3);

// untuk membalikkan 
arr3.reverse()
console.log(arr3);


// method yang perlu di simpan pada variable

const numArr: number[] = [1,2,3,4,5]

const evenNum:number[] = numArr.filter((item) => item % 2 == 0) //penamaan item itu terserah bisa berubah yang mana nantinya akan menjadi perbandingan
console.log(evenNum);
const oddNum:number[] = numArr.filter((item) => item % 2 != 0)
console.log(oddNum);
const lebihTigaNum:number[] = numArr.filter((item) => item >= 3)
console.log(lebihTigaNum);

// looping khusus array
// 1. for each
const fruits:string[] = ["apple","orange","plum","banana"];
fruits.forEach((item) => {
    console.log(`${item} = ${item.length}`);    // bisa begini atau bisa di atur atur lagi
})
const agka:number[] = [1,2,3,4,5,6];
agka.map((item) =>{
    console.log(item);
    
})

for (let fruit of fruits){
    console.log(fruit);
    
}

// nested function 

function getMessage(firstname: string){
    function sayHello(){
        return "Hello " + firstname;
    }
    function welcomeMessage(){
        return "Welcome to Purwadhika";
    }

    return sayHello() + " , " + welcomeMessage();
}

console.log(getMessage("David"));

// closure Function

function greeting(name: string){
    const defaultMessage: string = "Hello";

    return function (){
        return defaultMessage + name
    }
}
const greatingDavid = greeting("david");
console.log(greatingDavid());


//currying function
function multiplier(factor:number){
    return function(number:number){
        return factor * number
    }
}
const mul4 =multiplier(4)

console.log(mul4(3));

//recursive function
function countDown(fromNumber:number){
    console.log(fromNumber);
    
    let nextNumber: number = fromNumber - 1

    if (nextNumber > 0){
        countDown(nextNumber);
    }
}
countDown(10)

// Arrow Function 

const sum3 = (num1 : number, num2 : number) => num1 + num2

console.log(sum3(2,2));

// Predefined function
console.log(isFinite(0/1));

//radix 
const angka = "10"
console.log(parseInt(angka,8));






