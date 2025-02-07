function secSmall(isian:number[]) {
    let msk:number = 0 
    isian.sort((a,b) => a - b)
    for (let i = 0; i<= isian.length-1;i++){
        if (isian[i] = isian[1]){
            msk += isian[i]
            break
        } else {
            let msk2:number = 0
            msk2 += isian[i]
        }
        
    }
    console.log(msk);

}
console.log(secSmall([1,53,6,3,53,5,2]));
