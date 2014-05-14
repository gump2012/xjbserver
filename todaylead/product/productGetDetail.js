/**
 * Created by gump on 3/19/14.
 */
var mongoose = require('mongoose');
var url = require("url");
var querystring = require("querystring");
var publictool = require("../todayPublic/getAssistantValue");

function getDetail(response,request){
    var arg = url.parse(request.url).query;
    var pid = querystring.parse(arg).pid;

    var responsevalue = {
        info:{
            extra:{},
            data:{
                pid              :pid
                ,cid            :0
                ,title          :''
                ,volume         :0
                ,recentvolume   :0
                ,org_price      :0.00
                ,price          :0.00
                ,state          :1
                ,stamper        :''
                ,gallery        :[]
                ,attr_list      :[]
                ,pic_url        :''
            }
        },
        response_status:'',
        msg:''
    }

    findBasic(pid,responsevalue,response);
}

function findBasic(pid,responsevalue,response){
    var productmodle = mongoose.model('todayProduct');

    productmodle.findOne({pid:pid},function(err,doc){
        if(doc)
        {
            responsevalue.info.data.cid = doc.cid;
            responsevalue.info.data.title = doc.title;
            responsevalue.info.data.org_price = doc.org_price;
            responsevalue.info.data.price = doc.price;
            responsevalue.info.data.volume = doc.volume;
            responsevalue.info.data.recentvolume = doc.recentvolume;
            responsevalue.info.data.pic_url = doc.pic_url;

            for(var i = 0; i < doc.gallery.length - 1; ++i)
            {
                responsevalue.info.data.gallery.push(doc.gallery[i]);
            }

            findAttr(pid,responsevalue,response);
        }
        else
        {
            publictool.returnErr(response,'没有找到商品');
        }
    });
}

function findAttr(pid,responsevalue,response){
    var attrmodel = mongoose.model('todayProductAttr');

    attrmodel.find({pid:pid},function(err,doc){
       for(var i in doc){
           var item = {
               attr_id          :doc[i].attr_id
               ,goods_attr_id   :doc[i].goods_attr_id
               ,attr_name       :doc[i].attr_name
               ,attr_value      :doc[i].attr_value
               ,attr_price      :doc[i].attr_price
               ,attr_type       :doc[i].attr_type
           }

           responsevalue.info.data.attr_list.push(item);
       }

        publictool.returnValue(response,responsevalue);
    });
}

exports.getDetail = getDetail;