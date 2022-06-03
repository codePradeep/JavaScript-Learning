// ====> Escaping characters in a string
const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

// ====> Character access
// There are two ways to access an individual character in a string. The first is the charAt() method:

console.log('cat'.charAt(1)) // log "a"

// The other way (introduced in ECMAScript 5) is to treat the string as an array-like object,
//  where individual characters correspond to a numerical index:
console.log('cat' [1]) // log "a"


//====> Comparing strings

let a = 'a'
let b = 'b'
if (a < b) { // true
    console.log(a + ' is less than ' + b)
} else if (a > b) {
    console.log(a + ' is greater than ' + b)
} else {
    console.log(a + ' and ' + b + ' are equal.')
}d