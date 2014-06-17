/**
 * Created by lishiming on 14-3-28.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var newOrder = require("./newOrder");
var orderGetDetail = require("./orderGetDetail");
var orderGetList = require("./orderGetList");
var orderDel = require("./orderDelete");
var alipayto = require("./alipayto");
var express = require("./orderExpress");

var orderHandle = {};
orderHandle["createOrder"] = newOrder.newOrder;
orderHandle["getOrderDetail"] = orderGetDetail.getMyOrderDetail;
orderHandle["getOrderList"] = orderGetList.getMyOrderList;
orderHandle["delOrder"] = orderDel.deleteorder;
orderHandle["alipayPay"] = alipayto.alipayto;
orderHandle["getexpress"] = express.getExpress;

function order(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(orderHandle,assistant,response,request);
    }
}

exports.order = order;