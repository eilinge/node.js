var News = require("../collection/verify");

testnews = new News({
    name: "eilinge@163.com",
    age: 120,
    status: "success"
})

testnews.save(function (err, doc) {
    if (err) throw err;
    console.log("insert successfully")
})