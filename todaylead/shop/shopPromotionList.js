/**
 * Created by lishiming on 14-6-3.
 */
var publictool = require("../todayPublic/getAssistantValue");

exports.getPromotionList = function(response,request){
    var responsevalue = {
        info: {
        "extra": null,
            "data": [
				{
					"picture": "http://xingjiabi.b0.upaiyun.com/ico/service7.png",
					"name": "7天无理由退换货"
				},
				{
					"picture": "http://xingjiabi.b0.upaiyun.com/ico/promotion.png",
					"name": "支付宝满100包邮 货到付款满168包邮"
				}
			]
        },
        "response_status": "true",
        "msg": ""
    }

    publictool.returnValue(response,responsevalue);
}