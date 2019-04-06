var mongoose = require("./db")

var NewsSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true  // 去除字符串前后空格
    },
    author: {
      type: String,
      lowercase: true,  // uppercese 全部转换成大小写
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    context: String
  });

var News = mongoose.model('News', NewsSchema, "news");

module.exports = News;