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

function startServer(route, handle) {
    var readResponse = function(request, response){
        console.log("Request receivedb "+ request.url);
        route(handle, request.url, response);
        // if (request.url === "/" || request.url === "/home"){
        //     response.writeHead(200, {"Content-Type": "text/html"});
        //     fs.createReadStream(__dirname+"/html/index.html", "utf8").pipe(response);
        // } else if ( request.url === "/review") {
        //     response.writeHead(200, {"Content-Type": "text/html"});
        //     fs.createReadStream(__dirname+"/html/review.html", "utf8").pipe(response);
        // } else if ( request.url === "/api/vi/records") {
        //     response.writeHead(200, {"Content-Type": "application/json"});
        //     var myOBJ = {
        //                 name: "eilinge",
        //                 age: "18",
        //                 sex: "1"
        //             }
        //     response.end(JSON.stringify(myOBJ));
        // } else {
        //     response.writeHead(200, {"Content-Type": "text/html"});
        //     fs.createReadStream(__dirname+"/html/404.html", "utf8").pipe(response);
        // }
    };
    
    var server = http.createServer(readResponse);
    
    // server.listen(3000, "127.0.0.1");
    server.listen(3000);
    
    console.log("Server started on localhost port 3000");
}

module.exports.startServer = startServer;
// JSON.stringify(myOBJ)
// {"name":"eilinge","age":"18","sex":"1"}

// JSON.parse(JSON.stringify(myOBJ))
// {
//     name: "eilinge",
//     age: "18",
//     sex: "1"
// }

// response.writeHead(200, {"Content-Type": "text/html"});
// // response.writeHead(200, {"Content-Type": "text/plain"});
// var myreadStream = fs.createReadStream(__dirname+"/index.html", "utf8")
// // response.write("Hello from out application");
// // response.end(JSON.stringify(myOBJ));
// // response.end("Hello from out application");
// myreadStream.pipe(response);