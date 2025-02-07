function difftowArr(arr1:number[], arr2:number[]) {

    let unique = arr1.filter((item) => arr2.indexOf(item) === -1 )
    let unique2 = arr2.filter((item) => arr1.indexOf(item) === -1 )

    return unique.concat(unique2)

}
console.log(difftowArr([1,2,3,4,5],[2,3,7,5,6]));

// bisa menggunakan looping if (!arr2.includes(arr1[i]))
// {res.push(arr1[i])} dan sebaliknya


