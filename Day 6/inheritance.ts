class Kendaraan {
    roda: number;

    constructor(roda:number){
        this.roda = roda;
    }

    berjalan(){
        console.log("Kendaraan Berjalan");  
    }
}

class Mobil extends Kendaraan {
    brand: string;
    price: number;

    constructor(brand:string, price:number,){
        super(4) //kalo misalnya minta lebih dari satu super(1,2,4,4)
        this.brand = brand;
        this.price = price;
    }
}

const mobil1 = new Mobil("BMW", 800000000)
mobil1.berjalan()

//instance of -> apakah sebuah objek bagian dari sebuah class

console.log(mobil1 instanceof Mobil); // akan mengembalikan nilai boolean
console.log(mobil1 instanceof Kendaraan);
console.log(mobil1 instanceof Date);


