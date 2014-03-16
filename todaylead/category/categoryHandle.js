/**
 * Created by lishiming on 14-3-14.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");
var categoryGetClist = require("./categoryGetCList");

var categoryHandle = {}
categoryHandle["getCategories"] = categoryGetClist.getCategoryList;

function category(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);

    route.route(categoryHandle,assistant,response,request);
}

exports.category = category;