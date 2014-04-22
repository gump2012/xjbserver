/**
 * Created by lishiming on 14-4-17.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var shopGetAdList = require("./shopGetAdList");
var shopGetRecommend = require("./shopGetRecommend");
var shopKeywordSearch = require("./shopKeywordSearch");
var shopGetTopic = require("./shopGetTopic");
var shopGetTopPro = require("./shopGetTopicProducts");

var adHandle = {}
adHandle["getAdList"] = shopGetAdList.getAdList;
adHandle["getRecommend"] = shopGetRecommend.getRecommend;
adHandle["keywordSearch"] = shopKeywordSearch.getProducts;
adHandle["getTopicList"] = shopGetTopic.getTopic;
adHandle["getTopicProducts"] = shopGetTopPro.getTopicPro;

function ad(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    if(assistant){
        console.log(assistant);
        route.route(adHandle,assistant,response,request);
    }
}

exports.ad = ad;