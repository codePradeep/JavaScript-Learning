// let sum=function (a){
//  return function (b){
//      return a+b
//  }
// }

//ES 5

// let sum=function (a){
//     return function (b){
//         if(b){
//             return sum(a+b)
//         }
//         return a
//     }
//    }

//in ES 6 

let sum = (a) => (b) => b ? sum(a + b) : a;

console.log(sum(1)(2)(3)());
