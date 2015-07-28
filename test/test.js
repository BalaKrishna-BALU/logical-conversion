var lc = require("../index");
console.log(lc.AND(2, 3));
console.log(lc.OR(2, 3));
console.log(lc.Conversion(3, 2));
console.log(lc.NOT(8));
console.log("XOR",lc.XOR(9,4));
console.log("XOR",lc.XOR(4,4));

console.log(lc.AND(8, 3));
console.log(lc.OR(8, 3));
console.log(lc.Conversion(16, 8));
console.log(lc.NOT(5));
console.log("XOR",lc.XOR(7,16));