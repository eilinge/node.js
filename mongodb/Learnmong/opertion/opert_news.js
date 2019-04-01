var News = require("../collection/news");

var insert = function(title, author, context){
    var news = new News({ 
        // title: 'this is about how operat mongoose',
        // author: "eilinge",
        // context: "operation contain insert/delete/update/find"
        title: title,
        author: author,
        context: context
    });
    news.save(function(err, doc){
        if(err) throw err;
        console.log("insert successfully")
    });
    // find();
}

var update = async function(wherestr, setstr){
    // var wherestr = { author: "eilin"}
    // var setstr = { author: "lin" }
    var updatestr = { $set: setstr}
    await News.updateOne(wherestr, updatestr, function(err, doc){
        if (err) throw err;
        if(doc.nModified !== 1){
            console.log("your update operation is wrong")
            return;
        }
        console.log("update successfully")
    })
    // find(setstr);
}

var deleteOperat = function(wherestr){
    // var wherestr = { author: "eilinge"}
    News.deleteOne(wherestr, function(err, doc){
        if (err) throw err;
        if (doc.n !== 1){
            console.log("your delete operation is wrong");
            return;
        }
        console.log("delete successfully")
    });
    // find(wherestr);
}
var find = function(wherestr){
    // console.log("wherestr", wherestr)
    News.find(wherestr, function(err, doc){
        if (err) throw err;
        console.log(doc)
    })
}

module.exports = {
    insert: insert,
    find: find,
    update: update,
    dateOpert: deleteOperat
}