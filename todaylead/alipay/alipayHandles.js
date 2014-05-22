/**
 * Created by lishiming on 14-5-9.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");
var querystring = require("querystring");

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
}

exports.alipay = alipay;