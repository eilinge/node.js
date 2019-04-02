var Operation = require("./opert_news")

// Operation.find({ author: "eilinge"}, function(err, data){
//     if (err) throw err;
//     console.log(data)
// })

Operation.insert("this is a new news", "lin", "hello world", function(err, data){
    if (err) throw err
    console.log(data)
})