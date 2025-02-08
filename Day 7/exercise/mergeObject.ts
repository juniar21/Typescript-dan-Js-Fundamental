interface Student {
    name: string;
    email: string;
}
let simpan:any =[]

function mStuData(array1: Student[], array2: Student[]) {
    const mergedArray = [...array1, ...array2];
    const uniqueArray:any = []
    mergedArray.forEach((student) => {
        if (!uniqueArray.map((uniqueStudent: { name: string; email: string; }) => uniqueStudent.name === student.name && uniqueStudent.email === student.email)) {
            uniqueArray.push(student)
        }
    })
    return uniqueArray;
}

    
