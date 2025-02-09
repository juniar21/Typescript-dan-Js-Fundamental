function convertEx(inp:string) {
    let columnNumber = 0;
    for (let i = 0; i <= inp.length-1; i++){
        columnNumber = columnNumber * 26 + (inp.toUpperCase().charCodeAt(i) - 'A'.charCodeAt(0) + 1);
    }
    return columnNumber
}
console.log(convertEx('ABC'));
function convertEx2(inp:string) {
    const arr = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let columnNumber = 0;
    for (let i = 0; i <= inp.length-1; i++){
        columnNumber = columnNumber * 26 + inp.indexOf(inp[i])
    }
    return columnNumber
}