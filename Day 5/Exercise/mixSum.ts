function mixSum(mixArray: (string | number | boolean)[]) {
    let numbs:any = 0
    for ( let i = 0; i <= mixArray.length; i++){
        if (typeof(mixArray[i]) == typeof(numbs)){ // bisa juga menggunakan filter => typeof item == "number"
            numbs += mixArray[i] // menambahkan array menggunakan reduce((a,b) => a + b)
        } else {
            break
        }
    }
    console.log(numbs);
    
}
console.log(mixSum([1,2,4,"sis","wdw",NaN]));
