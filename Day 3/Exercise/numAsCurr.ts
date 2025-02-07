let rupiah = (num:number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(num);
  }


console.log (rupiah(1000000)) // "Rp 20.000,00"

let n: number = 1234567
let nStr:string = n.toString()
let res: string = ""

for (let i = nStr.length-1; i >= 0; i--){
    res = nStr.charAt(i) + res;
    if ((nStr.length - i) % 3 == 0){
        res = "." + res
    }
}
console.log(`Rp.${res},00`);






    

