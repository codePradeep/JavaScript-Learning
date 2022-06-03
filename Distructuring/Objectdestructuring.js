const user = {
    id: 42,
    isVerified: true
};

const {id, isVerified} = user;

console.log(id); // 42
console.log(isVerified); // true

// Assignment separate from declaration
// A variable can be assigned its value with destructuring separate from its declaration.

let a, b;

({a, b} = {a: 1, b: 2});

// Assigning to new variable names
// A property can be unpacked from an object and assigned to a variable with a different name than the object property.

const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true

// default value 
const {c = 10, d = 5} = {c: 3};

console.log(c); // 3
console.log(d); // 5


// Assigning to new variable names and providing default values
// A property can be both

// Unpacked from an object and assigned to a variable with a different name.
// Assigned a default value in case the unpacked value is undefined.
const {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5