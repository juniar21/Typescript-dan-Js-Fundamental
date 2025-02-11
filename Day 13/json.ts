const person = { //perbedaan json dan objek ada pada keynya yang mana key json memilik tanda kutip sehingga menjadi string
    name : "Andi",
    age : 20
}
const person2 = {
    name : "Andi",
    age : 20
}

console.log(person == person2); // objeck tidak bisa dibandingin karna selalu berbeda
console.log(JSON.stringify(person)); // stringify mengubah objek js ke json
console.log(JSON.stringify(person2));
console.log(JSON.stringify(person) == JSON.stringify(person)); // sudah bisa di bandingin karena sudah json sehingga data objek apapun tidak bisa di bandingin




