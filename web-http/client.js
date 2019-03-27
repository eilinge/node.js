var startServer = require("./web_server");
var router = require("./router")
var handler = require("./handler");


var handle = {};
handle["/"] = handler.home;
handle["/home"] = handler.home;
handle["/review"] = handler.review;
handle["/api/vi/records"] = handler.api_vi_records;


startServer.startServer(router.route, handle);