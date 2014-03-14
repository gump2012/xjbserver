/**
 * Created by lishiming on 14-3-14.
 */
var url = require("url");
var querystring = require("querystring");
function getAssistantValue(request){
    var arg = url.parse(request.url).query;
    var assistant = querystring.parse(arg).assistant;
    return assistant;
}

exports.getAssistantValue = getAssistantValue;

