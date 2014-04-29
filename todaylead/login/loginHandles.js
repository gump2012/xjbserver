/**
 * Created by lishiming on 14-4-29.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var mylogin = require("./login");

var loginHandle = {}
loginHandle["login"] = mylogin.login;

function login(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(loginHandle,assistant,response,request);
    }
}

exports.login = login;