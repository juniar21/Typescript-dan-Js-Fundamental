function addAno(isian:number[],meng:number) {
    let num:number[] = isian.filter((item) => item !=  meng) // bisa menggunakan function includes()
    return num.concat(meng) // bisa juga menggunakan indexOf
  
  }



console.log(addAno([2,3,4,5],5));



