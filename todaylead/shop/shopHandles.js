/**
 * Created by lishiming on 14-4-17.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var shopGetAdList = require("./shopGetAdList");
var shopGetRecommend = require("./shopGetRecommend");

var adHandle = {}
adHandle["getAdList"] = shopGetAdList.getAdList;
adHandle["getRecommend"] = shopGetRecommend.getRecommend;

function ad(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    if(assistant){
        console.log(assistant);
        route.route(adHandle,assistant,response,request);
    }
}

exports.ad = ad;