function fizzBuzz(n:number){
    let fibu:string = " "
    for (let i = 1; i <= n; i++){
        if (i % 3 == 0){
            fibu += "fizz" + "  "

        }else if (i % 5 == 0){
            fibu += "buzz" + "  "
        } else {
        fibu += i + "  " 
        } 
}
    return `${fibu} ` 
}
console.log(fizzBuzz(6));
 