function evenNum(eNum : number[]){
    let eveNum:number[] = []
 eNum.map((array) =>{
    if(array % 2 == 0){
       eveNum.push(array)
    }
    })
    console.log(eveNum);
    
    
        
}
evenNum([1,2,3,4,5,6,7,8,9,10])
