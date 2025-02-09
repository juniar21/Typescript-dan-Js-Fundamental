function findO(arr:number[]) {
    arr.sort((a,b) => a - b)
    let out:number[] = []
    let num:number[] = [] 
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == arr[i+1] || arr[i] == arr[i-1]){
            out.push(arr[i])
        } else {
            num.push(arr[i])
        }
    }
    return num[0]
}
console.log(findO([]));

function myfunc(arr:number[]) {
    const set = new Set(arr)
    let res = 0
    set.forEach((item) => {
        if(arr.filter((value) => value == item).length == 1){
            res = item
        }
    })
    return res;
    
}
console.log(myfunc([2,2,1]));



