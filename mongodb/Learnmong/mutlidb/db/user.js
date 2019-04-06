var mongoose = require("./db")

var UserSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true // 去除字符串前后空格
    },
    passwd: {
        type: String
    },
    sex: {
        type: Number
    }
});

module.exports = mongoose.model('User', UserSchema, "user");
