/**
 * Created by lishiming on 14-3-14.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");
var categoryGetClist = require("./categoryGetCList");
var categoryGetPList = require("./categoryGetPList");

var categoryHandle = {}
categoryHandle["getCategoryList"] = categoryGetClist.getCategoryList;
categoryHandle["getCategoryProductList"] = categoryGetPList.getCategoryProducts;

function category(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(categoryHandle,assistant,response,request);
    }
}

exports.category = category;