const fruits:string[] = ["banana","apple","jackfruit","apple"]

const newFruit = new Set(fruits)

console.log(newFruit);
newFruit.delete("banana")
newFruit.add("durian")
console.log(newFruit.has("jackfruit"));
newFruit.forEach((item) => console.log(item));
console.log(newFruit.entries());


console.log(newFruit);
