//pake deret fibonacci //harus disimpan di dalam array
function climbFibo(num:number) {
    
    let num2:number[] = [1,1]
    for (let i = 0; i <= num; i++){
        num2.push(num2[i] + num2[i+1])
    }

    return num2[num]

}
console.log(climbFibo(8));
