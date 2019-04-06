var News = require("../collection/methods.js");

// statics
News.findByAuthor("eilinge", function (err, data) {
    if (err) throw err;
    console.log("find data from news", data)
})

// instance
testnews = new News({
    title: "  this is a new title  ",
    author: "EilingE",
    context: "context"
})

testnews.print()
