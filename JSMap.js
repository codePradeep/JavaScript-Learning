const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);



const fruit = new Map();

// Set Map Values
fruit.set("apples", 500);
fruit.set("bananas", 300);
fruit.set("oranges", 200);
fruit.delete("apples");

console.log(fruit)
console.log(fruits)
console.log(fruit.get("apples"))

console.log(fruit.has("apples"))
