/**
 * Created by lishiming on 14-6-3.
 */
var publictool = require("../todayPublic/getAssistantValue");

exports.getPromotionList = function(response,request){
    var responsevalue = {
        desc: {
        "extra": null,
            "data": {
            "promotion_ico": "http://xingjiabi.b0.upaiyun.com/ico/promotion.png",
            "promotion": "银行汇款满168包邮 支付宝满100包邮 货到付款满168包邮",
            "service_ico": "http://xingjiabi.b0.upaiyun.com/ico/service7.png",
            "service": "7天无理由退换货"
            }
        },
        "response_status": "true",
        "msg": ""
    }

    publictool.returnValue(response,responsevalue);
}