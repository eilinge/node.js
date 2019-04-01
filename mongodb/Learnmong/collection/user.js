var mongoose = require("mongoose")

mongoose.connect('mongodb://eilinge:tester@localhost:27017/tests', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("you are connect successfully")
});

var UsersSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    sex: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
        default: Date.now
    },
    context: String
  });

var Users = mongoose.model('Users', UsersSchema, "users");

module.exports = Users;