function checkDup(arr:number[]) {
    for (let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]) return true // ini mengecek satu satu i = 0 akan dibandingkan dengan panjang dari j
        }
    }
    return false
    
}
console.log(checkDup([1,2,3,1]));

