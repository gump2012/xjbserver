/**
 * Created by lishiming on 14-4-17.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var shopGetAdList = require("./shopGetAdList");
var shopKeywordSearch = require("./shopKeywordSearch");
var shopGetTopic = require("./shopGetTopic");
var shopGetTopPro = require("./shopGetTopicProducts");
var shopGetPromotionList = require("./shopPromotionList");
var shopGetProductDetail = require("./productGetDetail");
var shopGetProductsDetail = require("./paymentGetProductsDetail");
var shopGetRecommandProductList = require("./getRecommandProductList");
var shopGetProductReviewList = require("./getProductReviewList");
var shopGetKeywordList = require("./getKeywordList");

var adHandle = {}
adHandle["getAdvertList"] = shopGetAdList.getAdList;
adHandle["getSearchProductList"] = shopKeywordSearch.getProducts;
adHandle["getTopicList"] = shopGetTopic.getTopic;
adHandle["getTopicList_2"] = shopGetTopic.getTopic_2;
adHandle["getTopicProductList"] = shopGetTopPro.getTopicPro;
adHandle["getPromotionList"] = shopGetPromotionList.getPromotionList;
adHandle["getProductDetail"] = shopGetProductDetail.getDetail;
adHandle["getShopCartProductList"] = shopGetProductsDetail.getProductsDetail;
adHandle["getRecommandProductList"] = shopGetRecommandProductList.getRecommandProductList;
adHandle["getProductReviewList"] = shopGetProductReviewList.getProductReviewList;
adHandle["getKeywordList"] = shopGetKeywordList.getKeywordList;

function ad(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    if(assistant){
        console.log(assistant);
        route.route(adHandle,assistant,response,request);
    }
}

exports.ad = ad;