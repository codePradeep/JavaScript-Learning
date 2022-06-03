function* generate() {
    yield 1;
    yield 2;
    return 3;
  }
  // "generator function" creates "generator object"
  let generator = generate();
  let oneValue = generator.next();
  console.log(JSON.stringify(oneValue)); 
  

  for (let value of generator) {
    console.log(value); // 1, then 2
  }