/**
 * Created by lishiming on 14-4-29.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var getInfo = require("./accountGetInfoByUser");

var accountHandle = {}
accountHandle["getUserInfo"] = getInfo.getInfoByUser;

function account(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(accountHandle,assistant,response,request);
    }
}

exports.account = account;