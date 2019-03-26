var counter = function(err) {
    return ("There are " + err.length + " elements");
};

var pi = 3.14;
var adder = function(a, b) {
    return `the sum of the 2 numbers is ${a+b+pi}`;
}
// module.exports.counter = counter;
// module.exports.adder = adder;

module.exports = {
    counter: counter,
    adder: adder,
    count: function(err) {
        return ("There are " + err.length + " elements");
    },
    pi
};