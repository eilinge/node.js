var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";

var createCollection = function (database, collection) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function (err, db) {
        if (err) 
            throw err;
        console.log("the database is build");
        var dbase = db.db(database);
        dbase.createCollection(collection, function (err, res) {
            if (err) 
                throw err;
            console.log("build a site successfully!");
            db.close();
        });
    });
}

var insertOne = function () {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function (err, db) {
        if (err) 
            throw err;
        var dbo = db.db("runoob");
        var myobj = {
            name: "fightting",
            url: "eilinge"
        };
        dbo
            .collection("site")
            .insertOne(myobj, function (err, res) {
                if (err) 
                    throw err;
                console.log("make a new data");
                db.close();
            });
    });
}

// insert();
var insertMany = function(){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        var myobj =  [
            { name: 'runoob tool', url: 'https://c.runoob.com', type: 'cn'},
            { name: 'Google', url: 'https://www.google.com', type: 'en'},
            { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
           ];
        dbo.collection("site").insertMany(myobj, function(err, res) {
            if (err) throw err;
            console.log("insert number: " + res.insertedCount);
            db.close();
        });
    });
} 

var findAll = function() {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        dbo.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}

var findWhere = function() {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
         var whereStr = {"name":'菜鸟教程'};  // 查询条件
        dbo.collection("site").find(whereStr).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}

var updateMany = function(docment) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        var whereStr = {"type":'en'};  // 查询条件
        var updateStr = {$set: { "url" : "https://www.runoob.com" }};
        dbo.collection("site").updateMany(whereStr, updateStr, function(err, res) {
            if (err) throw err;
             console.log(res.result.nModified + " numbers were update");
            db.close();
        });
    });
}

module.exports = {
    createCollection: createCollection,
    insertOne: insertOne,
    insertMany: insertMany,
    findAll: findAll,
    findWhere: findWhere,
    updateMany: updateMany
}