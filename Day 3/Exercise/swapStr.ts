let text:String = "The QuiCk BrOwN Fox"

let text2:String = ""

for(let i = 0; i <= text.length-1;i++){
    if (text.charAt(i) == text.charAt(i).toUpperCase() ){
        text2 += text.charAt(i).toLowerCase()
        
    } else if (text.charAt(i) == text.charAt(i).toLowerCase() ){
        text2 += text.charAt(i).toUpperCase()
    }
}
console.log(text2);
for(let i = 0; i <= text.length-1;i++){
console.log(text.charAt(i) == text.charAt(i).toUpperCase()?  text2 += text.charAt(i).toLowerCase() :  text2 += text.charAt(i).toUpperCase()) ;

}

