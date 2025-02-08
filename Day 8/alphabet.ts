
function alp(str:string) {
    let alpabhet = " abcdefghijklmnopqrstuvwxyz"
    let alp = [] //ulang pakai cara
    
    for (let i = 0; i < str.length; i++){
        let item = alpabhet.indexOf(str[i])
        alp.push(item)
    

    }
    
    return alp    
    
}
console.log(alp("abc"))


const a = "abc"
console.log(a[2])

