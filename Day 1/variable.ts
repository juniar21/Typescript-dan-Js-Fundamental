let word:string = "Hello World"

let num:number = 2

let isFalse:Boolean = false

// perbedaan dengan javascript untuk membuat variable harus diberikan tipe datanya juga
// untuk menjalankan file TS harus menambah file tsconfig.json


let upperword: string = word.toUpperCase() //memodifikasi string menjadi hurus besar semua
let lowerworld: string = word.toLowerCase() // hello world
let replaceword: string = word.replace("e", "a").toLowerCase().concat(upperword) //kombinasikan

console.log(upperword)
console.log(lowerworld)
console.log(replaceword)

console.log(word.slice(0,11)) //index yang mau di ambil di hitung dari depan
console.log(word.length)
console.log(word.charAt(10))
console.log(word.concat("!"))
console.log(word.search("H"))
console.log(word.replace("o","a"))
console.log(word.replace(/o/g,"a")) // untuk replace semua dengan menggunakan regex

const message: string = `Hello Purwadhika ${word}`
console.log(message)

console.log(typeof num.toString())
console.log(num.toExponential(2))
console.log(num.toPrecision(3))

//nan adalah singkatan dari non a number
console.log(Number("12asd"))

console.log(Boolean(100)) //selain angka nol adalah True
console.log(Boolean(0))

console.log(Boolean(""))//kalo gk ada isinya false, meskipun spasi saja akan menjadi true artinya ada isinya
