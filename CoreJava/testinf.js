let name={
    fname:"pk",
    lname:"sharma"
};

let printname=function(){
    console.log(this.fname+" "+this.lname)
}

// let printMyName=printname.bind(name);
// printMyName()😁

// implematation of custom bind method

Function.prototype.mybind=function(...args){
    let obj=this;
    return function(){
        obj.call(args[0]);
    }

}
let printMyName2=printname.mybind(name);
printMyName2()