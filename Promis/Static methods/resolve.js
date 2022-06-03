Promise.resolve('Success').then(function(value) {
    console.log(value); // "Success"
  }, function(value) {
    // not called
  });

//   Resolving an array
const p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v[0]); // 1
});

// Resolving another Promise
const original = Promise.resolve(33);
const cast = Promise.resolve(original);
cast.then(function(value) {
  console.log('value: ' + value);
});
console.log('original === cast ? ' + (original === cast));

// logs, in order:
// original === cast ? true
// value: 33