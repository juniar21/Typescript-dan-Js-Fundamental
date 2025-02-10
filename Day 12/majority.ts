function myFunc(arr:number[]) {
    const set1 = new Set(arr)
    let res = null
    set1.forEach((item) =>{
        if(arr.filter((value) => value === item).length > arr.length / 3) {
            res = item
        }
    })
    return res
}
console.log(myFunc([2,1,2]));
