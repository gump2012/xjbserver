/**
 * Created by lishiming on 14-3-28.
 */

var mongoose = require('mongoose');
var crypto = require('crypto');
var publictool = require("../todayPublic/getAssistantValue");
var querystring = require("querystring");

function newOrder(response,request){

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        var strjson = querystring.parse(requestData).order_json;
        if(strjson){
            var datajson = JSON.parse(strjson);
            if(datajson){
                var regist_id = publictool.getRegistID(request);
                var device_id = publictool.getDeviceID(request);
                if(regist_id || device_id){
                    var item = {
                        city:datajson.city
                        ,province:datajson.province
                        ,area:datajson.area
                        ,consignee:datajson.consignee
                        ,mobile:datajson.mobile
                        ,memo:datajson.memo
                        ,ticket_id:regist_id
                        ,token:device_id
                        ,address:datajson.address
                        ,shipping_fee:datajson.shipping_fee
                        ,promotion_totalprice:datajson.promotion_totalprice
                        ,payment_way_id:datajson.payment_way_id
                        ,order_id:MD5(Date.now().toString())
                        ,creat_time:Date.now().toString()
                        ,order_states:0
                        ,payment_states:0
                        ,shipping_states:0
                        ,goods_number:0
                        ,payment_name:''
                        ,productlist:[]
                    }

                    if(datajson.productlist)
                    {
                        for(i in datajson.productlist)
                        {
                            var productitem = {
                                title:datajson.productlist[i].title
                                ,price:datajson.productlist[i].price
                                ,pid:datajson.productlist[i].pid
                                ,quantity:datajson.productlist[i].quantity
                                ,pic_url:''
                                ,attr_list:[]
                            }

                            item.goods_number += new Number(productitem.quantity);

                            if(datajson.productlist[i].attr_list)
                            {
                                for(j in datajson.productlist[i].attr_list)
                                {
                                    var attritem = {
                                        goods_attr_id:datajson.productlist[i].attr_list[j].goods_attr_id
                                        ,attr_price:datajson.productlist[i].attr_list[j].attr_price
                                    }

                                    productitem.attr_list.push(attritem);
                                }
                            }

                            item.productlist.push(productitem);
                        }
                    }

                    var pidnumber = item.productlist.length;
                    findPid(item,response,pidnumber);
                }
                else{
                    publictool.returnErr(response,'没有注册id或设备id');
                }
            }
            else
            {
                publictool.returnErr(response,'数据错误');
            }

        }
        else{
            publictool.returnErr(response,'数据为空');
        }

    });
}

function MD5(str, encoding) {
    return crypto.createHash('md5').update(str).digest(encoding || 'hex');
}

function findPid(item,response,pidnumber){

    if(pidnumber <= 0){
        comparePrice(item,response);
    }
    else{
        var productmodle = mongoose.model('todayProduct');
        var pid = item.productlist[pidnumber-1].pid;
        productmodle.findOne({pid:pid},'price pic_url',function(err,doc){
            if(doc)
            {
                item.productlist[pidnumber - 1].pic_url = doc.pic_url;
                if(item.productlist[pidnumber - 1].price == doc.price){
                    pidnumber--;
                    var attrnumber = item.productlist[pidnumber].attr_list.length;
                    if(attrnumber > 0){
                        findAttr(item,response,pidnumber,attrnumber);
                    }
                    else{
                        findPid(item,response,pidnumber);
                    }
                }
                else{
                    var strerr = item.productlist[pidnumber - 1].pid + '商品价格不符';
                    publictool.returnErr(response,strerr);
                }

            }
            else
            {
                publictool.returnErr(response,'未找到商品数据');
            }
        });
    }
}

function comparePrice(item,response){
    var totalprice = 0.00;
    for(i in item.productlist){
        var attrprice = 0.00;
        for(j in item.productlist[i].attr_list){
            attrprice += new Number(item.productlist[i].attr_list[j].attr_price);
        }
        totalprice += (new Number(item.productlist[i].price) + attrprice) * item.productlist[i].quantity;
    }

    if(totalprice != item.promotion_totalprice){
        publictool.returnErr(response,'商品总价不对');
    }
    else{
        var shipfee = 0.00;
        if(item.payment_way_id == 1){
            if(totalprice < 1000.00){
                shipfee = 0.00;
            }
        }
        else if(item.payment_way_id == 2){
            if(totalprice < 1000.00){
                shipfee = 0.00;
            }
        }

        if(shipfee != item.shipping_fee)
        {
            publictool.returnErr(response,'运费不对');
        }
        else{
            var consigneemodle = mongoose.model('todayConsigneeInfo');
            var consigneeitem = {
                token:item.token
                ,consignee:item.consignee
                ,address:item.address
                ,mobile:item.mobile
                ,baseaddr:item.baseaddr
                ,ticket_id:item.ticket_id
                ,province:item.province
                ,city:item.city
                ,area:item.area
            }

            var consigneeEntity = new consigneemodle(consigneeitem);
            consigneeEntity.save();

            findPaymentName(response,item);
        }
    }
}

function findAttr(item,response,pidnumber,attrnumber){
    if(attrnumber > 0){
        attrnumber--;
        var goodattrid = item.productlist[pidnumber].attr_list[attrnumber].goods_attr_id;

        var attrmodel = mongoose.model('todayProductAttr');
        attrmodel.findOne({goods_attr_id:goodattrid},'attr_price',function(err,doc){
            if(doc)
            {
                if(item.productlist[pidnumber].attr_list[attrnumber].attr_price == doc.attr_price){
                    findAttr(item,response,pidnumber,attrnumber);
                }
                else{
                    var strerr = item.productlist[pidnumber].attr_list[attrnumber].goods_attr_id + '商品属性价格不符';
                    publictool.returnErr(response,strerr);
                }

            }
            else
            {
                publictool.returnErr(response,'未找到商品属性数据');
            }
        });
    }
    else{
        findPid(item,response,pidnumber);
    }
}

function findPaymentName(response,item){

    var paymentmodel = mongoose.model('todayPaymentList');
    paymentmodel.findOne({payment_way_id:item.payment_way_id},'payment_way_name',function(err,doc){
        if(doc){
            item.payment_name = doc.payment_way_name;

            var ordermodle = mongoose.model('todayOrder');
            var orderEntity = new ordermodle(item);
            orderEntity.save();

            var orderprice = new Number(item.shipping_fee) + new Number(item.promotion_totalprice);
            var responsevalue = {
                info:{
                    extra:'',
                    data:{
                        order_id:item.order_id
                        ,orderprice:orderprice
                        ,create_time:item.creat_time
                        ,order_status:item.order_states
                        ,payment_way_id:item.payment_way_id
                        ,payment_status:item.payment_states
                        ,payment_name:item.payment_name
                        ,alipay_submit_data:''
                    }
                },
                response_status:'true',
                msg:''
            }

            if(item.payment_way_id == 2){

                var orderstr = '_input_charset="utf-8"' +
                    '&body="an order from jinritoupai"' +
                    '&notify_url="http://115.28.225.137:10080/alipay"' +
                    '&out_trade_no="' + responsevalue.info.data.order_id + '"' +
                    '&partner="2088411489511305"' +
                    '&payment_type="1"' +
                    '&seller_id="toupai@3pshow.com"' +
                    '&service="mobile.securitypay.pay"' +
                    '&subject="jinritoupai order"' +
                    '&total_fee="' + responsevalue.info.data.orderprice + '"';

                makeRsa(orderstr,responsevalue,response);
            }
            else{
                publictool.returnValue(response,responsevalue);
            }
        }
        else{
            publictool.returnErr(response,'未找到付款方式');
        }
    });
}

function makeRsa(strcontent,responsevalue,response){
    var fs = require('fs');

    fs.readFile('rsa_private_key.pem','utf8', function(err, data) {
        if(err) {
            console.error(err);
            publictool.returnErr(response,'读取支付宝私钥出现错误');
        } else {
            var signer = crypto.createSign('RSA-SHA1');
            signer.update(strcontent);
            var sign = signer.sign(data, "base64");
            sign = encodeURIComponent(sign);

            responsevalue.info.data.alipay_submit_data = strcontent +
                '&sign_type="RSA"' +
                '&sign="' + sign + '"';
            publictool.returnValue(response,responsevalue);
        }
    });
}

exports.newOrder = newOrder;