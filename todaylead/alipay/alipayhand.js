/**
 * Created by gump on 5/31/14.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var alipayto = require("./alipayto");

var alipayHandle = {}
alipayHandle["alipayto"] = alipayto.alipayto;

exports.toalipay = function(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(alipayHandle,assistant,response,request);
    }
}