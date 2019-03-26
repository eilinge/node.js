var http = require("http");
var fs = require("fs");

// var readResponse = function(request, response){
//     console.log("Request received");
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello from out application");
//     response.end();
//     // response.end("Hello from out application");
// };

// var readResponse = function(request, response){
//     console.log("Request received");
//     response.writeHead(200, {"Content-Type": "application/json"});
//     var myOBJ = {
//         name: "eilinge",
//         age: "18",
//         sex: "1"
//     }
//     // response.write("Hello from out application");
//     response.end(JSON.stringify(myOBJ));
//     // response.end("Hello from out application");
// };

function startServer() {
    var readResponse = function(request, response){
        console.log("Request received");
        // response.writeHead(200, {"Content-Type": "text/html"});
        response.writeHead(200, {"Content-Type": "text/plain"});
        var myreadStream = fs.createReadStream(__dirname+"/index.html", "utf8")
        // response.write("Hello from out application");
        // response.end(JSON.stringify(myOBJ));
        // response.end("Hello from out application");
        myreadStream.pipe(response);
    };
    
    var server = http.createServer(readResponse);
    
    // server.listen(3000, "127.0.0.1");
    server.listen(3000);
    
    console.log("Server started on localhost port 3000");
}

exports.startServer = startServer;
// JSON.stringify(myOBJ)
// {"name":"eilinge","age":"18","sex":"1"}

// JSON.parse(JSON.stringify(myOBJ))
// {
//     name: "eilinge",
//     age: "18",
//     sex: "1"
// }