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

function returnErr(response,errstr){
    var responsevalue = {
        info:{
            extra:'',
            data:''
        },
        response_status:'',
        msg:errstr
    }
    var postData = JSON.stringify(responsevalue);
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    response.write(postData);
    response.end();
}

exports.getAssistantValue = getAssistantValue;
exports.returnErr = returnErr;

