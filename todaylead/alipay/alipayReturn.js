/**
 * Created by lishiming on 14-5-9.
 */
function alipayreturn(response,request){
    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        console.log(requestData);
        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        response.write("success");
        response.end();
    });
}

exports.alipayreturn = alipayreturn;