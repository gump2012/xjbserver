/**
 * Created by gump on 3/19/14.
 */

var mongoose = require('mongoose');
var url = require("url");
var querystring = require("querystring");

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
            response_status:'',
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

        var postData = JSON.stringify(responsevalue);
        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        response.write(postData);
        response.end();
    });
}

exports.getCategoryProducts = getCategoryProducts;