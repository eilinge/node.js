var express = require("express");
var app = express();

// fetch test
app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render("news", {
        "news": ["新闻1", "新闻2", "新闻3"],
        "new1": ["新闻2", "新闻2", "新闻3"]
    })
}).listen(3000);
