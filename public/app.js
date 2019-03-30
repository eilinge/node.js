var express = require("express");
var controller = require("./controllers/todoController")

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo', {
    useNewUrlParser: true
}, function (err) {
    if (err) throw err;
    console.log("connect successfully")
});

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model("Todo", todoSchema);

var itemOne = Todo({item: "get milk"}).save(function(err){
    if (err) throw err;
    console.log("insert successfully")
})

var app = express()

app.set("view engine", "ejs")

app.use(express.static("./assets"));

controller(app)

app.listen(3000)
console.log("you are at port: 3000")