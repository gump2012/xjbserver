/**
 * Created by lishiming on 14-5-9.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var alipayreturn = require("./alipayReturn");

var alipayHandle = {}
alipayHandle["return"] = alipayreturn.alipayreturn;

function alipay(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(alipayHandle,assistant,response,request);
    }
}

exports.alipay = alipay;