function majorEl(arr:number[]) {
    arr.sort((a,b) => a - b)
    let ste:number = Math.floor(arr.length / 2)
    let isian:number[] = []
    
    
     for (let i = 0; i <= arr.length; i++){
        isian.push(arr[i])
        if (isian.length > ste){
            return arr[i]
        } 
    }

}
console.log(majorEl([1,1,3,1,2,2,1,1,3,3,3,3,3,3]));
