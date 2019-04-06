var Focus = require("../collection/focus");

testFocus = new Focus({
    title: "this is a focus test",
    pic: "www.xxx.com/x.png",
    redirest: "www.baidu.com"
})


console.log(testFocus.title, testFocus.pic)

// testFocus.save(function (err, doc) {
//     if (err) throw err;

//     console.log("insert successfully");
//     Focus.find({}, function (err, data) {
//         if (err) throw err;
//         console.log("find data from Focus", data)
//     })
// })

// Focus.find({}, function (err, data) {
//     if (err) throw err;
//     console.log("find data from Focus", data)
// })