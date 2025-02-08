class Product{
    name:string
    price:number


    constructor(nama:string,harga:number){
        this.name = nama
        this.price = harga
    }
}

class Transaction extends Product {
    qty: number
    total?:number


    constructor(nama:string,harga:number,qty:number){
        super(nama,harga)
        this.qty = qty
    }

    addToChart(){
        return `Produk ${this.name} seharga ${this.price} berjumlah ${this.qty}`

    }
    totalTrans(){
        this.total = this.price * this.qty
        return `Transaksi saat ini ${this.total}`

    }
    checkout(){
        return `${this.addToChart()}, Jumlah ${this.qty}, Total ${this.totalTrans()}`

    }

    }
const trans1 = new Transaction("Laptop", 6000000, 5)
const trans2 = new Transaction("Laptop", 6000000, 3)
console.log(trans1.checkout());
console.log(trans2.checkout());


