class Student {
    name: string;
    email: string;
    age: Date
    score: number
   

    constructor(nama:string,email:string,age:Date,score:number){
        this.name = nama
        this.email = email
        this.age = age
        this.score = score
      
    }
    ScoreHighLowAve(score:number[]){
        score.sort((a,b)=>a-b)
        let highest:number
        let lowest:number 
        let average:number
        highest = score[0]
        lowest = score[score.length-1]
        average = score.reduce((a,b) => a + b) / score.length

        console.log(`Highest score ${highest}, lowest score ${lowest}, average score ${average}`)
    }

    AgeHighLowAve(age:Date[]){
        const today = new Date();

        age.sort((a,b) => a.getDate() - b.getDate())
        let highest:Date
        highest = age[0]
        let lowest:Date
        lowest = age[age.length - 1]
        
        const totalAge = age.reduce((sum, birthDate) => {
        let ages:number = today.getFullYear() - birthDate.getFullYear();

        if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
        ) {
            ages--;
        }

        return sum + ages;
        }, 0);
        let average:number
        average = totalAge / age.length;

        console.log(`Highest score ${highest.toDateString()}, lowest score ${lowest.toDateString()}, average score ${average}`)
        }
    }

const student1 = new Student("Jaka", "jaka@gmail",new Date(2002,1,21),75)
const student2 = new Student("titi", "titi@gmail",new Date(2025,1,25),90)
const student3 = new Student("toto", "toto@gmail",new Date(2025,1,23),85)
const student4 = new Student("tata", "tata@gmail",new Date(2025,1,26),80)

student1.ScoreHighLowAve([student1.score,student2.score,student3.score,student4.score])
student1.AgeHighLowAve([student1.age,student2.age,student3.age,student4.age])


