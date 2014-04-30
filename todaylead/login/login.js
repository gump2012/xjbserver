/**
 * Created by lishiming on 14-4-29.
 */

var querystring = require("querystring");
var publictool = require("../todayPublic/getAssistantValue")
var mongoose = require('mongoose');

function login(response,request){

    request.setEncoding('utf8');

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        var phone = querystring.parse(requestData).phone;
        var password = querystring.parse(requestData).password;
        if(phone && password)
        {
            var accountmodel = mongoose.model('todayaccount');
            accountmodel.findOne({phone:phone},function(err,doc){
                if(doc){
                    if(password != doc.password){
                        publictool.returnErrWithResponseState(response,'密码错误','account_phone_pswrong');
                    }
                    else{
                        var responsevalue = {
                            info: {
                                extra: null,
                                data: {
                                    ticket_id: doc.ticket_id
                                    ,nickname:doc.nickname
                                    ,sex_type:doc.sex_type
                                    ,account_coin:doc.account_coin
                                    ,avatar:doc.avatar
                                    ,phone:phone
                                }
                            },
                            response_status: "success",
                            msg: ""
                        }

                        publictool.returnValue(response,responsevalue);
                    }
                }
                else{
                    publictool.returnErrWithResponseState(response,'无此用户','account_phone_noexists');
                }
            });
        }
        else{
            publictool.returnErrWithResponseState(response,'数据不全','account_data_wrong');
        }
    });
}

exports.login = login;