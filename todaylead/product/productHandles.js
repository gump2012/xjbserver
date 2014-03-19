/**
 * Created by gump on 3/19/14.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var productGetDetail = require("./productGetDetail")

var productHandle = {}
productHandle["getProductDetail"] = productGetDetail.getDetail;

function product(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    route.route(productHandle,assistant,response,request);
}

exports.product = product;