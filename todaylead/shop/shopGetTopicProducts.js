/**
 * Created by lishiming on 14-4-22.
 */
var mongoose = require('mongoose');

var url = require("url");
var querystring = require("querystring");

var publictool = require("../todayPublic/getAssistantValue");

function getTopicPro(response,request){

    var arg = url.parse(request.url).query;
    var topicid = querystring.parse(arg).topic_id;
    var limit = publictool.getLimit(request);
    var page = publictool.getPage(request);

    if(limit && page){
        var responsevalue = {
            info:{
                extra:{},
                data:[]
            },
            response_status:'true',
            msg:''
        }

        if(topicid){
            var topicmodle = mongoose.model('todayshoptopic');
            topicmodle.findOne({topicid:topicid},function(err,doc){
                if(doc){
                    if(doc.goods.length > 0){
                        var ipage = new Number(page);
                        var ilimit = new Number(limit);
                        if(ipage <= 0){
                            publictool.returnErr(response,'page 怎么是0捏');
                        }
                        else{
                            var goodsarr = [];
                            var istartcount = (ipage - 1) * ilimit;
                            if(istartcount < doc.goods.length - 1){
                                var iendcount = ipage * ilimit;
                                if(iendcount > doc.goods.length - 1){
                                    for(var i = istartcount; i <  doc.goods.length - 1;++i){
                                        goodsarr.push(doc.goods[i]);
                                    }
                                }
                                else{
                                    for(var i = istartcount; i < iendcount;++i){
                                        goodsarr.push(doc.goods[i]);
                                    }
                                }

                                findProduct(goodsarr,0,response,responsevalue);
                            }
                            else{
                                publictool.returnErr(response,'数据超出了')
                            }
                        }
                    }
                    else{
                        publictool.returnErr(response,'no goods');
                    }
                }
                else{
                    publictool.returnErr(response,'not find topic data');
                }
            });
        }
        else{
            publictool.returnErr(response,'not find topic post parameter');
        }
    }
    else{
        publictool.returnErr(response,'not find page or limit');
    }
}

function findProduct(gooosarr,iindex,response,responsevalue){
    var productmodle = mongoose.model('todayProduct');
    productmodle.findOne({pid:gooosarr[iindex].product_id},function(err,doc){
        if(doc)
        {
            var item = {
                product_id:doc.pid
                ,pic_url:doc.pic_url
                ,name:doc.title
                ,origin_price:doc.org_price
                ,price:doc.price
                ,volume:doc.volume
                ,recentvolume:doc.recentvolume
            }

            responsevalue.info.data.push(item);

            if(iindex < gooosarr.length - 1)
            {
                iindex++;
                findProduct(gooosarr,iindex,response,responsevalue);
            }
            else
            {
                publictool.returnValue(response,responsevalue);
            }
        }
        else
        {
            publictool.returnErr(response,'not find product');
        }
    });
}

exports.getTopicPro = getTopicPro;