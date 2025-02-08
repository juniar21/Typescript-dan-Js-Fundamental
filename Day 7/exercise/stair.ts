function stairs(stair:number) {
    for (let i = 1; i <= stair; i++){
         let sta:string = " "
         for ( let j = stair; j >= i; j-- ){
            sta += "*"
         }
         console.log(sta);  
    }      
}
console.log(stairs(5));

