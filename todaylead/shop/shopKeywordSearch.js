/**
 * Created by lishiming on 14-4-18.
 */

var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");
var url = require("url");
var querystring = require("querystring");

function getProducts(response,request){

    var arg = url.parse(request.url).query;
    var strkeyword = querystring.parse(arg).keyword;
    strkeyword = decodeURI(strkeyword);
    var limit = publictool.getLimit(request);
    var page = publictool.getPage(request);
    var responsevalue = {
        info:{
            extra:'',
            data:[]
        },
        response_status:'true',
        msg:''
    }

    if(strkeyword && limit && page)
    {
        var productmodle = mongoose.model('todayProduct');

        productmodle.find({},{},{sort: {pid:'desc'}}, function (err, docs) {
            var tempdata = [];
            for(var i in docs){

                if(docs[i].title.indexOf(strkeyword) != -1){
                    var item = {
                        product_id:docs[i].pid
                        ,category_id:docs[i].cid
                        ,name:docs[i].title
                        ,origin_price:docs[i].org_price
                        ,price:docs[i].price
                        ,volume:docs[i].volume
                        ,recent_volume:docs[i].recentvolume
                        ,picture:docs[i].pic_url
                    }
                    tempdata.push(item);
                }
            }
            var ipage = new Number(page);
            var ilimit = new Number(limit);
            var ineedcount = (ipage - 1) * ilimit;
            if(ineedcount > tempdata.length){
                publictool.returnErr(response,'请求数据超出');
            }
            else if(ipage <= 0){
               publictool.returnErr(response,'page 怎么能是0呢');
            }
            else {
                var isendcount = ipage * ilimit;
                if(isendcount <= tempdata.length){
                    for(var i = (page - 1) * ilimit;i < isendcount;++i){
                        responsevalue.info.data.push(tempdata[i]);
                    }
                }
                else{
                    for(var i = (page - 1) * ilimit;i < tempdata.length;++i){
                        responsevalue.info.data.push(tempdata[i]);
                    }
                }

                publictool.returnValue(response,responsevalue);
            }
        });
    }
    else
    {
        if(strkeyword){
            publictool.returnErr(response,'no limit or page');
        }
        else{
            publictool.returnErr(response,'keyword is empty');
        }
    }
}

exports.getProducts = getProducts;