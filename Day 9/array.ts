// // looping khusus array

// const arrNum = [1,2,3,4,5]

// // return array baru
// arrNum.map((item) => {
//     console.log(item);
// })
// // tidak bisa return
// arrNum.forEach((item) => {
//     console.log(item);
// })
// const newArrNum:number[] = []
// arrNum.forEach((item) => newArrNum.push(item + 5))
// console.log(newArrNum);

// const newArrNum2 = arrNum.map((item) => item + 5) // masalah ditampung tidak di tampung variable itu tidak apapa
// console.log(newArrNum2);

// const arr =["a","b",[1,2],"c"]
// console.log(arr[1],[2][1]);


const arrayNested = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (let i = 0; i < arrayNested.length; i++) {
    for (let j = 0; j < arrayNested[i].length; j++) {
      console.log(arrayNested[i][j]);
    }
  }

  arrayNested.forEach(row => {
    row.forEach(item => {
      console.log(item);
    });
  })

  const flattened = arrayNested.reduce((acc, row) => acc.concat(row), []);
console.log(flattened);

