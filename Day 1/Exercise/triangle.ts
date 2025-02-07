//Soal nomor 4
/* Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35 */

const anglesA:number = 80
const anglesB:number = 65

let anglesC:number = 180 - (anglesA+anglesB)

console.log(anglesC)