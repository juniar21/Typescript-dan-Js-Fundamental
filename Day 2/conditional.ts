// IF, ELSE IF, DAN ELSE
let age:number = 18

if (age >= 17) {
    console.log("You can now create an ID card")
} else {
    console.log("You are not old enough to create an ID Card")
} 

let grade:string = "D"

if (grade === "A"){
    console.log("Excellent Result!")
} else if (grade === "B"){
    console.log("Great Result!")
} else if (grade === "C"){
    console.log("Average Result!")
} else {
    console.log("Invalid Grade")
}

//SWITCH CASE
let now:Date = new Date("2025-12-12") //format tanggal harus string
let day:number = now.getDay()//0,1,2,3,4,5,6 -> setiap data dimulai dari nol
 switch (day) { // hanya menggunakan == tidak seperti if else bisa menggunakan ===
    case 0:
        console.log("Minggu")
        break;
    case 1:
        console.log("Senin")
        break;
    case 2:
        console.log("Selasa")
        break;
    case 3:
        console.log("Rabu")
        break;
    case 4:
        console.log("Kamis")
        break;
    case 5:
        console.log("Jumat")
        break;
    case 6:
        console.log("Sabtu")
        break;
    default:
        break;
 }

 //LOGICAL OPERATOR

 let x: number = 6
 let y: number = 3

 console.log(x<10 && y>1) //bisa lebih dari satu perbandingan baik && dan juga ||
 console.log(x==6 || y==5)
 console.log(!(x==y))
 console.log(!!(x==y)) // bisa lebih banyak tanda seru lagi

 let ganteng:boolean = true
 let kaya: boolean = false

 console.log(ganteng && kaya) // false
 console.log(ganteng || kaya) // true

 // TERNARY OPERATOR
 const str:string = "Typescript"

 if(str== "Typescript"){
    console.log("Typescript")
 } else {
    console.log("Not typescript")
 }

 console.log(str == "Typescript" ? "Typescript" : "Not typescript")
// cara bacanya adalah setelah tanda tanya hasil dari kebenaran dan yang salah isinya setelah titik 

//SHORT CIRCUITING
// && dan ||

// 1. ||
let value : string = "" //false
let name : string = value || "Budi" //memilih hal yang true disini jawabnnya Budi karena variabel value itu nilainya false

console.log(name)

//2. &&

let value2 : string = "" //false
let name2 : string = value2 && "Budi" //memilih hal yang false disini jawabnnya kosong karena variabel value itu nilainya true

console.log(name2)

