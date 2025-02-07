function triangle1(tri:number){
    let number = 1
    for (let i = 1; i <= tri; i++){
        let row = ''
        for(let j = 1; j <= i; j++){ // jadi penjelasan looping di samping adalah bahwa j 
            row += (number < 10 ? '0' : '') + number +  ' '; // akan dilooping sebanyak pembatasnya yaitu di j<=i
            number++
        }
        console.log(row);
        
    }
}

console.log(triangle1(4));

// cara dua
function triangleCar2(tri:number){
    let k = 1
    for (let i = 1; i <= tri; i++){
        let row = ''
        for(let j = 1; j <= i; j++){ // jadi penjelasan looping di samping adalah bahwa j 
           k++
           if(k < 10){
            row += `0${k}`
           } else {
            row += `${k}`
           }
        }console.log(row);
        
    }
}
;console.log(triangleCar2(5));

