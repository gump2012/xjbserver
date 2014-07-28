/**
 * Created by lishiming on 14-7-28.
 */
var getAssistantValue = require("../getAssistantValue");
var route = require("../../../router");
var querystring = require("querystring");
var url = require("url");

exports.sendmail = function(response,request){
    var arg = url.parse(request.url).query;
    var order_id = querystring.parse(arg).orderid;
    if(order_id){
        var strurl = 'http://localhost:8888/sendmail?orderid='+order_id;
        var mailrequest = require('request');
        mailrequest(strurl, function (error, mailresponse, body) {
            if (!error && mailresponse.statusCode == 200) {
                console.log(body); // Print the google web page.

                response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                response.write("success");
                response.end();
            }
            else{
                console.log(error);
                response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                response.write("error");
                response.end();
            }

        });
    }
    else{
        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        response.write("no data");
        response.end();
    }

}

var testHandle = {}
testHandle["sendmail"] = exports.sendmail;

function test(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    if(assistant){
        console.log(assistant);
        route.route(testHandle,assistant,response,request);
    }
}

exports.test = test;