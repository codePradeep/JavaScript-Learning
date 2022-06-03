// First to fulfill
// Promise.any() resolves with the first promise to fulfill, even if a promise rejects first. This is in contrast to Promise.race(), which resolves or rejects with the first promise to settle.

const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // pFast fulfills first
})
// expected output: "Done quick"