var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongodb = require("./client")

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('assets'));

app.post('/create_collection', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name
    };
    console.log(response);
    mongodb.createCollection(response.first_name, response.last_name)
    // res.end(JSON.stringify(response));
})

app.post('/create_', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name
    };
    console.log(response);
    mongodb.createCollection(response.first_name, response.last_name)
    // res.end(JSON.stringify(response));
})

var server = app.listen(3000, "localhost", function () {

    var host = server.address().address
    var port = server.address().port

        console.log("you are at http://%s:%s", host, port)

})