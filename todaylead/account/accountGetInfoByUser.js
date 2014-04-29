/**
 * Created by lishiming on 14-4-29.
 */

var url = require("url");
var querystring = require("querystring");
var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue")

function getInfoByUser(response,request){
    var arg = url.parse(request.url).query;
    var ticket_id = querystring.parse(arg).ticket_id;
    if(ticket_id){
        var accountmodel = mongoose.model('todayaccount');
        accountmodel.findOne({ticket_id:ticket_id},function(err,doc){
           if(doc){
               var responsevalue = {
                   info: {
                       extra: null,
                       data: {
                           phone:doc.phone
                           ,nickname:doc.nickname
                           ,sex_type:doc.sex_type
                           ,account_coin:doc.account_coin
                           ,avatar:doc.avatar
                       }
                   },
                   response_status: "success",
                   msg: ""
               }

               publictool.returnValue(response,responsevalue);
           }
           else{
               publictool.returnErr(response,'没找到用户信息');
           }
        });
    }
    else{
        publictool.returnErr(response,'没有ticketid');
    }
}

exports.getInfoByUser = getInfoByUser;