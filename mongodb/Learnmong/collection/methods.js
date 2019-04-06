var mongoose = require("./db")

var NewsSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true // 去除字符串前后空格
    },
    author: {
        type: String,
        lowercase: true, // uppercese 全部转换成大小写
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    context: String
});

// statics
NewsSchema.statics.findByAuthor = function(sn, cb){
    // 通过用find方法获取 author 的数据, this关键字获取当前的module
    this.find({}, function(err, docs){
        cb(err, docs)
    })
}

// methods (基本不用)
NewsSchema.methods.print = function(){
    console.log("this is a instance methods")
    console.log(this.title)
}

module.exports = mongoose.model('News', NewsSchema, "news");