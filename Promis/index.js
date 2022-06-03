// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('foo');
//     }, 300);
//   });

//   myPromise
//     .then(handleResolvedA, handleRejectedA)
//     .then(handleResolvedB, handleRejectedB)
//     .then(handleResolvedC, handleRejectedC);
const promiseA = new Promise((resolutionFunc, rejectionFunc) => {
    setTimeout(() => {
        resolutionFunc(777);
    }, 1000)
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

