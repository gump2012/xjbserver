/**
 * Created by lishiming on 14-4-29.
 */

var querystring = require("querystring");
var publictool = require("../todayPublic/getAssistantValue")
var mongoose = require('mongoose');
var accountFunc = require("../account/accountFunction");

function login(response,request){

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
                        publictool.returnErr(response,'密码错误');
                    }
                    else{
                        var responsevalue = {
                            info: {
                                extra: null,
                                data: {
                                    user_id: doc.ticket_id
                                    ,nickname:doc.nickname
                                    ,sex_type:doc.sex_type
                                    ,account_coin:doc.account_coin
                                    ,avatar:doc.avatar
                                    ,phone:phone
                                }
                            },
                            response_status: "true",
                            msg: ""
                        }

                        publictool.returnValue(response,responsevalue);

                        var deviceid = publictool.getDeviceID(request);
                        if(deviceid){
                            doc.token = deviceid;
                            doc.save(function( err, silence ) {
                                if( err )
                                {
                                    console.log(err);
                                }
                            });

                            var devicemodel = mongoose.model('todayConsigneeInfo');
                            devicemodel.findOne({token:deviceid},function(err,docdevice){
                                if(!docdevice){

                                    var devicevalue = {
                                        token                 :deviceid
                                        ,ticket_id            :doc.ticket_id
                                        ,consignee            :''
                                        ,address              :''
                                        ,mobile               :''
                                        ,baseaddr             :''
                                        ,province             :''
                                        ,city                 :''
                                        ,area                 :''
                                        ,ordernumber          :0
                                        ,create_time          :Date.now().toString()
                                    }

                                    accountFunc.saveDevice(devicevalue);

                                }
                            });
                        }
                    }
                }
                else{
                    publictool.returnErr(response,'无此用户');
                }
            });
        }
        else{
            publictool.returnErr(response,'数据不全');
        }
    });
}

exports.login = login;