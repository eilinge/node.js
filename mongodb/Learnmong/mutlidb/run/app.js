// var User = require("../db/user")

// var user = new User({
//     username: "lin",
//     passwd: "duzi1314",
//     sex: 1
// })

// user.save(function(err, data){
//     if(err) throw err;
//     console.log("insert successfully")
//     User.find({}, function(err, docs){
//         if (err) throw err;
//         console.log(docs)
//     })
// })

// var Cate = require("../db/articlecate")

// var cate = new Cate({
//     cate: "国内新闻"
// })

// cate.save(function (err, data) {
//     if (err) throw err;
//     console.log("insert successfully")
//     Cate.find({}, function (err, docs) {
//         if (err) throw err;
//         console.log(docs)
//     })
// })

// var Article = require("../db/article")

// var article = new Article({
//         title: "习大大回中国",
//         cid: "5ca8715802e0fc4228aaa357",
//         author_id: "5ca870455e8a0343042df5bc",
//         author_name: 'eilin',
//         context: "开心的一天, 2333..."
// })

// article.save(function (err, data) {
//     if (err) throw err;
//     console.log("insert successfully")
//     Article.find({}, function (err, docs) {
//         if (err) throw err;
//         console.log(docs)
//     })
// })

var Article = require("../db/article")

Article.aggregate([
    {
        $lookup:
        {
            from: "cate",  // 关联表(orderitem)
            localField: "cid", // 原表(order_id)
            foreignField: "_id",  // 关联表(order_id)
            as: "cate" // 将查询到的数据放入到items中
        }
    },
        {
            $lookup: {
                from: "user", // 关联表(orderitem)
                localField: "author_id", // 原表(order_id)
                foreignField: "_id", // 关联表(order_id)
                as: "user" // 将查询到的数据放入到items中
            }
        },
    {
        $match: {author_name: "eilin"}
    }
], function(err, docs){
    if (err) throw err
    console.log(JSON.stringify(docs))
})

[{
    "_id": "5ca872a90e967840eccfb263",
    "date": "2019-04-06T09:34:33.013Z",
    "title": "习大大回中国",
    "cid": "5ca8715802e0fc4228aaa357",
    "author_id": "5ca870455e8a0343042df5bc",
    "author_name": "eilin",
    "context": "开心的一天, 2333...",
    "__v": 0,
    "cate": [{
        "_id": "5ca8715802e0fc4228aaa357",
        "cate": "国内新闻",
        "__v": 0
    }],
    "user": [{
        "_id": "5ca870455e8a0343042df5bc",
        "username": "eilin",
        "passwd": "wcq123212dfaf",
        "sex": 0,
        "__v": 0
    }]
}]