/**
 * Created by gump on 5/31/14.
 */
var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");
var querystring = require("querystring");
var crypto = require('crypto');

exports.alipayto = function (response,request){

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        var orderid = querystring.parse(requestData).order_id;
        var total_fee = querystring.parse(requestData).price;
        if(orderid && total_fee){
            var ordermodel = mongoose.model('todayOrder');
            ordermodel.findOne({order_id:orderid},function(err,doc){
                if(doc){
                    var dbtotalprice = new Number(doc.shipping_fee) + new Number(doc.promotion_totalprice);
                    var sendtotalprice = new Number(total_fee);
                    if(Math.abs(dbtotalprice - sendtotalprice) < 0.01){
                        var responsevalue = {
                            info:{
                                extra:'',
                                data:{
                                    alipay_submit_data:''
                                }
                            },
                            response_status:'true',
                            msg:''
                        }

                        var strurl ='http://'+publictool.releaseip+':10080/alipay';
                        var orderstr = '_input_charset="utf-8"' +
                            '&body="一笔来自今日头牌的订单"' +
                            '&notify_url="'+strurl+'"' +
                            '&out_trade_no="' + orderid + '"' +
                            '&partner="2088411489511305"' +
                            '&payment_type="1"' +
                            '&seller_id="toupai@3pshow.com"' +
                            '&service="mobile.securitypay.pay"' +
                            '&subject="今日头牌订单"' +
                            '&total_fee="' + total_fee + '"';

                        makeRsa(orderstr,responsevalue,response);
                    }
                    else{
                        publictool.returnErr(response,'价格不符');
                    }
                }else{
                    publictool.returnErr(response,'无此订单');
                }
            });
        }
        else{
            publictool.returnErr(response,'参数不全');
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
            signer.update(strcontent,'utf8');
            var sign = signer.sign(data, "base64");
            sign = encodeURIComponent(sign);

            responsevalue.info.data.alipay_submit_data = strcontent +
                '&sign_type="RSA"' +
                '&sign="' + sign + '"';
            publictool.returnValue(response,responsevalue);
        }
    });
}