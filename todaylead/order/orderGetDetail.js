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
                ,status:doc.order_states
                ,payment_status:doc.payment_states
                ,transport_status:doc.shipping_states
                ,consignee:doc.consignee
                ,specific_address:doc.address
                ,city_code:doc.city
                ,province_code:doc.province
                ,area_code:doc.area
                ,phone_number:doc.mobile
                ,product_total_price:doc.promotion_totalprice
                ,payment_way_id:doc.payment_way_id
                ,create_time:doc.creat_time
                ,product_count:doc.goods_number
                ,transport_price:doc.shipping_fee
                ,memo:doc.memo
                ,payment_name:''
                ,product_list:[]
                ,price:new Number(doc.shipping_fee) + new Number(doc.promotion_totalprice)
                ,product_price_reduce:0.00
                ,transport_price_reduce:0.00
                ,express_link:''
            }
        }
        ,response_status:'true'
        ,msg:''
    }

    if(doc.express_name && doc.express_number){
        var strurl = 'http://m.kuaidi100.com/index_all.html?type='+doc.express_name+'&postid='+doc.express_number;
        responseValue.info.data.express_link = strurl;
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
                name:productarr[iindex].title
                ,count:productarr[iindex].quantity
                ,price:productarr[iindex].price
                ,attr:''
                ,picture:''
            }
            console.log(gooditem.price);
            var productmodle = mongoose.model('todayProduct');
            productmodle.findOne({pid:pid},'pic_url',function(err,doc){
                if(doc)
                {
                    gooditem.picture = doc.pic_url;
                    if(productarr[iindex].attr_list && productarr[iindex].attr_list.length > 0){
                        getGoodsAttr(response,request,responseValue,productarr,iindex,productarr[iindex].attr_list,gooditem);
                    }
                    else{
                        iindex++;
                        responseValue.info.data.product_list.push(gooditem);
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
    gooditem.price = new Number(gooditem.price) + new Number(attrarr[0].attr_price);
    var attrmodel = mongoose.model('todayProductAttr');
    attrmodel.findOne({goods_attr_id:attrarr[0].goods_attr_id},'attr_value',function(err,doc){
        if(doc){
            gooditem.attr = doc.attr_value;

            iindex++;
            responseValue.info.data.product_list.push(gooditem);
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