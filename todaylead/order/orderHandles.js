/**
 * Created by lishiming on 14-3-28.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var newOrder = require("./newOrder");
var orderGetDetail = require("./orderGetDetail");

var orderHandle = {};
orderHandle["neworder"] = newOrder.newOrder;
orderHandle["getMyOrderDetail"] = orderGetDetail.getMyOrderDetail;

function order(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(orderHandle,assistant,response,request);
    }
}

exports.order = order;