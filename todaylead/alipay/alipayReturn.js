/**
 * Created by lishiming on 14-5-9.
 */
function alipayreturn(response,request){
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    response.write("success");
    response.end();
}

exports.alipayreturn = alipayreturn;