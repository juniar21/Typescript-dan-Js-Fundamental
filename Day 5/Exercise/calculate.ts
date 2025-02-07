function calculate(arr1:number[], arr2:number[]) {
    let calArr3:number[] = []
    let tmb:number = 0 

    for (let i = 0; i <= arr1.length-1;i++){
        
            tmb = arr1[i] + arr2[i]
            calArr3.push(tmb)
            
    }
    console.log(calArr3);  
    
}
console.log(calculate([1,2,3],[2,3,4]));
