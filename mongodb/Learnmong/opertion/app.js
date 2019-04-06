// var Order = require("../collection/order");

// newOrder = new Order({
//         order_id: 32,
//         uid: 9,
//         trade_no: "33",
//         all_price: 70,
//         all_num: 6
// })

// newOrder.save(function (err, doc) {
//     if (err) throw err;
//     console.log("insert successfully")
//     Order.find({}, function (err, data) {
//         if (err) throw err;
//         console.log("find data from Order", data)
//     })
// })

// var OrderItem = require("../collection/order_item");
// newOrderItem = new OrderItem({
//     order_id: 1,
//     title: "商品键盘3",
//     price: 100,
//     num: 1
// })

// newOrderItem.save(function (err, doc) {
//     if (err) throw err;
//     console.log("insert successfully")
//     OrderItem.find({}, function (err, data) {
//         if (err) throw err;
//         console.log("find data from Order", data)
//     })
// })

// // 根据订单, 查找该商品的信息
// var OrderItem = require("../collection/order_item");
// var OrderModel = require("../collection/order");

// OrderModel.aggregate([  // 原表(order)
//     {
//         $lookup:
//         {
//             from: "orderitem",  // 关联表(orderitem)
//             localField: "order_id",  // 原表(order_id)
//             foreignField: "order_id",  // 关联表(order_id)
//             as: "items" // 将查询到的数据放入到items中
//         }
//     },
//     {
//         $match: {"all_price": {$gt: 90}}
//     }
// ], function(err, docs){
//     if (err) throw err;
//     console.log(JSON.stringify(docs))
// })

// [{
//     "_id": "5ca82baf71c40e2714dd502c",
//     "order_id": "1",
//     "uid": 10,
//     "trade_no": "111",
//     "all_price": 100,
//     "__v": 0,
//     "items": [{
//         "_id": "5ca82d6a722eee38d8d2b0d0",
//         "order_id": "1",
//         "title": "商品鼠标1",
//         "price": 50,
//         "num": 1,
//         "__v": 0
//     }, {
//         "_id": "5ca82d8c080ded1db0ab347c",
//         "order_id": "1",
//         "title": "商品键盘2",
//         "price": 50,
//         "num": 1,
//         "__v": 0
//     }, {
//         "_id": "5ca82e12e618602704c96737",
//         "order_id": "1",
//         "title": "商品键盘3",
//         "price": 100,
//         "num": 1,
//         "__v": 0
//     }]
// }]

// 根据商品信息, 查找该商品所在的订单
var OrderItemModel = require("../collection/order_item");
var mongoose = require("mongoose")

OrderItemModel.aggregate([ // 原表(order)
    {
        $lookup: {
            from: "order", // 关联表(order)
            localField: "order_id", // 原表(order_id)
            foreignField: "order_id", // 关联表(order_id)
            as: "item_info" // 将查询到的数据放入到item_info中
        }
    },
    {
        $match: {
            _id: mongoose.Types.ObjectId("5ca82e12e618602704c96737")
        }
    },
    // {
    //     $skip: 1
    // },
    // {
    //     $limit: 1
    // }
], function (err, docs) {
    if (err) throw err;
    console.log(JSON.stringify(docs))
})

// [{
//     "_id": "5ca82e12e618602704c96737",
//     "order_id": "1",
//     "title": "商品键盘3",
//     "price": 100,
//     "num": 1,
//     "__v": 0,
//     "item_info": [{
//         "_id": "5ca82baf71c40e2714dd502c",
//         "order_id": "1",
//         "uid": 10,
//         "trade_no": "111",
//         "all_price": 100,
//         "__v": 0
//     }]
// }]