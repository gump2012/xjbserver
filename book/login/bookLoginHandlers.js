/**
 * Created by gump on 2/20/14.
 */

var mongoose = require('mongoose');

function bookLogin(response,request){
    request.setEncoding('utf8');

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {

        if(requestData != ''){
            var datajson = JSON.parse(requestData);
            console.log(datajson.mail,datajson.ps);
            var postData = '';
            var bookuser = mongoose.model('user');
            bookuser.find({mail:datajson.mail},function(err,buser){
                if(buser.length > 0)
                {
                    var dbuser = buser[0];
                    if(dbuser.ps == datajson.ps)
                    {
                        postData = JSON.stringify({booklogin:'1'});
                    }
                    else
                    {
                        postData = JSON.stringify({booklogin:'2'});
                    }

                }
                else
                {
                    postData = JSON.stringify({booklogin:'0'});
                }

                response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                response.write(postData);
                console.log(postData);
                response.end();
            });
        }
        else{
            response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
            response.write('木有数据');
            response.end();
        }
    });
}

function bookRegister(response,request){
    request.setEncoding('utf8');

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {

        if(requestData != ''){
            var datajson = JSON.parse(requestData);
            console.log(datajson.mail,datajson.ps);
            var postData = '';
            var bookuser = mongoose.model('user');
            bookuser.find({mail:datajson.mail},function(err,buser){
                if(buser.length > 0)
                {
                    postData = JSON.stringify({register:'0'});
                }
                else
                {
                    var newuser = new bookuser({mail:datajson.mail, ps:datajson.ps});

                    //保存实例
                    newuser.save( function( err, silence ) {
                        if( err )
                        {
                            console.log(err);
                        }
                    });

                    postData = JSON.stringify({register:'1'});
                }

                response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                response.write(postData);
                console.log(postData);
                response.end();
            });
        }
        else{
            response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
            response.write('木有数据');
            response.end();
        }
    });
}

exports.bookLogin = bookLogin;
exports.bookRegister = bookRegister;

