/**
 * Created by gump on 2/20/14.
 */

var mongoose = require('mongoose');
var querystring = require("querystring");
var crypto = require('crypto');

exports.bookLogin = function (response,request){

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {

        if(requestData != ''){
            var ps = querystring.parse(requestData).password;
            var mail = querystring.parse(requestData).email;
            if(ps && mail){
                responsevalue = {
                    "user_id":"00255"
                    ,"data":{
                        "nick_name":"xxx"
                        ,"sex":"男"
                        ,"age":"32"
                        ,"grade":"12"
                        ,"notice":"xxxxxxxxxxxxxx"
                        ,"address":"xxxxxx"
                        ,"shop_name":"xxxxx"
                        ,"phone":"1251522"
                        ,"publish":"1"
                        ,"reply":"1"
                        ,"collect":"-1"
                        ,"follow":"-1"
                        ,"photo_show":"1"
                        ,"vedio_show":"-1"
                        ,"letter":"-1"
                    }
                }

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
                responsevalue = {
                    info:-1
                    ,user_id:''
                };
                var postData = JSON.stringify(responsevalue);
                response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                response.write(postData);
                response.end();
            }
        }
        else{
            responsevalue = {
                info:-1
                ,user_id:''
            };
            var postData = JSON.stringify(responsevalue);
            response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
            response.write(postData);
            response.end();
        }
    });
}

exports.bookRegister = function (response,request){

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {

        if(requestData != ''){
            var nickname = querystring.parse(requestData).nickname;
            var password = querystring.parse(requestData).password;
            var email = querystring.parse(requestData).email;
            if(nickname && password && email){
                var bookuser = mongoose.model('user');
                bookuser.find({mail:datajson.mail},function(err,buser){
                    responsevalue = {
                        info:-1
                        ,user_id:''
                    };
                    if(buser.length == 0)
                    {
                        var newuser = new bookuser({mail:datajson.mail, ps:datajson.ps});

                        //保存实例
                        newuser.save( function( err, silence ) {
                            if( err )
                            {
                                console.log(err);
                            }
                        });

                        responsevalue.info = 1;
                        responsevalue.user_id = crypto.createHash('md5').update(Date.now().toString()).digest(encoding || 'hex');
                    }

                    var postData = JSON.stringify(responsevalue);
                    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                    response.write(postData);
                    response.end();
                });
            }
            else{
                responsevalue = {
                    info:-1
                    ,user_id:''
                };
                var postData = JSON.stringify(responsevalue);
                response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                response.write(postData);
                response.end();
            }
        }
        else{
            responsevalue = {
                info:-1
                ,user_id:''
            };
            var postData = JSON.stringify(responsevalue);
            response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
            response.write(postData);
            response.end();
        }
    });
}

