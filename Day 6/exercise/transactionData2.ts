class Product{
    name:string
    price:number

    constructor(nama:string,harga:number){
        this.name = nama
        this.price = harga
    }
}
const product1 = new Product("Apple", 10000);
const product2 = new Product("Banana", 20000);
const product3 = new Product("Cherry", 5000);
const product4 = new Product("Orange", 30000);

interface CartItem extends Product {
    qty : number
    total : number
}

class Transaction {
    total:number = 0
    products: CartItem[] = [];   

    addToCart(itemProduct:Product, qty:number){
        const cartItem:CartItem = {
            ...itemProduct,
            qty: qty,
            total: itemProduct.price * qty,
        };
        this.products.push(cartItem);
        this.total += cartItem.total
    }
    showTotal() {
        console.table(this.products)
        console.log(`Total: ${this.total}`);
    }
    checkout(money:number){
        if (money < this.total){
            throw new Error("Uang anda tidak cukup")
        } else {
            console.log(`Cash: ${money}`);
            console.log(`Return: ${money - this.total}`);
            console.log(`~~~ Thank You ~~~`); 
            
        }
    }
    
 }

 const trans1 = new Transaction()
 trans1.addToCart(product1, 5)
 trans1.addToCart(product4, 1)
 trans1.showTotal()
 trans1.checkout(100000)


 