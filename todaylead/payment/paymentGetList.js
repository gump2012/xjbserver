/**
 * Created by lishiming on 14-3-26.
 */
var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");

function getList(response,request){

    var categorymodle = mongoose.model('todayPaymentList');

    categorymodle.find({},function(err,doc){

        var responsevalue = {
            desc:{
                extra:'',
                data:[]
            },
            response_status:'true',
            msg:''
        }

        for(var i in doc){
            var item = {
                payment_way_id : doc[i].payment_way_id,
                name           : doc[i].payment_way_name,
                desc           : doc[i].payment_way_desp
            }

            responsevalue.desc.data.push(item);
        }

        publictool.returnValue(response,responsevalue);
    });
}

exports.getList = getList;