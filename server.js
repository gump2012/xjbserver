/**
 * Created by lishiming on 1/15/14.
 */
var http = require("http");
var url = require("url");

function start(route,handle){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        route(handle,pathname,response,request);
    }

    http.createServer(onRequest).listen(10080);
    console.log("server has started");
}

exports.start = start;