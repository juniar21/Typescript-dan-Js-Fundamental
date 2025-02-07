// LOOPING FOR
for (let i = 0; i < 10; i++){ //mau naik ++ dan juga melihat pembatasnya
    if (i == 3 || i == 6) {
        continue;}
    console.log(i)
}
for (let i = 1; i <= 3; i+=2){ //bisa di custom
    console.log(i)
}
// for (let i = 9; i >= 0; i--){ //mau turun -- dan juga melihat pembatasnya
//     console.log(i)
// }
for (let i = 9; i < -1; i--){ //ini tidak akan dijalan karena kondisi sudah lebih kecil dariv seharusnya
    console.log(i)
}

//WHILE LOOP

let i:number = 0

while (true) {
    console.log(i)
    i++;
    if(i == 20){
        break // untuk berhenti paksa dan juga hanya cocok untuk while
    }
}

// DO WHILE LOOP

let j : number = 0

do {
    console.log(j);
    j++
} while (j<10);

//CONTOH KASUS

let str:string = "Purwadhika" //

for(let i = 9; i >= 0; i--){
    console.log(str.charAt(i));
}

for(let i = str.length-1; i >= 0; i--){ // -1 agar tidak ada spasi karena lenght menghitung mulai dari 10
    console.log(str.charAt(i));
}



