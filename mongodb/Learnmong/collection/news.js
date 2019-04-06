var mongoose = require("mongoose")

// mongoose.connect('mongodb://eilinge:tester@localhost:27017/tests', {useNewUrlParser: true});
mongoose.connect('mongodb://localhost:27017/tests', {
  useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("you are connect successfully")
});

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
        default: Date.now
    },
    context: String
  });

var News = mongoose.model('News', NewsSchema, "news");

module.exports = News;