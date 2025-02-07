function sum(num:number, num2:number){
    return num + num2
     
}
console.log(sum(10,15));

function OddEven(num:number){
    return num % 2 == 0 ? "Even" : "Odd"
}
console.log(OddEven(20));

// cara membuat function dengan cara yang lain yaitu kata function ditukar dengan nama function tersebut

const sum2 = function (num1: number, num2:number){
    return num1 + num2;
};

console.log(sum(20,12));

// calling function

const callSum:number = sum2(3,2)
console.log(callSum);

// var dan let

var a: number = 10;
let b: number = 11;

{
    var a:number = 12
    let b: number = 13
}

console.log(a, b); // hasilnya adalah (12, 11)
// kenapa hasilnya begitu var bersifat global walaupun masih scope({}) masih 
//bisa terbaca tidak seperti let kecuali function semua tidak bisa di ambil

//function scope tidak ada yang bisa mengakses variable yang ada di dalam function 


// Default Parameter -> bisa tanpa diisi bisa juga diisi atau ditimpa
function multiply(a:number, b:number = 1){
    return a * b;
}
console.log(multiply(20));

// Rest Parameter 
function myFunc(a:String, b:String, ...other:string[]){
    console.log(a);
    console.log(b);
    console.log(other); // tipe datanya harus array dan tidak wajib diisi
    
    
}
myFunc("andi","budi","caca","dono")






