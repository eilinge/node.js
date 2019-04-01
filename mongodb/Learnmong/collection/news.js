var mongoose = require("mongoose")

mongoose.connect('mongodb://eilinge:tester@localhost:27017/tests', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("you are connect successfully")
});

var NewsSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    },
    context: String
  });

var News = mongoose.model('News', NewsSchema, "news");

module.exports = News;