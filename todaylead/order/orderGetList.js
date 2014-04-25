/**
 * Created by gump on 4/25/14.
 */
var publicfun = require("../todayPublic/getAssistantValue");

var querystring = require("querystring");
var url = require("url");

function getMyOrderList(response,request){
    var arg = url.parse(request.url).query;
    var token = querystring.parse(arg).token;

    if(token){
        var responsevalue = {
            "info": {
                "extra": {
                    "thumb_size": "_100x100.jpg"
                },
                "data": [
                    {
                        "order_number": "6154791084460902050",
                        "orderprice": "111.00",
                        "create_time": "1398229290",
                        "order_status": "等待确认",
                        "pay_status": "0",
                        "shipping_status": "0",
                        "payment_id": "1",
                        "is_new_style": "1",
                        "payment_status": "0",
                        "payment_name": "货到付款",
                        "is_transfer": "false",
                        "goods_number": "1",
                        "pic_url": "http://img01.taobaocdn.com/imgextra/i1/468359490/T2qRFkXB0XXXXXXXXX_!!468359490.jpg"
                    },
                    {
                        "order_number": "6154739752237713378",
                        "orderprice": "304.00",
                        "create_time": "1398228777",
                        "order_status": "等待确认",
                        "pay_status": "0",
                        "shipping_status": "0",
                        "payment_id": "1",
                        "is_new_style": "1",
                        "payment_status": "0",
                        "payment_name": "货到付款",
                        "is_transfer": "false",
                        "goods_number": "3",
                        "pic_url": "http://img03.taobaocdn.com/imgextra/i3/468359490/T2MAl5XxXaXXXXXXXX-468359490.jpg"
                    }
                ]
            },
            "response_status": "success",
            "msg": ""
        }

        publicfun.returnValue(response,responsevalue);
    }
    else{
        publicfun.returnErr(response,'no token');
    }

}

exports.getMyOrderList = getMyOrderList;