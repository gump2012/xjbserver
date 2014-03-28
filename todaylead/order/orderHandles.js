/**
 * Created by lishiming on 14-3-28.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var newOrder = require("./newOrder");

var orderHandle = {};
orderHandle["neworder"] = newOrder.newOrder;

function order(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    route.route(orderHandle,assistant,response,request);
}

exports.order = order;