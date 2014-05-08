/**
 * Created by gump on 3/19/14.
 */

var mongoose = require('mongoose');
var url = require("url");
var querystring = require("querystring");
var publictool = require("../todayPublic/getAssistantValue");

function getCategoryProducts(response,request){
    var categorymodle = mongoose.model('todayProduct');
    var arg = url.parse(request.url).query;
    var cid = querystring.parse(arg).cid;

    categorymodle.find({cid:cid},function(err,doc){

        var responsevalue = {
            info:{
                extra:{},
                data:[]
            },
            response_status:'true',
            msg:''
        }

        for(var i in doc){
            var item = {
                cid         :doc[i].cid,
                pid         :doc[i].pid,
                title       :doc[i].title,
                pic_url     :doc[i].pic_url,
                org_price   :doc[i].org_price,
                price       :doc[i].price,
                volume      :doc[i].volume,
                recentvolume:doc[i].recentvolume
            }

            responsevalue.info.data.push(item);
        }

        publictool.returnValue(response,responsevalue);
    });
}

exports.getCategoryProducts = getCategoryProducts;