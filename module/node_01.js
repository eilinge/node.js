// setTimeout(() =>{
//     console.log("2 seconds later");
// }, 2000);

// var time = 0;

// var timeiter = setInterval(function() {
//     time += 2;
//     console.log(time+ "seconds later");
//     if (time > 5){
//         clearInterval(timeiter);
//     }
// // }, 2000);

// console.log(__dirname);
// console.log(__filename);

// function sayHai() {
//     console.log("hi");
// }

// sayHai();
var sayBye = function(name) {
    console.log(name + "hello");
}

// sayBye();

function callFunction(fun, name) {
    fun(name);
};

// callFunction(sayBye, "eilin");

callFunction(function(name) {
    console.log(name + "Bye");
}, "eilin")