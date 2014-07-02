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
    var cid = querystring.parse(arg).category_id;
    var limit = publictool.getLimit(request);
    var page = publictool.getPage(request);
    var sortkey = querystring.parse(arg).sort_key;

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
                                category_id         :doc[i].cid,
                                product_id         :doc[i].pid,
                                name       :doc[i].title,
                                picture     :doc[i].pic_url,
                                origin_price   :doc[i].org_price,
                                price       :doc[i].price,
                                volume      :doc[i].volume,
                                recent_volume:doc[i].recentvolume
                            }

                            responsevalue.info.data.push(item);
                        }
                    }
                    else{
                        for(var i = istartcount; i < iendcount;++i){
                            var item = {
                                category_id         :doc[i].cid,
                                product_id         :doc[i].pid,
                                name       :doc[i].title,
                                picture     :doc[i].pic_url,
                                origin_price   :doc[i].org_price,
                                price       :doc[i].price,
                                volume      :doc[i].volume,
                                recent_volume:doc[i].recentvolume
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