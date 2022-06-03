let handler = {
    get: function(target, name) {
      return name in target ? target[name] : 42
    }
  }
  
  let p = new Proxy({}, handler)
  p.a = 1
  console.log(p.a, p.b) // 1, 42