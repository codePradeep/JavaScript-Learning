// A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean
// To create a new primitive Symbol, you write Symbol() with an optional string as its description
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  let id = Symbol('id');
  person[id] = 140353;

  console.log(id)
  console.log(person.id)
  console.log(person[id])