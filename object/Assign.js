const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.table(target);
// expected output: Object { a: 1, b: 4, c: 5 }
console.table(source);
console.table(returnedTarget);

// Cloning an object 

const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }