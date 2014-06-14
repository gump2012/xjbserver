/**
 * Created by gump on 3/19/14.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var productGetDetail = require("./productGetDetail");
var productGetIntroHtml = require("./getProductIntroHtml");
var paymentGetProductsDetail = require("./paymentGetProductsDetail");

var productHandle = {}
productHandle["getProductDetail"] = productGetDetail.getDetail;
productHandle["getProductIntroHtml"] = productGetIntroHtml.getIntroHtml;
paymentHandle["getShopCartProductList"] = paymentGetProductsDetail.getProductsDetail;

function product(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(productHandle,assistant,response,request);
    }
}

exports.product = product;