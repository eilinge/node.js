var Index = require("../collection/index");


var indexs = new Index({
    name: "eilinge",
    sex: 1
});

indexs.save(function (err, doc) {
    if (err) throw err;
    console.log("insert successfully")
    Index.find({},function(err, data){
        if (err) throw err;
        console.log(data)
    })
});