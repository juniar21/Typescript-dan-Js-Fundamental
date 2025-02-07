function lenArr(numI:number, ...nums:number[]) {
    let num:number[] = []
        for (let i = 0; i <= numI -1; i++){
            num.push(nums[i])       
    }  
    console.log(num);
}

console.log(lenArr(2,1,3,2,4,5,5,32,3))

// nums.length = numI
// return nums

