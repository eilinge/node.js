var mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/tests', {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("you are connect successfully")
});

var IndexSchema = mongoose.Schema({
    name: {
        type: String,
        createIndexes: true
    },
    sex: {
        type: Number,
        createIndexes: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var Index = mongoose.model('Index', IndexSchema, "index");

module.exports = Index;