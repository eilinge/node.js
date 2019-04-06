var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test1", {
    useNewUrlParser: true
}, function (err) {
    if (err) throw err;
    console.log("connect successfully")
})

var Testschema = new mongoose.Schema({
    num: Number,
    name: String,
    size: String
});

var eachData = [{
    name: 'doc1',
    size: 'small'
}, {
    name: 'doc2',
    size: 'small'
}, {
    name: 'doc3',
    size: 'big'
}]

var insert = function () {
    eachData.forEach(function (data) {
        console.log(data)
        var newtest = new tests1(data);
        newtest.save(function (err, data) {
            if (err) throw err;
            console.log(data)
        })
    })
}

// statics是给model添加方法，methods是给实例(instance)添加方法。
// Testschema.statics.findBySize = function(size, cb) {
//     return this.find({ size: new RegExp(size, "i") }, cb)
// }
// var testsMethod = mongoose.model("Tests1", Testschema, "tests1")

// testsMethod.findBySize("small", function(err, data) {
//     if (err) throw err;
//     console.log(data)
// })


// Testschema.methods.findBySize = function(cb) {
//     return this.model("Tests1").find({ size: this.size }, cb)
// }
// var testsMethod = new mongoose.model("Tests1", Testschema, "tests1")

// testsMethod.findBySize(function(err, testsMethod) {
//     if (err) throw err;
//     console.log(testsMethod)
// })