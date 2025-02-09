function phone(s:string) {

    let num:string = ""
    for (let i = s.length-1; i >= 0; i--){
            num = s.charAt(i) + num
        if((s.length - i) % 4 == 0 && (s.length-i) <= 4){
            num = "-" + num
        }else if((s.length - i) % 7 == 0){
            num = ")-" + num 
        }else if ((s.length - i) % 10 == 0){
            num = "(" + num
        }  
 }
    return num
    
}
console.log(phone("1234567890"));

function phone3(str:string) {
    let res = "(xxx)-xxx-xxxx"
    str.split("").forEach((item) =>{
        res = res.replace("x",item)
        console.log(res);
        
    })
    return res
}
console.log(phone3("1234567890"));

