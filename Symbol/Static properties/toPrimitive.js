const object1 = {
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') {
        return 42;
      }
      return null;
    }
  };
  
  console.log(+object1);
  // expected output: 42
  
//   The Symbol.toPrimitive is a symbol that specifies a function valued property that is called to convert an object to a corresponding primitive value