function singleD(arr:number[]) {
    let isian:number[] = []
    isian.sort((a,b) => a - b)
    for (let i = 0; i <= arr.length;i++){
        if(arr.length-1 > 0){
        for (let j = 0; j < i;j++){
             isian.push(arr[i] - arr[j])      
        }
    }
        else {
            isian.push(0) 
        }
    }
    isian.sort((a,b) => b-a)
    if (isian[0] <= 0){
        return 0
    } else {
        return isian[0]
    }
}
console.log(singleD( [7,1,5,3,6,4]));
console.log(singleD( [7,6,4,3,1]));
console.log(singleD( [1]));
