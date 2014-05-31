/**
 * Created by gump on 3/26/14.
 */

var url = require("url");
var querystring = require("querystring");
var publictool = require("../todayPublic/getAssistantValue");

function getPromotionDetail(response,request){

    var arg = url.parse(request.url).query;
    var totalprice = new Number(querystring.parse(arg).totalprice);
    var payment_way_id = querystring.parse(arg).payment_way_id;

    var shoping_fee = totalprice < 1000.00 ? 0.00 : 0.00;
    var orderprice = totalprice + shoping_fee;
    var responsevalue = {
        info:{
            extra:'',
            data:{
                promotion_totalprice:totalprice,
                discount_amount: 0.00,
                order_price: orderprice,
                shipping_fee: shoping_fee,
                shipping_fee_reduce: 0.00,
                goods_amount_reduce: 0.00
            }
        },
        response_status:'true',
        msg:''
    }

    publictool.returnValue(response,responsevalue);
}

exports.getPromotionDetail = getPromotionDetail;