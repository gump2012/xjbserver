/**
 * Created by lishiming on 14-4-22.
 */
var mongoose = require('mongoose');

var url = require("url");
var querystring = require("querystring");

var publictool = require("../todayPublic/getAssistantValue");

function getTopicPro(response,request){

    var arg = url.parse(request.url).query;
    var topicid = querystring.parse(arg).topicid;

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
                    findProduct(doc.goods,0,response,responsevalue);
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

function findProduct(gooosarr,iindex,response,responsevalue){
    var productmodle = mongoose.model('todayProduct');
    productmodle.findOne({pid:gooosarr[iindex].pid},function(err,doc){
        if(doc)
        {
            var item = {
                pid:doc.pid
                ,pic_url:doc.pic_url
                ,title:doc.title
                ,org_price:doc.org_price
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