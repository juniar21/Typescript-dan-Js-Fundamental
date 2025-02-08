function intersection(Obj: any, Obj2: any) {
  
  let result: any = {};
  for (let key in Obj) {
    if (Obj2.hasOwnProperty(key)) {
      result[key] = Obj[key];
    }
  }
  return result;
    
}
console.log(intersection({a: 1, b: 2, c:3}, {b: 2, c: 3})); 
