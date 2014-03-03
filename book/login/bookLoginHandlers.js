/**
 * Created by gump on 2/20/14.
 */

var postData = '';

var bookuser = require("../../db/db").bookuser;

function bookLogin(response,request){

    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("book Login");
    response.end();
}

function bookRegister(response,request){
    request.setEncoding('utf8');

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        var datajson = JSON.parse(requestData);
        postData = requestData;
        console.log(datajson.mail,datajson.ps);
    });


    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(postData);
    response.end();
}

exports.bookLogin = bookLogin;
exports.bookRegister = bookRegister;

