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
        ,shipping_fee:doc.shipping_fee
        ,memo:doc.memo
        ,payment_name:''
        ,goods_list:[]
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

            responseValue.goods_number += new Number(gooditem.goods_number);

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
                        responseValue.goods_list.push(gooditem);
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
    attrmodel.findOne({attr_id:attrarr[0].goods_attr_id},'attr_value',function(err,doc){
        if(doc){
            gooditem.goods_attr = doc.attr_value;

            iindex++;
            responseValue.goods_list.push(gooditem);
            getGoodsList(response,request,responseValue,productarr,iindex);
        }
        else{
            publictool.returnErr(response,'未找到属性数据');
        }
    });
}

function getPaymentName(response,request,responseValue){
    var paymodel = mongoose.model('todayPaymentList');
    paymodel.findOne({payment_way_id:responseValue.payment_way_id},'payment_way_name',function(err,doc){
       if(doc){
           responseValue.payment_name = doc.payment_way_name;
           publictool.returnValue(response,responseValue);
       }
        else{
           publictool.returnErr(response,'未找到付款方式')
       }
    });
}

exports.getMyOrderDetail = getMyOrderDetail;