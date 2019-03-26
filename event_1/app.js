var events = require("events");
var util = require("util");

// var myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", function(message) {
//     console.log(message);
// })

// myEmitter.emit("someEvent", "the event was emitted")

var Person = function(name) {
    this.name = name;
}

// util.inherits 使继承
util.inherits(Person, events.EventEmitter);

var xiaoming = new Person("xiaoming");
var eilinge = new Person("eilinge");
var lucy = new Person("lucy");

var persons = [xiaoming, eilinge, lucy];

persons.forEach(function(person) {
    person.on("speak", function(message){
        console.log(person.name +"say: " + message) 
    })
})

// 触发事件
xiaoming.emit("speak", "nihao");
lucy.emit("speak", "hello");