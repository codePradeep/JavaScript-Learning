const target = {
    message1: "hello",
    message2: "everyone"
  };
  
  const handler1 = {};
  
//   const proxy1 = new Proxy(target, handler1);

  const handler2 = {
    get(target, prop, receiver) {
      return "world";
    }
  };
  
  const proxy2 = new Proxy(target, handler2);

  console.log(proxy2)
