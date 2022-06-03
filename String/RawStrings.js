function tag(strings) {
    console.log(strings.raw[0]);
  }
  
  tag`string text line 1 \n string text line 2`;
  // logs "string text line 1 \n string text line 2" ,
  // including the two characters '\' and 'n'
  
//   In addition, the String.raw() method exists to create raw strings—just like the default template function 
//   and string concatenation would create.


let str = String.raw`Hi${2+3}!`;
// "Hi\\n5!"
console.log(str)


console.log( Array.from(str).join(','))
// "H,i,\\,n,5,!"
