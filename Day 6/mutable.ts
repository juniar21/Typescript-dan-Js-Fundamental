// const name: string= "Andi" //immutable
// //name = "Budi"

// const arrNum: number[] = [1,2,3,4] // bisa di ganti walaupun const
// arrNum.push(4) //immutable

// console.log(arrNum);

//value types
let city: string = "Bandung"
let city2: string = city

city = "Jakarta" //city dua tetap bandung karena mengambil nilai yang sebelumnya

console.log(city);
console.log(city2);

// reference types
let arr: number[] = [1,2,3]
let arr2: number[] = arr
arr.push(4)

console.log(arr);
console.log(arr2);




