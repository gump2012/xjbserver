/**
 * Created by lishiming on 14-3-28.
 */

var mongoose = require('mongoose');

function newOrder(response,request){
    request.setEncoding('utf8');

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        var datajson = JSON.parse(requestData);
        var postData = '';



        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        response.write(postData);
        console.log(postData);
        response.end();
    });
}

exports.newOrder = newOrder;