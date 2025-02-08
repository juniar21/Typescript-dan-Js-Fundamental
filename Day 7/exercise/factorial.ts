function factorial(num1:number) {
    let num2:number = 1
    for (let i = 1; i <= num1; i++) {
        num2 *= i;
    }
    return num2;
}

console.log(factorial(5)); // 120
