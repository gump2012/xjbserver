/**
 * Created by lishiming on 14-3-14.
 */
var url = require("url");
var querystring = require("querystring");
var crypto = require('crypto');

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
        response_status:'false',
        msg:errstr
    }
    var postData = JSON.stringify(responsevalue);
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    response.write(postData);
    response.end();
}

function returnErrWithResponseState(response,errstr,statestr){
    var responsevalue = {
        info:{
            extra:'',
            data:''
        },
        response_status:statestr,
        msg:errstr
    }
    var postData = JSON.stringify(responsevalue);
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    response.write(postData);
    response.end();
}

function returnValue(response,responsevalue)
{
    responsevalue.response_status = 'true';
    var postData = JSON.stringify(responsevalue);
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    response.write(postData);
    response.end();
}

function MD5(str, encoding) {
    return crypto.createHash('md5').update(str).digest(encoding || 'hex');
}

exports.getAssistantValue = getAssistantValue;
exports.returnErr = returnErr;
exports.returnValue = returnValue;
exports.returnErrWithResponseState = returnErrWithResponseState;
exports.MD5 = MD5;

