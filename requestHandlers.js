/**
 * Created by lishiming on 1/16/14.
 */

function start(response,request){

    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("hello");
    response.end();
}

exports.start = start;