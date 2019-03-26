var buffer = require("./count");
var pi = require("./count").pi;

console.log(buffer.counter(['ruby', "node.js"]));
console.log(buffer.count(['ruby', "node.js"]));
console.log(buffer.adder(2, 3));
console.log(pi);