/**
 * Created by lishiming on 14-5-9.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");
var querystring = require("querystring");
var alipayreturn = require("./alipayReturn");

var alipayHandle = {}
alipayHandle["return"] = alipayreturn.alipayreturn;

function alipay(response,request){

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        console.log(requestData);
        console.log(querystring.parse(requestData).out_trade_no);
        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        response.write("success");
        response.end();
    });

    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    console.log('caoninaibi');
    if(assistant){
        route.route(alipayHandle,assistant,response,request);
    }
}

exports.alipay = alipay;