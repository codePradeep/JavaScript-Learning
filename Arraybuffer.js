const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);

console.log(view,buffer.byteLength)