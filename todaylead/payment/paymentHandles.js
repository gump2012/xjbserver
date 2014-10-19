/**
 * Created by lishiming on 14-3-26.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var paymentGetList = require("./paymentGetList");
var paymentGetConsigneeInfo = require("./paymentGetConsigneeInfo");
var paymentGetPromotion = require("./paymentgetPromotion");
var paymentCartUpdate = require("./pamentCartUpdate");

var paymentHandle = {}
paymentHandle["getPaymentList"] = paymentGetList.getList;
paymentHandle["getPaymentConsignee"] = paymentGetConsigneeInfo.getInfo;
paymentHandle["getPaymentDetail"] = paymentGetPromotion.getPromotionDetail;
paymentHandle["cartUpdate"] = paymentCartUpdate.update;

function payment(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(paymentHandle,assistant,response,request);
    }
}

exports.payment = payment;