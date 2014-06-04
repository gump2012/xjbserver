/**
 * Created by lishiming on 14-5-13.
 */
var querystring = require("querystring");
var url = require("url");
var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");

function deleteorder(response,request){

    var arg = url.parse(request.url).query;
    var order_id = querystring.parse(arg).order_id;
    if(order_id){
        var ordermodle = mongoose.model('todayOrder');
        ordermodle.findOne({order_id:order_id},function(err,doc){
            if(doc){
                if(doc.order_states == 0){
                    if(doc.payment_states == 0){
                        if(doc.shipping_states == 0){
                            ordermodle.remove({ order_id:order_id }, function(err) {
                                if (!err) {
                                    var responsevalue = {
                                        info: {
                                            extra: null,
                                            data: null
                                        },
                                        response_status: "true",
                                        msg: "成功取消订单"
                                    };

                                    publictool.returnValue(response,responsevalue);
                                }
                                else {
                                    publictool.returnErr(response,'删除出现错误');
                                }
                            });

                        }
                        else{
                            publictool.returnErr(response,'商品已经发货啦');
                        }
                    }
                    else{
                        publictool.returnErr(response,'订单已经付款啦');
                    }
                }
                else{
                    publictool.returnErr(response,'订单已经确定啦');
                }
            }
            else{
                publictool.returnErr(response,'no order data');
            }
        });
    }
    else{
        publictool.returnErr(response,'need orderid');
    }
}

exports.deleteorder = deleteorder;