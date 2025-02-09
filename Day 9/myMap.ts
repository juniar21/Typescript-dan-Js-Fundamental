const myMap = new Map()

myMap.set("name", "Andi") // untuk key bisa number tidak hanya value
myMap.set("age",30)

console.log(myMap.get("name"));
myMap.delete("age")
myMap.forEach((item) => console.log(item))



