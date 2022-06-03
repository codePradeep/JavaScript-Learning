

	// Creating a WeakMap
	const myweakMap = new WeakMap();
	console.log(myweakMap); // WeakMap {}

	let obj = {};

	// Adding object (element) to WeakMap
	myweakMap.set(obj, 'hello everyone');

	console.log(myweakMap);

	// // Access the element of a WeakMap using get() method
	 console.log("The element of a WeakMap - " + myweakMap.get(obj));

	// // Checking the element in a map using has() method
	// console.log("check if an element is present in WeakMap - "
	// 	+ myweakMap.has(obj));

	// // Delete the element of WeakMap using delete() method
	// console.log("deleting the element of WeakMap - "
	// 	+ myweakMap.delete(obj));
	// console.log(myweakMap); // WeakMap {}

	// // WeakMaps are not iterable. It will return
	// // an error. For example,
	// const weakMap1 = new WeakMap();
	// console.log(weakMap1); // WeakMap {}
	// let obj1 = {};

	// // Adding object (element) to WeakMap
	// weakMap.set(obj1, 'hello');
	
	// // Looping through WeakMap
	// for (let i of weakMap1) {

	// 	console.log(i); // TypeError
	// }

