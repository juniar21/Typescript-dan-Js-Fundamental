function calculator(a: number, b:number, callback: (num:number) => void) {
    callback(a+b)
}

function displayer(num:number):void{ //void adalah tidak ngereturn apa2
    console.log(num);  
}

calculator(10,5,displayer)