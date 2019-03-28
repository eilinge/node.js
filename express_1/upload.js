var express = require("express");
var fs = require("fs")
var bodyParser = require("body-parser")
var multer = require("multer")

var app = express();
app.use(express.static("assets"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: "/tmp"}).array("image"))

app.get("/upload.html", function(req, res) {
    res.sendFile( __dirname + "/" + "upload.html")
})

app.post("/file_upload" ,function(req, res) {
    console.dir(req.files);
    var des_file = __dirname + "/assets/" + req.files[0].originalname;
    console.log(des_file);
    fs.readFile( req.files[0].path, function(err, data) {
        fs.writeFile(des_file, data, function(err){
            if(err){
                console.log(err);
            } else {
                response = {
                    message: "File uploaded successfully",
                    filename: req.files[0].originalname
                }
            }
            console.log( response);
            res.end(JSON.stringify( response));
        })
    })
})

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log( "You are at http://%s:%s", host, port)
})