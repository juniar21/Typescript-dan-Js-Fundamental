function lowHighAve(loHiAv:number[]) {
    let check:number = 0
  
    loHiAv.sort((a,b) => a - b) // kalo mau descending menjad b -a
    let low:number = loHiAv[0] // bisa juga menggunakan math yaitu math.min (...arr) atau math.max(...arr)
    let high: number = loHiAv[loHiAv.length-1]
    for (let i = 0; i < loHiAv.length; i++){
        check += loHiAv[i] //bisa juga menggunakan reduce untuk average = average.reduce((a,b) => a + b) / arr.length
        
    }
    let pjg:number = loHiAv.length
    let average:number = check / pjg
    
    return `{lowest : ${low}, highest: ${high}, average: ${average} }`
    
    
    
}
console.log(lowHighAve([1,3,2,4,23]));
 
