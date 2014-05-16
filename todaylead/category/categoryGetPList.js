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
    var limit = querystring.parse(arg).limit;
    var page = querystring.parse(arg).page;

    if(limit && page){
        categorymodle.find({cid:cid},{},{sort: {pid:'desc'}},function(err,doc){

            var responsevalue = {
                info:{
                    extra:{},
                    data:[]
                },
                response_status:'true',
                msg:''
            }

            var ipage = new Number(page);
            var ilimit = new Number(limit);
            if(ipage <= 0){
                publictool.returnErr(response,'page 怎么能是0捏');
            }
            else{
                var istartcount = (ipage - 1) * ilimit;
                if(istartcount >= doc.length){
                    publictool.returnErr(response,'数据超出');
                }
                else{
                    var iendcount = ipage * ilimit;
                    if(iendcount > doc.length){
                        for(var i = istartcount; i < doc.length;++i){
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
                    }
                    else{
                        for(var i = istartcount; i < iendcount;++i){
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
                    }

                    publictool.returnValue(response,responsevalue);
                }
            }
        });
    }
    else{
        publictool.returnErr(response,'no limit or page');
    }
}

exports.getCategoryProducts = getCategoryProducts;