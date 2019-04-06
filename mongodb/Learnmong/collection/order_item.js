var mongoose = require("./db")

var OrderItemSchema = mongoose.Schema({
    order_id: {
        type: String
    },
    title: {
        type: String
    },
    price: {
        type: Number
    },
    num: {
        type: Number
    }
});

var OrderItem = mongoose.model('OrderItem', OrderItemSchema, "orderitem");

module.exports = OrderItem;