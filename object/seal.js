const object1 = {
    property1: 42,
    data:{
        new:22
    }
};

Object.seal(object1);

object1.property1 = "hello"; //it will update

console.log(object1);

object1.newproprty = 22; // cannot add new property when sealed 

console.log(object1);


delete object1.data.new
delete object1.property1; // cannot delete when sealed

console.log(object1);