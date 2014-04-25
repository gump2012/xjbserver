/**
 * Created by lishiming on 14-4-24.
 */
var querystring = require("querystring");
var url = require("url");
var mongoose = require('mongoose');

var publictool = require("../todayPublic/getAssistantValue");

function getMyOrderDetail(response,request){
    var arg = url.parse(request.url).query;
    var order_id = querystring.parse(arg).order_id;

    if(order_id){
        var ticketid = querystring.parse(arg).ticket_id;
        if(ticketid){
//            var ordermodle = mongoose.model('todayOrder');
//            ordermodle.findOne({order_id:order_id,ticket_id:ticketid},function(err,doc){
//                if(doc){
//                    processOrderData(response,request,doc);
//                }
//                else{
//                    publictool.returnErr(response,'no order data');
//                }
//            });


            var responsevalue ={
                "info": {
                    "extra": {
                        "thumb_size": "_100x100.jpg"
                    },
                    "data": {
                        "order_number": "6154755957803502520",
                        "order_status": "等待确认",
                        "pay_status": "0",
                        "shipping_status": "0",
                        "consignee": "李东",
                        "address": "碧桂园17号",
                        "baseaddr": "北京北京市房山区",
                        "mobile": "13646426253",
                        "goods_amount": "71.00",
                        "payment_id": "1",
                        "payment_name": "货到付款",
                        "payment_status": "0",
                        "is_new_style": "1",
                        "payment_fee": "12.00",
                        "orderprice": "83.00",
                        "memo": "",
                        "create_time": "1398228939",
                        "is_transfer": "false",
                        "promotion": null,
                        "goods_number": "2",
                        "status": "0",
                        "payment_notice": "",
                        "goods_list": [
                            {
                                "goods_name": "延时秘籍龟头训练器",
                                "goods_number": "1",
                                "goods_price": "26.00",
                                "goods_attr": "[规格]：萝莉第一次 阶段一适合 送1包油",
                                "pic_url": "http://img.taobaocdn.com/imgextra/http://img04.taobaocdn.com/imgextra/i4/468359490/T2psJZXc8eXXXXXXXX_!!468359490.jpg"
                            },
                            {
                                "goods_name": "玩爆潮品4D黑腔带香味仿真型名器【春蕾行动】",
                                "goods_number": "1",
                                "goods_price": "45.00",
                                "goods_attr": "[规格]：4D香味黑腔-台妹款",
                                "pic_url": "http://img04.taobaocdn.com/imgextra/i4/468359490/T2bvNEXshaXXXXXXXX-468359490.jpg"
                            }
                        ]
                    }
                },
                "response_status": "success",
                "msg": ""
            };

            var postData = JSON.stringify(responsevalue);
            response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
            response.write(postData);
            response.end();
        }
        else{
            var token = querystring.parse(arg).token;

            if(token){
                var ordermodle = mongoose.model('todayOrder');
                ordermodle.findOne({order_id:order_id,token:token},function(err,doc){
                    if(doc){
                        processOrderData(response,request,doc);
                    }
                    else{
                        publictool.returnErr(response,'no order data');
                    }
                });
            }
            else{
                publictool.returnErr(response,'need token or ticketid');
            }
        }
    }
    else{
        publictool.returnErr(response,'need orderid');
    }
}

function processOrderData(response,request,doc){
    var responseValue = {
        order_id:doc.order_id
        ,order_status:doc.order_status
        ,payment_status:doc.payment_states
        ,shipping_status:doc.shipping_states
        ,consignee:doc.consignee
        ,address:doc.address
        ,city:doc.city
        ,province:doc.province
        ,area:doc.area
        ,mobile:doc.mobile
        ,promotion_totalprice:doc.promotion_totalprice
        ,payment_way_id:doc.payment_way_id
        ,creat_time:doc.creat_time
        ,goods_number:0
        ,goods_list:[]
    }
}

exports.getMyOrderDetail = getMyOrderDetail;