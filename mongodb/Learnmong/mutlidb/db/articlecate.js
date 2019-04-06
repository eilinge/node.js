var mongoose = require("./db")

var CateSchema = mongoose.Schema({
    cate: {
        type: String,
        trim: true // 去除字符串前后空格
    }
});

module.exports = mongoose.model('Cate', CateSchema, "cate");
