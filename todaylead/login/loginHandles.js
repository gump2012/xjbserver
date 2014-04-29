/**
 * Created by lishiming on 14-4-29.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var categoryHandle = {}

function login(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(categoryHandle,assistant,response,request);
    }
}

exports.login = login;