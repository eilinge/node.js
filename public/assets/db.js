var mongoose = require('mongoose'),
    DB_URL = 'mongodb://root:tester@localhost:27017/tests';
    // database: User

mongoose.connect(DB_URL, {
    useNewUrlParser: true
});

mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;