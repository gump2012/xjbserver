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
        console.log(datajson.mail,datajson.ps);

        bookuser.find({mail:datajson.mail},function(err,buser){
            if(buser.length > 0)
            {
                postData = JSON.stringify({register:'0'});
            }
            else
            {
                var newuser = new buser( {mail:datajson.mail},{ ps : datajson.ps} );

                //保存实例
                newuser.save( function( err, silence ) {
                    if( err )
                    {
                        console.log(err);
                    }
                });

                postData = JSON.stringify({register:'1'});
            }
        });

    });


    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(postData);
    response.end();
}

exports.bookLogin = bookLogin;
exports.bookRegister = bookRegister;

