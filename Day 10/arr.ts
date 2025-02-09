function arrSort(arr:number[]) {

    let middleIndex = Math.floor((0 + arr.length -1) / 2)
    for(let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++ ){
            if (arr[i] < arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            } 
        for(let k = arr.length-1; k > 1; k--){
            if (arr[k] > arr[j]){
                [arr[k], arr[j]] = [arr[j], arr[k]];
            }
        }   
    } 
} return arr
}
console.log(arrSort([1, 5, 3, 6,10,4]));
