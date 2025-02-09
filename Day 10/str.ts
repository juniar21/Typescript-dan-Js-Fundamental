//hilangin alpabet
function cekLowUp(str:string) {
    let numLo:string = ""
    let numUp:string = ""
    let arr:number[] = []
    
    for (let i = 0; i <= str.length-1; i++){
        if (str[i] == str[i].toLowerCase()){
            numLo += str[i]

        }else if(str[i] == str[i].toUpperCase()){
            numUp += str[i]  
        }
    } arr.push(numLo.length) 
      arr.push(numUp.length)

      return arr 
}
console.log(cekLowUp("Hello World"));

function myFunc(str:string) {
    const letter = str.replace(/[^a-z]/gi, "") // menghapus simbol dan angka
    const lower = letter.replace(/[A-Z]/g, "")

    return [lower.length, letter.length - lower.length]
}
console.log(myFunc("Hello123!!!"));

let makanan={
    makan : "pecel",
    asal : "madiun"

}
console.log(makanan.makan);

const arr = [1,2,3,4,5]


//hoisting




