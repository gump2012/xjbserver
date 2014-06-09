/**
 * Created by lishiming on 14-4-29.
 */

var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");

function getInfoByUser(response,request){

    var ticket_id = publictool.getRegistID(request);
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
                       }
                   },
                   response_status: "true",
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