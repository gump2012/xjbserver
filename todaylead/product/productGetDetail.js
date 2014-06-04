/**
 * Created by gump on 3/19/14.
 */
var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");

function getDetail(response,request){

    var pid = publictool.getpid(request);

    var responsevalue = {
        info:{
            extra:{},
            data:{
                product_id              :pid
                ,category_id            :0
                ,name          :''
                ,volume         :0
                ,recentvolume   :0
                ,origin_price      :0.00
                ,price          :0.00
                ,status          :1
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
            responsevalue.info.data.category_id = doc.cid;
            responsevalue.info.data.name = doc.title;
            responsevalue.info.data.origin_price = doc.org_price;
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
               ,product_attr_id   :doc[i].goods_attr_id
               ,name            :doc[i].attr_name
               ,value           :doc[i].attr_value
               ,price      :doc[i].attr_price
               ,type       :doc[i].attr_type
           }

           responsevalue.info.data.attr_list.push(item);
       }

        publictool.returnValue(response,responsevalue);
    });
}

exports.getDetail = getDetail;