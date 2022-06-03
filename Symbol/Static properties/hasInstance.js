class Array1 {
    static [Symbol.hasInstance](instance) {
      return Array.isArray(instance);
    }
  }
  
  console.log([] instanceof Array1);
  // expected output: true
  
// ===========================================================

  function MyArray() { }
Object.defineProperty(MyArray, Symbol.hasInstance, {
  value: function(instance) { return Array.isArray(instance); }
});
console.log([] instanceof MyArray); // true