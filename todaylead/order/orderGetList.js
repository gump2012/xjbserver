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
//        var responsevalue = {
//            "info": {
//                "extra": {
//                    "thumb_size": "_100x100.jpg"
//                },
//                "data": [
//                    {
//                        "order_number": "6154791084460902050",
//                        "orderprice": "111.00",
//                        "create_time": "1398229290",
//                        "order_status": "等待确认",
//                        "pay_status": "0",
//                        "shipping_status": "0",
//                        "payment_id": "1",
//                        "is_new_style": "1",
//                        "payment_status": "0",
//                        "payment_name": "货到付款",
//                        "is_transfer": "false",
//                        "goods_number": "1",
//                        "pic_url": "http://img01.taobaocdn.com/imgextra/i1/468359490/T2qRFkXB0XXXXXXXXX_!!468359490.jpg"
//                    },
//                    {
//                        "order_number": "6154739752237713378",
//                        "orderprice": "304.00",
//                        "create_time": "1398228777",
//                        "order_status": "等待确认",
//                        "pay_status": "0",
//                        "shipping_status": "0",
//                        "payment_id": "1",
//                        "is_new_style": "1",
//                        "payment_status": "0",
//                        "payment_name": "货到付款",
//                        "is_transfer": "false",
//                        "goods_number": "3",
//                        "pic_url": "http://img03.taobaocdn.com/imgextra/i3/468359490/T2MAl5XxXaXXXXXXXX-468359490.jpg"
//                    }
//                ]
//            },
//            "response_status": "success",
//            "msg": ""
//        }

        var ordermodel = mongoose.model('todayOrder');

        ordermodel.find({ticket_id:ticket_id},function(err,docs){
            var responsevalue = {
                "info": {
                    "extra": {},
                    "data": []
                },
                "response_status": "success",
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