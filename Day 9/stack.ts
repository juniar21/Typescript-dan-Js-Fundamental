class Stack{
    #maxsize: number
    #container : number [] = []
    #isFull(){
        return this.#container.length >= this.#maxsize
    }
    #isEmpty(){
        return this.#container.length === 0
    }
    constructor(maxSize:number = 10){
        this.#maxsize = maxSize
    }

    push(element:number){
        if(this.#isFull()){
            console.log("Stack Overflow");
            return  
        }
        this.#container.push(element)
    }

    pop(){
        if(this.#isEmpty()){
            console.log("Stack Underflow");
            return;  
        }
        this.#container.pop()
    }
    getElements(){
        return this.#container
    }
}

const stack = new Stack(4)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)


console.log(stack.getElements());

stack.pop()
console.log(stack.getElements());


