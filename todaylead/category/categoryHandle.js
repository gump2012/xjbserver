/**
 * Created by lishiming on 14-3-14.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");
var categoryGetClist = require("./categoryGetCList");
var categoryGetPList = require("./categoryGetPList");

var categoryHandle = {}
categoryHandle["getCategoryList"] = categoryGetClist.getCategoryList;
categoryHandle["getCategoryList_2"] = categoryGetClist.getCategoryList_2;
categoryHandle["getCategoryProductList"] = categoryGetPList.getCategoryProducts;
categoryHandle["getCategoryProductList_2"] = categoryGetPList.getCategoryProducts_2;

function category(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(categoryHandle,assistant,response,request);
    }
}

exports.category = category;