/**
 * Created by lishiming on 1/15/14.
 */
var http = require("http");
var url = require("url");
var visitRes = require("./visitRes/visitRes");
var getAssistantValue = require("./todaylead/todayPublic/getAssistantValue");

function start(route,handle){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        if(pathname.indexOf("/res/") != -1){
            visitRes.visitRes(request,response);
        }
        else{
            var main = getAssistantValue.getMainValue(request);
            route(handle,main,response,request);
        }
    }

    http.createServer(onRequest).listen(10080);
    console.log("server has started");
}

exports.start = start;