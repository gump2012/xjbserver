/**
 * Created by gump on 3/15/14.
 */

var url  = require("url"),
    path = require("path"),
    fs   = require("fs");

function visitRes(resquest,response){
    var pathname=__dirname+url.parse(resquest.url).pathname;
    console.log(pathname,__dirname);

    if (path.extname(pathname)=="") {
        pathname=__dirname + "/";
    }
    if (pathname.charAt(pathname.length-1)=="/"){
        pathname+="index.html";
    }

    fs.exists(pathname,function(exists){
        if(exists){
            switch(path.extname(pathname)){
                case ".html":
                    response.writeHead(200, {"Content-Type": "text/html"});
                    break;
                case ".js":
                    response.writeHead(200, {"Content-Type": "text/javascript"});
                    break;
                case ".css":
                    response.writeHead(200, {"Content-Type": "text/css"});
                    break;
                case ".gif":
                    response.writeHead(200, {"Content-Type": "image/gif"});
                    break;
                case ".jpg":
                    response.writeHead(200, {"Content-Type": "image/jpeg"});
                    break;
                case ".png":
                    response.writeHead(200, {"Content-Type": "image/png"});
                    break;
                default:
                    response.writeHead(200, {"Content-Type": "application/octet-stream"});
            }
            console.log(pathname);
            fs.readFile(pathname,function (err,data){
                response.end(data);
            });
        } else {
            response.writeHead(404, {"Content-Type": "text/html"});
            response.end("<h1>404 Not Found</h1>");
        }
    });
}

exports.visitRes = visitRes;

