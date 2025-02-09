// const arr:any = [
//     () => [[1,2,3]],['s','a'],
//     ,[{name: [1,2], age:20}]
// ]
// console.log(arr()[0][0]);
// console.log(arr[0]()[0][2]);
const arr2:any = [
    {
        greet(){
            return [1,2,3]
        }
    }
]
console.log(arr2[0].greet()[0]);
