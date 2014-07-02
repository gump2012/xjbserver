/**
 * Created by lishiming on 14-7-2.
 */

var publicfun = require("../todayPublic/getAssistantValue");

exports.getKeywordList = function(response,request){
    var responsevalue = {
        "info": {
            "extra": null,
            "data": [
                "延时",
                "震动棒",
                "飞机杯",
                "跳蛋",
                "避孕套",
                "制服诱惑",
                "新品尝鲜",
                "LELO",
                "挑逗必备",
                "AV棒"
            ]
        },
        "response_status": "success",
        "msg": ""
    }

    publicfun.returnValue(response,responsevalue);
}