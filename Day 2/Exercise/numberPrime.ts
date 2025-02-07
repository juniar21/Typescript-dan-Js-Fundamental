let num:number = 2

if (num % 2 == 0 && num % num == 0){
    console.log (`${num} -> ${num} is prime number`)
}else {
    console.log(`${num} -> ${num} is not prime number`)
}

// dengan looping

let n: number = 4;

let divider : number = 0; // 
for (let i = 1; i <= n; i++){
    console.log(n)
    if (n % i == 0) divider++
}

console.log(divider == 2 ? "Prime number" : "Not a Prim number");