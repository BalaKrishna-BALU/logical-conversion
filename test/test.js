var lc = require("logical-conversion");

console.log("AND",lc.AND(2, 3));
console.log("OR",lc.OR(2, 3));
console.log("NOT",lc.NOT(8));
console.log("XOR",lc.XOR(9,4));
console.log("XNOR",lc.XNOR(9,4));
console.log("Conversion",lc.Conversion(15, 2));

console.log("AND",lc.AND(0, 7));
console.log("OR",lc.OR(7, 0));
console.log("NOT",lc.NOT(7));
console.log("XOR",lc.XOR(8,8));
console.log("XNOR",lc.XNOR(8,8));
console.log("Conversion",lc.Conversion(15, 8));

console.log("AND",lc.AND(5, 9));
console.log("OR",lc.OR(9, 5));
console.log("NOT",lc.NOT(16));
console.log("XOR",lc.XOR(7,16));
console.log("XNOR",lc.XNOR(14,1));
console.log("Conversion",lc.Conversion(7, 2));