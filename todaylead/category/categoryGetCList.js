/**
 * Created by lishiming on 14-3-14.
 */

function getCategoryList(response,request){
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("caonimabi");
    response.end();
}

exports.getCategoryList = getCategoryList;