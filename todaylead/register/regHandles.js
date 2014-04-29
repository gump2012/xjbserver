/**
 * Created by lishiming on 14-4-29.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var regRegister = require("./regRegister");

var regHandle = {};
regHandle["register"] = regRegister.register;

function register(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(regHandle,assistant,response,request);
    }
}

exports.register = register;