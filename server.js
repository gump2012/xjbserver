/**
 * Created by lishiming on 1/15/14.
 */
var http = require("http");
var url = require("url");
var visitRes = require("./visitRes/visitRes");
var getAssistantValue = require("./todaylead/todayPublic/getAssistantValue");

function start(route,handle){
    function onRequest(request,response){
        if(request.url.indexOf("?") == -1){
            if(request.url.indexOf('alipay') != -1){
                route(handle,'/alipay',response,request);
            }
            else{
                visitRes.visitRes(request,response);
            }
        }
        else{
            var main = getAssistantValue.getMainValue(request);
            route(handle,main,response,request);
        }
    }

    http.createServer(onRequest).listen(10080,'114.215.129.162');
    console.log("server has started");
}

exports.start = start;