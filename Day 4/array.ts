
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

fruits.map((item) =>{
    console.log(item.length);
    
})

for (let fruit of fruits){
    console.log(fruit);
    
}

// nested function 

function getMessage(firstname: string){
    function sayHello(){
        return "Hello" + firstname;
    }
    function welcomeMessage(){
        return "Welcome to Purwadhika";
    }

    return sayHello() + " , " + welcomeMessage();
}

console.log(getMessage("David"));






