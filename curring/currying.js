let add = (x, y) => {
    console.log(x + y)
}

let addByTwo=add.bind(this,2)
addByTwo(18)