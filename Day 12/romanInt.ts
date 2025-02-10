function romanInt(str:string) {
    const roman: any = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    let num:number = 0
    for (let i = 0; i <= str.length-1; i++){
        if(roman[str[i]] < roman[str[i+1]]){
            num -= roman[str[i]]
            
        } else {
            num += roman[str[i]]
        }
    }
    return num
}
console.log(romanInt("III"));
