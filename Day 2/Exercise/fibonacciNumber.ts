let a:number = 0
let b:number = 1
let num2:number


 for (let i = 2; i <= 15; i++){
    console.log(a) //0 1 1 2 3 5
    num2 = a + b //1 3 5 8
    a = b // 1 1 2 3 5
    b = num2 // 1 2 3 5 8
 
 } 
console.log(`${b}`)

// Menggunakan Fungsi


 