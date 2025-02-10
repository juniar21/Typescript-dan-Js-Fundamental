function romanInt(str:string) {
    const roman: {[str:string] : number} = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    let num:number = 0

    for(let i = 0; i < str.length; i++){
        const curr = roman[str.charAt(i)]
        const next = roman[str.charAt(i + 1)]

        curr < next ? (num -= curr) : (num += curr)

    }
 return num

}
console.log(romanInt("IV"));
