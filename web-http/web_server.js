var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");

function startServer(route, handle) {
    var readResponse = function(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request receivedb "+ pathname);
        var Data = [];
        request.on("error", function(err){
            console.log(err);
        }).on("data", function(chunk) {
            Data.push(chunk);
        }).on("end", function(){
            if(request.method === "POST"){
                if (Data.length > 1e6){
                    request.connection.destory();
                }
                Data = Buffer.concat(Data).toString();
                route(handle, pathname, response, querystring.parse(Data));
            } else if(request.method === "GET") {
                var params = url.parse(request.url, true).query;
            route(handle, pathname, response, params);
            }
        })
    };
    
    var server = http.createServer(readResponse);
    server.listen(3000);
    
    console.log("Server started on localhost port 3000");
}

module.exports.startServer = startServer;
