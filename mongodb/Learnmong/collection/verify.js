var mongoose = require("./db")

// Verify: required/validate
// Number: /min/max/
// String: enum/minlength/maxlength/match
var VerifySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true, // 去除字符串前后空格
        required: true,
        maxlength: 18,
        validate: function(name){  // 自定义校验器
            return name.length>12
        },
        // match: /^e(.*?)/i
        match: /([0-9a-aA-Z])*?\@([0-9a-aA-Z])*?\.([0-9a-aA-Z])*?/i
    },
    // author: {
    //     type: String,
    //     lowercase: true, // uppercese 全部转换成大小写
    //     required: true
    // },
    age: {
        type: Number,  // min, max 只用于number类型
        min: 0,
        max: 130,
        required: true
    },
    status: {
        type: String,  // enum 只用于String类型
        enum: ["success", "err"],
        required: true
    }
});

module.exports = mongoose.model('Verify', VerifySchema, "verify");