let str:string = "hello world"

let convert = str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

console.log(convert);

let a:string = str.charAt(0).toUpperCase()
let cap1:string = ""


for (let i = 0; i <= str.length; i++){
    if (i == 0){
                cap1 += str.charAt(i).toUpperCase();
         
    } else if (str.charAt(i - 1) == " "){
        cap1 += str.charAt(i).toUpperCase(); 
    } else {
        cap1 += str.charAt(i)
    }
     
}
console.log(cap1);


