/**
 * Created by lishiming on 14-7-1.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");
var todayabout = require("./todayabout");

var categoryHandle = {}
categoryHandle["about"] = todayabout.todayabout;

exports.common = function (response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(categoryHandle,assistant,response,request);
    }
}