/**
 * Created by lishiming on 1/16/14.
 */
var querystring = require("querystring"),
    fs = require("fs");

function start(response,request){
    console.log("Request handler 'start' was called.");

    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("hello");
    response.end();
}

function upload(response,request){
    console.log("Request handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request,function(error,fields,files){
        console.log("parsing done");
        fs.renameSync(files.upload.path,"/Users/lishiming/Desktop/gwork/node/jjtest/tmp/weichao.jpg");
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show/'>");
        response.end();
    });
}

exports.start = start;
exports.upload = upload;