/**
 * Created by lishiming on 14-3-14.
 */
var url = require("url");
var querystring = require("querystring");
var crypto = require('crypto');

function getAssistantValue(request){
    var arg = url.parse(request.url).query;
    var assistant = querystring.parse(arg).a;
    return assistant;
}

function getMainValue(request){
    var arg = url.parse(request.url).query;
    var main = querystring.parse(arg).m;
    return main;
}


function getDeviceID(request){
    var arg = url.parse(request.url).query;
    var assistant = querystring.parse(arg).device_id;
    return assistant;
}

function getRegistID(request){
    var arg = url.parse(request.url).query;
    var assistant = querystring.parse(arg).user_id;
    return assistant;
}

function getLimit(request){
    var arg = url.parse(request.url).query;
    var assistant = querystring.parse(arg).count;
    return assistant;
}

function getPage(request){
    var arg = url.parse(request.url).query;
    var assistant = querystring.parse(arg).page;
    return assistant;
}

function getpid(request){
    var arg = url.parse(request.url).query;
    var assistant = querystring.parse(arg).product_id;
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

exports.getMainValue = getMainValue;
exports.getAssistantValue = getAssistantValue;
exports.returnErr = returnErr;
exports.returnValue = returnValue;
exports.returnErrWithResponseState = returnErrWithResponseState;
exports.MD5 = MD5;
exports.getDeviceID = getDeviceID;
exports.getRegistID = getRegistID;
exports.getLimit = getLimit;
exports.getPage = getPage;
exports.getpid = getpid;

exports.releaseip = '115.28.225.137';
exports.testip = '182.92.80.203';

