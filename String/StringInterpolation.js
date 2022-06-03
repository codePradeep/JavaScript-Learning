let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');

// That can be hard to read – especially when you have multiple expressions.

// With template literals, you can avoid the concatenation operator

console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);