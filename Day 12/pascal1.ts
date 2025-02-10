function numRows(num:number) {
    const outerArray: number[][] = [];

    for(let i = 0; i < num; i++){
        outerArray[i] = []
        for(let j = 0; j <= i; j++){
            if (j === 0 || j === i){
                outerArray[i][j] = 1
            } else {
                outerArray[i][j] = outerArray[i - 1][j - 1] + outerArray[i - 1][j];
            }
        }
    }
    return outerArray
}
console.log(numRows(3));
