var mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/tests', {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("you are connect successfully")
});

var FocusSchema = mongoose.Schema({
    title: {
        type: String,
        get(parmas){  // get 只对数据库查找的数据进行格式化, 不对数据库本身数据进行修改(不常用)
            return "a001" + parmas
        }
    },
    pic: String,
    redirest: {
        type: String,
        set(parmas){  // set 对存储进数据库的数据进行格式化
            if(!parmas){
                return ""
            } else {
                if( parmas.indexOf("http://") != 0 && parmas.indexOf("https://") != 0){
                    return "https://"+ parmas
                }
                else {
                    return parmas
                }
            }
        }
    },
    status: {
        type: Number,
        default: 1
    }
});

var Focus = mongoose.model('Focus', FocusSchema, "focus");

module.exports = Focus;