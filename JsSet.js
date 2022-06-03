const letter = new Set(["a","b","c"]);


const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

let text = "";
letters.forEach (function(value) {
  text += value;
})

console.log(letter)
console.log(letters)
console.log(text)
console.log(letters.values() )