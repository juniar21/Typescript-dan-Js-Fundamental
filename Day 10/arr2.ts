function myFunc(arr:number[]) {
    arr.sort((a,b) => a - b)
    const result:number[] = []
    for (let i = 0; i < arr.length/2; i++){
        result.push(arr[arr.length - 1 - i])
        result.push(arr[i])
    }
    return result
    
}
console.log(myFunc([ 1, 7, 4, 4, 6, 2]));

let str = "helloWorld"
 function split(str:string) {
   
    let strI:string = ""
    for (let i = 0; i <= str.length-1; i++){
        if (str[i] == str[i].toUpperCase()){
            strI += " " + str[i]
        }else { 
        strI += str[i] 
        }
    }
    return strI.split(" ")
    
 }
 console.log(split("helloWorldBandung"));
 

