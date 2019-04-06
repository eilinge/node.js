var mongoose = require("./db")

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