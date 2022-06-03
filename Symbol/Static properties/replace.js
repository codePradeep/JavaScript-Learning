class CustomReplacer {
    constructor(value) {
      this.value = value;
    }
    [Symbol.replace](string) {
      return string.replace(this.value, '#!@?');
    }
  }
  
  console.log('football'.replace(new CustomReplacer('foo')));
  // expected output: "#!@?tball"
  