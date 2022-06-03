// The Object.freeze() method freezes an object. A frozen object can no longer be changed;
// "use strict";
const obj = {
    prop: 42,
    data:{
      new:22
    }
  };
  
  Object.freeze(obj);
  
  obj.data.new=1;
  obj.prop = 33; // TypeError: Cannot assign to read only property 'prop' of object '#<Object>'
  console.log(obj); // cannot update when freeze


obj.data.saurabh="hiii"   //can not delete when freeze
  console.log(obj);

  obj.newproperty=22 //can not add new prop when freeze
  console.log(obj);

  