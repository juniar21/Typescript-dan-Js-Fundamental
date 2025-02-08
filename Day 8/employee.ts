class Employee {
    totalSalary: number

    constructor(total:number) {
        this.totalSalary = total
    }
}
class FulltimeEmployee extends Employee {
    time : number

    constructor( fulltime:number){
        super(100000)
        this.time = fulltime
    }
    addWorkingHourDay(){
        return this.time
    }
    calTotalSalary(){
        if (this.addWorkingHourDay() > 6){
            return (this.addWorkingHourDay()-6) * 75000 + (6 * 10000) 
        } else {
            return this.addWorkingHourDay() * 100000
        }
        
    }
}

class ParttimeEmployee extends Employee {
    partTime : number

    constructor(parttime:number){
        super(50000)
        this.partTime = parttime
    }
    addWorkingHourDayPartTime(){
        if (this.partTime > 6){
            return this.partTime * 50000
        } else {
            return this.partTime * 30000
        }
    }
    calTotalSalary(){
        return this.addWorkingHourDayPartTime() * 6 
    }
}

const fullEmp1 = new FulltimeEmployee(15)
console.log(fullEmp1.addWorkingHourDay());
console.log(fullEmp1.calTotalSalary());

