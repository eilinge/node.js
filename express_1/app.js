var multiparty = require("multiparty");
var http = require("http");
var util = require("util");
var fs = require("fs");
 
http.createServer(function(req, res) {
  if (req.url === "/upload" && req.method === "POST") {
    // parse a file upload
    var form = new multiparty.Form();
 
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {"content-type": "text/plain"});
      res.write("received upload:\n\n");
      res.end(util.inspect({fields: fields, files: files}));
    });
    return;
  }
  console.log("hello");
  // show a file upload form
  res.writeHead(200, {"content-type": "text/html"});
  fs.createReadStream(__dirname+"/assets/web.html", "utf8").pipe(res)

}).listen(8080);