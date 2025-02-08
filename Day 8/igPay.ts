function igPay(str:string) {
    let str2:string = " "
    let str3:string = " "

    for ( let i = 0; i <= str.length; i++){
        if (i == 0){
            str2 += str.charAt(i) + "ay "
        }else if (str.charAt(i - 1) == " "){
            str2 += str.charAt(i) + "ay "
        }else {
            str3 += str.charAt(i)
        }
    }
    return str2
}
console.log(igPay("Pig latin is cool !"));

//cara kedua 
function myFunc(str:string) {
    return str.split(" ").map((item) =>{ 
      if (item.match(/[a-z]/i)){
        return item.slice(1) + item[0] + "ay"
    } else {
        return item
    }
    }).join(" ")
}
console.log(myFunc("Pig latin is cool !"));