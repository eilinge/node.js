// var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname+"/readMe.txt", "utf8");
// var myWriteStream = fs.createWriteStream(__dirname+"/writeMe.txt", "utf8");

// myReadStream.on("data", function(chunk) {
//     console.log("new chunk received");
//     console.log(chunk);
// })

// var data = "";

// myReadStream.on("data", function(chunk) {
//         // data += chunk;
//         mywriteStream.write(chunk)
//     })

// myReadStream.on("end", function() {
//     console.log(data);
// })

// var writeData = "hello world";

// myWriteStream.write(writeData);
// myWriteStream.end();
// myWriteStream.on("finish", function(){
//     console.log("finish");
// })

// myReadStream.pipe(myWriteStream);

// var crypto = require("crypto");
// var fs = require("fs");
// var zlib = require("zlib");

// var password = new Buffer.from(process.env.PASS || "password");
// var encryptoStream = crypto.createCipher("aes-256-cbc", password);

// var gzip = zlib.createGzip();
// var readStream = fs.createReadStream(__dirname + "/readMe.txt");
// var writeStream = fs.createWriteStream(__dirname + "/out.gz");

// readStream
//     .pipe(encryptoStream)
//     .pipe(gzip)
//     .pipe(writeStream)
//     .on("finish", function() {
//         console.log("done");
//     })


var crypto = require("crypto");
var fs = require("fs");
var zlib = require("zlib");

var password = new Buffer.from(process.env.PASS || "password");
var decryptoStream = crypto.createDecipher("aes-256-cbc", password);

var gzip = zlib.createGunzip();
// var readStream = fs.createReadStream(__dirname + "/readMe.txt");
var readStream = fs.createReadStream(__dirname + "/streampipe.jsout.gz");

readStream
    .pipe(gzip)
    .pipe(decryptoStream)
    .pipe(process.stdout)
    .on("finish", function() {
        console.log("done");
    })