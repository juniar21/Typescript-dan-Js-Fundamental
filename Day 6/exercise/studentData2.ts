class Student {
    name: string
    email: string
    age: number
    score: number
   

    constructor(nama:string,email:string,dob:string,score:number){
        this.name = nama
        this.email = email
        this.age = this.calculateAge(dob)
        this.score = score
      
    }
    calculateAge(dob:string){
        const date1 = new Date()
        const date2 = new Date(dob)
        const diff = date1.getTime() - date2.getTime()
        return Math.floor(diff / (24 * 60 * 60 * 1000) / 365)
        ;
    }
}
const student1 = new Student("Jaka", "jaka@gmail","2002,1,21",80)
const student2 = new Student("Jaka", "jaka@gmail","2002,1,21",85)
const student3 = new Student("Jaka", "jaka@gmail","2002,1,21",90)

const arrStudent: Student[] = [student1,student2,student3] // sudah mencakup interfacenya tinggal ambil tipe datanya

function myFunc(arr:Student[]) {
    const score = arr.map((item) => item.score)
    const age = arr.map((item) => item.age)
    
    return {
        score: {
            highest:Math.max(...score),
            lowest:Math.min(...score),
            average:score.reduce((a,b)=> a+b)/score.length
        },
        age: {
            highest:Math.max(...age),
            lowest:Math.min(...age),
            average:age.reduce((a,b)=> a+b)/age.length
        }
    };
}
console.log(myFunc(arrStudent));



