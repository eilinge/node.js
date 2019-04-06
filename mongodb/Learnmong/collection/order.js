var mongoose = require("./db")

var OrderSchema = mongoose.Schema({
    order_id: {
        type: String
    },
    uid: {
        type: Number
    },
    trade_no: {
        type: String
    },
    all_price:{
        type: Number
    },
    all_num: {
        Number
    }
});

var Order = mongoose.model('Order', OrderSchema, "order");

module.exports = Order;