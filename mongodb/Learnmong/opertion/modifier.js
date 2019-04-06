var News = require("../collection/news");

testnews = new News({
    title: "  this is a new title  ",
    author: "EilingE",
    context: "context"
})

testnews.save(function(err, doc){
    if (err) throw err;
    console.log("insert successfully")
})

News.find({}, function (err, data) {
    if (err) throw err;
    console.log("find data from news", data)
})