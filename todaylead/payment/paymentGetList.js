/**
 * Created by lishiming on 14-3-26.
 */
var mongoose = require('mongoose');

function getList(response,request){

    var categorymodle = mongoose.model('todayPaymentList');

    categorymodle.find({},function(err,doc){

        var responsevalue = {
            info:{
                extra:'',
                data:[]
            },
            response_status:'',
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

        var postData = JSON.stringify(responsevalue);
        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        response.write(postData);
        response.end();
    });
}

exports.getList = getList;