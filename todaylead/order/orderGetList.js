/**
 * Created by gump on 4/25/14.
 */
var publicfun = require("../todayPublic/getAssistantValue");

var querystring = require("querystring");
var url = require("url");
var mongoose = require('mongoose');

function getMyOrderList(response,request){
    var arg = url.parse(request.url).query;
    var ticket_id = querystring.parse(arg).ticket_id;

    if(ticket_id){

        var ordermodel = mongoose.model('todayOrder');

        ordermodel.find({ticket_id:ticket_id},function(err,docs){
            var responsevalue = {
                "info": {
                    "extra": {},
                    "data": []
                },
                "response_status": "true",
                "msg": ""
            }

           if(docs){
               for(i in docs){
                   var item = {
                       order_number:docs[i].order_id
                       ,orderprice:docs[i].promotion_totalprice + docs[i].shipping_fee
                       ,create_time:doc[i].creat_time
                       ,order_status:doc[i].order_states
                       ,pay_status:doc[i].payment_states
                       ,shipping_status:doc[i].shipping_states
                       ,payment_id:docs[i].payment_way_id
                       ,payment_name:doc[i].payment_name
                       ,goods_number:doc[i].goods_number
                       ,pic_url:''
                   }

                   if(docs[i].productlist.length > 0){
                       item.pic_url = docs[i].productlist[0].pic_url;
                   }

                   responsevalue.data.push(item);
               }
           }
           else{
               responsevalue.response_status = "no order";
           }

            publicfun.returnValue(response,responsevalue);
        });
    }
    else{
        var token = querystring.parse(arg).token;
        if(token){
            var ordermodel = mongoose.model('todayOrder');

            ordermodel.find({token:token},function(err,docs){
                var responsevalue = {
                    "info": {
                        "extra": {},
                        "data":[]
                    },
                    "response_status": "success",
                    "msg": ""
                }

                if(docs){
                    for(i in docs){
                        var item = {
                            order_number:docs[i].order_id
                            ,orderprice:docs[i].promotion_totalprice + docs[i].shipping_fee
                            ,create_time:docs[i].creat_time
                            ,order_status:docs[i].order_states
                            ,pay_status:docs[i].payment_states
                            ,shipping_status:docs[i].shipping_states
                            ,payment_id:docs[i].payment_way_id
                            ,payment_name:docs[i].payment_name
                            ,goods_number:docs[i].goods_number
                            ,pic_url:''
                        }

                        if(docs[i].productlist.length > 0){
                            item.pic_url = docs[i].productlist[0].pic_url;
                        }

                        responsevalue.info.data.push(item);
                    }
                }
                else{
                    responsevalue.response_status = "no order";
                }

                publicfun.returnValue(response,responsevalue);
            });
        }
        else{
            publicfun.returnErr(response,'no token or tickid');
        }
    }

}

exports.getMyOrderList = getMyOrderList;