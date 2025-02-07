let pal:string = "katak"
let reversStr:string = "" // untuk memasukkan dari looping
let txt:string = ""
for (let i = pal.length - 1; i >= 0; i--){
    txt = pal.charAt(i)
    console.log(txt);
    reversStr += pal.charAt(i) // untuk memasukkan data hasil looping
      
}
let txt2:string = ""
for (let i = 0; i <= pal.length-1; i++){
    txt2 = pal.charAt(i)
    console.log(txt2);
      
}

if (txt === txt2){
    console.log("palindrom");    
} else {
    console.log("not palindrom");   
}

// indexOf() untuk mencari nilai index dari huruf indexOf("d")
// lastIndexOf("d")
// pal.substring(0,pal.length)
// pal.replace()
// pal.trim() menghapus spasi awal dan akhir
// pal.charAt(pal.length - 1) mencari karakter dengan angka
// pal.charCodeAt(4) untuk mencari kode karakter
// pal.split() untuk membagi string menjadi array
// if(pal === ){

// }