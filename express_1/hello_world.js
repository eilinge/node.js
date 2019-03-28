var express = require("express");
var bodyParser = require("body-parser")

var app = express()
// app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('assets'));

app.get('/', function(req, res) {
    console.dir(req.query);
    res.send("You request to see a profile with the id of " + req.query.find);
})

app.post('/home', function(req, res) {
    console.dir("req.body");
    console.dir(req.body);
    res.send("Ok");
})

// app.get('/profile/:id/:name/ab?d', function(req, res) {  // regx
app.get('/profile/:id/:name', function(req, res) {
    console.dir(req.params);
    res.send("You request to see a profile with the id of " + req.params.id);
})

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("you are at http://%s:%s", host, port)
})


// app.get('/', function(req, res) {
//     var myObj = {
//         name: "eilinge",
//         age: 18
//     }
//     var myObj = [1, 3, 2]
//     res.send(myObj);
// })