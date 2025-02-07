let text : string = "An apple a day keeps the doctor away"

let rep:string = text.replace("a","*");
let text2 :string = " "
console.log(rep); 

for (let i = 0; i <= text.length; i++){
    if (text.charAt(i) == "A" ){
    text2 +=  text.charAt(i).replace("A","*")
}   else if (text.charAt(i) == "a" ) {
    text2 +=  text.charAt(i).replace("a","*")
}   else {
    text2 += text.charAt(i)
}
}
console.log(text2);

