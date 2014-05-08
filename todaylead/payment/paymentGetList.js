/**
 * Created by lishiming on 14-3-26.
 */
var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");

function getList(response,request){

    var categorymodle = mongoose.model('todayPaymentList');

    categorymodle.find({},function(err,doc){

        var responsevalue = {
            info:{
                extra:'',
                data:[]
            },
            response_status:'true',
            msg:''
        }

        for(var i in doc){
            var item = {
                payment_way_id : doc[i].payment_way_id,
                payment_way_name : doc[i].payment_way_name,
                payment_way_desp :doc[i].payment_way_desp
            }

            responsevalue.info.data.push(item);
        }

        publictool.returnValue(response,responsevalue);
    });
}

exports.getList = getList;