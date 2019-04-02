var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tests', {
    useNewUrlParser: true
}, function (err) {
    if (err) throw err;
    console.log("connect successfully")
});

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model("Todo", todoSchema, "todos");

module.exports = function(app) {
    app.get("/todo", function(req, res){
        // console.log(req.query)
        Todo.find({}, function(err, data){
            if (err) throw err;
            res.render("todo", {todos: data})  // 渲染的route地址
        })
    })

    app.get("/about", function(req, res){
        // console.log(req.query)
        res.render("about")  // 渲染的route地址
    })

    app.get("/home", function(req, res){
        // console.log(req.query)
        res.render("home")  // 渲染的route地址
    })

    app.get("/blog", function(req, res){
        // console.log(req.query)
        res.render("blog")  // 渲染的route地址
    })

    app.post("/todo", urlencodedParser, function(req, res) {
        if (req.body.item === "") return;
        var todo = new Todo(req.body)
        todo.save(function(err, data){
            if (err) throw err;
            res.json(data)
            console.log("insert successfully")
        })
        // data.push(req.body);
    })

    app.delete("/todo/:item", function (req, res) {
        // Todo.deleteOne(req.params.item)
        // data = data.filter(function(todo){
        //     return todo.item.replace(/ /g, "-") !== req.params.item;
        // })
        Todo.find({ item: req.params.item.replace(/-/g, " ")}).deleteOne({}, function(err, data){
            if(err) throw err;
            console.log("deleteOne successfully")
            res.json(data)
        })
        // res.json(data)
    })
}