function vowel(str:string) {
    let str2:string = " "

    for ( let i = 0; i <= str.length; i++){
        if(str.charAt(i) == "a" || str.charAt(i) == "i"|| str.charAt(i) == "u" || str.charAt(i) == "e"|| str.charAt(i)=="o"){
            str2 +=str.charAt(i)
        }
    } 
    return str2.length-1
}
console.log(vowel("Bandung"));

// function vowel2(str:string) {
//     const arr:string[] = ['a','i','u','e','o']
//     const str2:string[] = str.split("")
//     let str3:string[] = [] 
//     str.toLocaleLowerCase()

//     for (let i = 0; i <= str2.length; i++){
//         for (let j = 0; j <= arr.length-1; i++){
//              if (str2[i] == arr[j]){
//                 str3.push(arr[j])
//         } 
//     }
//     return str3
    
// }}
// console.log(vowel2("bandung"));

const str2:string = "dwdadwad"
str2.toUpperCase()[1]

function myFunc(str:string) {
    const arr: string[] = "aiueo".split("")
     return str.split("").filter((item) => arr.includes(item.toLowerCase())).length
    
}
console.log(myFunc("oke"));



