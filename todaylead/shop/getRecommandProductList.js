/**
 * Created by gump on 6/28/14.
 */
var publicfun = require("../todayPublic/getAssistantValue");
var mongoose = require('mongoose');
var querystring = require("querystring");

exports.getRecommandProductList = function(response,request){

    var productid = publicfun.getpid(request);

    if(productid){
        var responsevalue = {
            info:{
                extra:''
                ,data:[]
            }
            ,response_status:'true'
            ,msg:''
        };

        productmodel = mongoose.model('todayProduct');
        productmodel.findOne({pid:productid},function(err,doc){
           if(doc){
               productmodel.find({cid:doc.cid},'pid title price pic_url',{sort: {pid:'desc'}},function(err,docs){
                   if(docs.length > 8){
                       for(var i = 0; i < 8;++i){
                           var item = {
                               "product_id": docs[i].pid,
                               "name": docs[i].title,
                               "price": docs[i].price,
                               "picture": docs[i].pic_url
                           }
                           responsevalue.info.data.push(item);
                       }
                   }
                   else{
                       for(i in docs){
                           var item = {
                               "product_id": docs[i].pid,
                               "name": docs[i].title,
                               "price": docs[i].price,
                               "picture": docs[i].pic_url
                           }
                           responsevalue.info.data.push(item);
                       }
                   }
                   publicfun.returnValue(response,responsevalue);
               });
           }
           else{
               publicfun.returnErr(response,'没有这个商品耶');
           }
        });
    }
    else{
        publicfun.returnErr(response,'没有商品id');
    }
}