var mongoose = require("./db")

var ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true // 去除字符串前后空格
    },
    cid: {
        type: mongoose.Types.ObjectId
    },
    author_id: {
        type: mongoose.Types.ObjectId,
    },
    author_name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    context: String
});

module.exports = mongoose.model('Article', ArticleSchema, "article");
