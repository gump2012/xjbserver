/**
 * Created by gump on 3/19/14.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");

var productGetIntroHtml = require("./getProductIntroHtml");
var productGetExperience = require("./getProductExperienceHtml");

var productHandle = {}
productHandle["getProductIntroHtml"] = productGetIntroHtml.getIntroHtml;
productHandle["getProductExperience"] = productGetExperience.getExperienceHtml;

function product(response,request){
    var assistant = getAssistantValue.getAssistantValue(request);
    console.log(assistant);
    if(assistant){
        route.route(productHandle,assistant,response,request);
    }
}

exports.product = product;