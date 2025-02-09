function anagram(s:string, t:string):boolean {
    let sSort:string = s.split("").sort().join("")
    let tSort:string = t.split("").sort().join("")
    
    if (sSort === tSort){
        return sSort == tSort
    } else {
        return sSort == tSort
    }  
}
console.log(anagram("rat","car"));
