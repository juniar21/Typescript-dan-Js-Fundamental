let num1:number = 18
let num2:number = 27
let num3:number = 42

if (num1 > num2 && num1 > num3 && num2 > num3){
    console.log(`${num1} ${num2} ${num3}`);   
} else if ((num2 > num1 && num2 > num3 && num1 > num3)){
    console.log(`${num2} ${num1} ${num3}`);  
} else {
    console.log(`${num3} ${num2} ${num1}`); 
}

if (num1 > num2){
    let num = num1
    num1 = num2;
    num2 = num
}else if (num2 > num3){
    let num = num2
    num2 = num3;
    num3 = num
} else if  (num1 > num2){
    let num = num1
    num1 = num2;
    num2 = num
}