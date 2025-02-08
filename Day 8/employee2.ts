class Employee{
    name:string
    type: "Full-Time" | "Part-Time"
    #hour : number = 0
    #bsalary : number
    #otSallary : number

    constructor(name:string,  type: "Full-Time" | "Part-Time", bsalary : number, otSallary : number){
        this.name = name
        this.type = type
        this.#bsalary = bsalary
        this.#otSallary = otSallary
    }

    addHour(n:number){
        this.#hour += n
        return this.#hour
    }
    getSalary(){
        if(this.#hour <= 6){
            return this.#hour * this.#bsalary
        } else {
            return this.#bsalary * 6 + this.#otSallary * (this.#hour - 6)
        }
    }

}
class FulltimeEmployee extends Employee {
    constructor(name:string){
        super(name,"Full-Time",100000,75000)
    }
}

class PartTimeEMployee extends Employee {
    constructor(name:string){
        super(name,"Part-Time",50000,30000)
    }
}
const emplo1 = new FulltimeEmployee("Andi")
emplo1.addHour(10)
emplo1.getSalary()
console.log(emplo1.getSalary());
