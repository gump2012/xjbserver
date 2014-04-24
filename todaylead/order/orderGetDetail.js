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
            var ordermodle = mongoose.model('todayOrder');
            ordermodle.findOne({order_id:order_id,ticket_id:ticketid},function(err,doc){
                if(doc){
                    processOrderData(response,request,doc);
                }
                else{
                    publictool.returnErr(response,'no order data');
                }
            });
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
    }
}

exports.getMyOrderDetail = getMyOrderDetail;