/**
 * Created by lishiming on 14-6-3.
 */
var path = require("path"),
    fs   = require("fs");

exports.help = function(response,request){
    var pathname = "./todaylead/help/todayhelp.html";
    fs.exists(pathname,function(exists){
        if(exists){
            response.writeHead(200, {"Content-Type": "text/html"});
            fs.readFile(pathname,function (err,data){
                response.write(data);
                response.end();
            });
        } else {
            response.writeHead(404, {"Content-Type": "text/html"});
            response.end("<h1>404 Not Found</h1>");
        }
    });
}