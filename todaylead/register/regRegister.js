/**
 * Created by lishiming on 14-4-29.
 */

var querystring = require("querystring");
var publictool = require("../todayPublic/getAssistantValue")
var mongoose = require('mongoose');
var accountdb = require("../../db/today/account/accountdb");

function register(response,request){
    request.setEncoding('utf8');

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        var nickname = querystring.parse(requestData).nickname;
        var phone = querystring.parse(requestData).phone;
        var password = querystring.parse(requestData).password;
        var token = querystring.parse(requestData).token;
        if(nickname && phone && password && token)
        {
            var accountmodel = mongoose.model('todayaccount');
            accountmodel.findOne({phone:phone},function(err,doc){
                if(doc){
                    publictool.returnErrWithResponseState(response,'账号会员已存在','account_email_exists');
                }
                else{
                    var accountvalue = {
                        ticket_id:publictool.MD5(Date.now().toString() + token)
                        ,phone:phone
                        ,avatar:'http://xingjiabi.b0.upaiyun.com/avatar/41b236cdf70c6e0ac9acb1403a04a688.png'
                        ,account_coin:1
                        ,sex_type:0
                        ,nickname:nickname
                    };

                    accountdb.saveAccount(accountvalue);
                    var responsevalue = {
                        info: {
                            extra: null,
                            data: {
                                ticket_id: accountvalue.ticket_id
                                ,phone:accountvalue.phone
                                ,nickname:accountvalue.nickname
                                ,sex_type:accountvalue.sex_type
                                ,account_coin:accountvalue.account_coin
                                ,avatar:accountvalue.avatar
                            }
                        },
                        response_status: "success",
                        msg: ""
                    }

                    publictool.returnValue(response,responsevalue);
                }
            });
        }
        else{
            publictool.returnErrWithResponseState(response,'注册信息不全','account_data_wrong');
        }
    });
}

exports.register = register;