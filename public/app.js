var express = require("express");
var controller = require("./controllers/todoController")


var app = express()

app.set("view engine", "ejs")

app.use(express.static("./assets"));

controller(app)

app.listen(3000)
console.log("you are at port: 3000")