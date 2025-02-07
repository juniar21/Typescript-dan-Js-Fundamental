function split(txt:string){
   return  txt.split(" ")
        
}
console.log(split("Hello world"));


function segitigaTengah(trin:number) {
   let segiTeng:number = 5
   for (let i = 0 ; i <= trin; i++ ){
      let msk:string = ""
      
         for (let j = trin;j >= i; j--){
            msk += " "

      }  
      for (let k = 1; k <= i; k++){
         msk += "* "
      }

      console.log(msk);
   }
   
}
segitigaTengah(5)