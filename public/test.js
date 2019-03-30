var User = require("./assets/user.js");

function create() {

    // var user = new User({
    //         username: 'Tracy McGrady', //用户账号
    //         userpwd: 'abcd', //密码
    //         userage: 37, //年龄
    //         logindate: new Date() //最近登录时间
    //     }
    // );
    // console.dir(user)
    User.create([{
        username: 'Tracy McGrady', //用户账号
        userpwd: 'abcd', //密码
        userage: 37, //年龄
        logindate: new Date() //最近登录时间
    }, 
    {
        username: 'eilinge', //用户账号
        userpwd: 'abcd123', //密码
        userage: 18, //年龄
        logindate: new Date() //最近登录时间
    }],function (err, res) {

        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("create successfully Res:" + res);
        }
    });
}

function insert() {

    var user = new User([{
        username: 'Tracy McGrady', //用户账号
        userpwd: 'abcd', //密码
        userage: 37, //年龄
        logindate: new Date() //最近登录时间
    },
    {
        username: 'eilinge', //用户账号
        userpwd: 'abcd123', //密码
        userage: 18, //年龄
        logindate: new Date() //最近登录时间
    }]);
    // console.dir(user)
    user.save(function (err, res) {

        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("insert successfully Res:" + res);
        }
    });
}

function getByConditions() {
    var wherestr = {
        "username": "Tracy McGrady Eilinge"
    };
    var discoverstr = {
            username: 1,
            userpwd: 1,
            _id: 0
        }
    var limit = {
        skip: 1,
        limit: 2
    }
    // User.findById(wherestr, function (err, res) {
    //     if (err) {
    //         console.log("Error:" + err);
    //     } else {
    //         console.log("Res:" + res);
    //     }
    // })
    User.find(wherestr, discoverstr, limit, function(err, res) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + res);
        }
    })
}

function removeData() {
    var wherestr = {
        username: 'Tracy McGrady',
    };

    User.deleteOne(wherestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Delete successfully");
        }
    })
}
// create()
// insert();
getByConditions();
// removeData();