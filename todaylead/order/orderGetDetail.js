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
        var ticketid = publictool.getRegistID(request);
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
            var token = publictool.getDeviceID(request);

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
    console.log(doc.order_states);

    var responseValue = {
        info:{
            extra:{}
            ,data:{
                order_id:doc.order_id
                ,order_status:doc.order_states
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
                ,create_time:doc.creat_time
                ,goods_number:doc.goods_number
                ,shipping_fee:doc.shipping_fee
                ,memo:doc.memo
                ,payment_name:''
                ,goods_list:[]
                ,order_price:new Number(doc.shipping_fee) + new Number(doc.promotion_totalprice)
            }
        }
        ,response_status:'true'
        ,msg:''
    }

    if(doc.productlist){
        getGoodsList(response,request,responseValue,doc.productlist,0);
    }
    else{
        publictool.returnErr(response,'no product list');
    }
}

function getGoodsList(response,request,responseValue,productarr,iindex){
    if(iindex >= productarr.length){
        getPaymentName(response,request,responseValue);
    }
    else{
        var pid = productarr[iindex].pid;
        if(pid)
        {
            var gooditem = {
                goods_name:productarr[iindex].title
                ,goods_number:productarr[iindex].quantity
                ,goods_price:productarr[iindex].price
                ,goods_attr:''
                ,pic_url:''
            }

            var productmodle = mongoose.model('todayProduct');
            productmodle.findOne({pid:pid},'pic_url',function(err,doc){
                if(doc)
                {
                    gooditem.pic_url = doc.pic_url;
                    if(productarr[iindex].attr_list && productarr[iindex].attr_list.length > 0){
                        getGoodsAttr(response,request,responseValue,productarr,iindex,productarr[iindex].attr_list,gooditem);
                    }
                    else{
                        iindex++;
                        responseValue.info.data.goods_list.push(gooditem);
                        getGoodsList(response,request,responseValue,productarr,iindex);
                    }
                }
                else
                {
                    publictool.returnErr(response,'未找到商品数据');
                }
            });
        }
        else{
            publictool.returnErr(response,'pid is undefind');
        }
    }
}

function getGoodsAttr(response,request,responseValue,productarr,iindex,attrarr,gooditem){
    gooditem.goods_price = new Number(gooditem.goods_price) + new Number(attrarr[0].attr_price);
    var attrmodel = mongoose.model('todayProductAttr');
    attrmodel.findOne({goods_attr_id:attrarr[0].goods_attr_id},'attr_value',function(err,doc){
        if(doc){
            gooditem.goods_attr = doc.attr_value;

            iindex++;
            responseValue.info.data.goods_list.push(gooditem);
            getGoodsList(response,request,responseValue,productarr,iindex);
        }
        else{
            publictool.returnErr(response,'未找到属性数据');
        }
    });
}

function getPaymentName(response,request,responseValue){
    var paymodel = mongoose.model('todayPaymentList');
    paymodel.findOne({payment_way_id:responseValue.info.data.payment_way_id},'payment_way_name',function(err,doc){
       if(doc){
           responseValue.info.data.payment_name = doc.payment_way_name;
           publictool.returnValue(response,responseValue);
       }
        else{
           publictool.returnErr(response,'未找到付款方式')
       }
    });
}

exports.getMyOrderDetail = getMyOrderDetail;