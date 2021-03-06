/**
 * Created by lishiming on 14-4-29.
 */

var querystring = require("querystring");
var publictool = require("../todayPublic/getAssistantValue")
var mongoose = require('mongoose');

var accountfunc = require("../account/accountFunction");

function register(response,request){
    request.setEncoding('utf8');

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        var nickname = querystring.parse(requestData).nickname;
        var phone = querystring.parse(requestData).phone_number;
        var password = querystring.parse(requestData).password;
        var token = publictool.getDeviceID(request);
        console.log(nickname)
        if(nickname && phone && password && token)
        {
            var accountmodel = mongoose.model('todayaccount');
            accountmodel.findOne({phone:phone},function(err,doc){
                if(doc){
                    publictool.returnErr(response,'账号会员已存在');
                }
                else{
                    var accountvalue = {
                        ticket_id:publictool.MD5(Date.now().toString() + token)
                        ,phone              :phone
                        ,avatar             :'http://xingjiabi.b0.upaiyun.com/avatar/41b236cdf70c6e0ac9acb1403a04a688.png'
                        ,account_coin       :1
                        ,sex_type           :0
                        ,nickname           :nickname
                        ,token              :token
                        ,password           :password
                        ,create_time        :Date.now().toString()
                        ,ordernumber        :0
                        ,province_code      :''
                        ,city_code          :''
                        ,area_code          :''
                        ,address            :''
                        ,address_phone      :''
                        ,consignee          :''
                    };

                    accountfunc.saveUser(accountvalue);

                    var responsevalue = {
                        info: {
                            extra: null,
                            data: {
                                user_id: accountvalue.ticket_id
                                ,phone:accountvalue.phone
                                ,nickname:accountvalue.nickname
                                ,sex_type:accountvalue.sex_type
                                ,account_coin:accountvalue.account_coin
                            }
                        },
                        response_status: "true",
                        msg: ""
                    }

                    publictool.returnValue(response,responsevalue);
                }
            });
        }
        else{
            publictool.returnErr(response,'注册信息不全');
        }
    });
}

exports.register = register;