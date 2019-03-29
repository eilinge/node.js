var express = require("express");
var app = express();

// fetch test
app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render("test_ejs", {
        title: "Cleaning Supplies",
        supplies: ["mop", "broom", "duster"]
    })
}).listen(3000);
