function concate(arrs:string[]) {
    let isian:string = ''
    for (let i = 0; i <= arrs.length; i++){
        if (i == arrs.length-1){
            isian += `and ${arrs[i]} `
            break 
            
        }else {  
            isian += `${arrs[i]}, `
           
        }
       
    }
    console.log(isian);
    
}
concate(['satu','dua','tiga'])

/* function concat (arr:string[]){
    const last = arr.pop(); supaya last mengambil materi yang di buat leh fungsi pop
    return arr.join() + `, and ${last}`;

}


*/