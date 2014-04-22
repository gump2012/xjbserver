/**
 * Created by gump on 3/19/14.
 */
var mongoose = require('mongoose');
var url = require("url");
var querystring = require("querystring");

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

            for(var i = 0; i < doc.gallery.length - 1; ++i)
            {
                responsevalue.info.data.gallery.push(doc.gallery[i]);
            }

            findAttr(pid,responsevalue,response);
        }
        else
        {
            responsevalue.msg = 'not find product';
            var postData = JSON.stringify(responsevalue);
            response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
            response.write(postData);
            response.end();
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

        var postData = JSON.stringify(responsevalue);
        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        response.write(postData);
        response.end();
    });
}

exports.getDetail = getDetail;