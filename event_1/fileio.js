var fs = require("fs");

// var readMe = fs.readFile("readMe.txt", "utf-8", function(err, data){
//     fs.writeFile("writeMe.txt", data, function(){
//         console.log("writeMe.txt hsa finished");
//     })
// });

// var readMe = fs.readFileSync("readMe.txt", "utf-8", function(err, data){
    //     console.log(data);
    // });
// console.log(readMe);

// var waitTill = new Date(new Date().getTime() + 4*1000);
// while (waitTill > new Date()) {};

// console.log("finshed");

fs.mkdir("stuff", function() {
    fs.readFile("readMe.txt", "utf-8", function(err, data){
        fs.writeFile("./stuff/writeMe.txt", data, function(){
            console.log("writeMe.txt has finished");
        })
    })
});

fs.unlink("readMe.txt", function(){
    console.log("delete file successfully");
})