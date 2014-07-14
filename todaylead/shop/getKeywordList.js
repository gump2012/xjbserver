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
                "润滑",
                "杜蕾斯",
                "倍力乐",
                "丝袜",
                "护士服",
                "名器"
            ]
        },
        "response_status": "success",
        "msg": ""
    }

    publicfun.returnValue(response,responsevalue);
}