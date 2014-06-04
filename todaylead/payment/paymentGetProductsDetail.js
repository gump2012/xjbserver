/**
 * Created by lishiming on 14-4-21.
 */

var publicfun = require("../todayPublic/getAssistantValue");
var mongoose = require('mongoose');
var querystring = require("querystring");

function getProductsDetail(response,request){

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        var strpids = querystring.parse(requestData).product_id_list;
        if(strpids){
            var pidsarr=strpids.split(",");
            if(pidsarr.length > 0){
                var responsevalue = {
                    desc:{
                        extra:''
                        ,data:[]
                    }
                    ,response_status:'true'
                    ,msg:''
                };

                findProduct(pidsarr,0,response,responsevalue);
            }
            else{
                publicfun.returnErr(response,'商品数据信息错误');
            }
        }
        else{
            publicfun.returnErr(response,'没有商品数据信息');
        }
    });
}

function findProduct(pidarr,iindex,response,responsevalue){
    var productmodle = mongoose.model('todayProduct');
    var pid = parseInt(pidarr[iindex]);
    productmodle.findOne({pid:pid},function(err,doc){
        if(doc){
            productitem = {
                product_id:doc.pid
                ,name:doc.title
                ,price:doc.price
                ,state:doc.state
                ,category_id:doc.cid
                ,attr_list:[]
                ,pic_url:doc.pic_url
            };

            responsevalue.desc.data.push(productitem);
            findAttribute(pidarr,iindex,response,responsevalue);
        }
        else{
            publicfun.returnErr(response,'没有找到商品数据');
        }
    });
}

function findAttribute(pidarr,iindex,response,responsevalue){
    if(iindex >= responsevalue.desc.data.length)
    {
        publicfun.returnErr(response,'服务器数据逻辑错误');
    }
    else{
        var productAttrModle = mongoose.model('todayProductAttr');

        productAttrModle.find({pid:responsevalue.desc.data[iindex].pid},function(err,doc){
            for(i in doc){
                if(doc[i].attr_type == 1){
                    var item = {
                        attr_id          :doc[i].attr_id
                        ,product_attr_id   :doc[i].goods_attr_id
                        ,name       :doc[i].attr_name
                        ,value      :doc[i].attr_value
                        ,price      :doc[i].attr_price
                        ,type       :doc[i].attr_type
                    }

                    responsevalue.desc.data[iindex].attr_list.push(item);
                }
            }

            iindex++;

            if(iindex >= pidarr.length){
                publicfun.returnValue(response,responsevalue);
            }
            else{
                findProduct(pidarr,iindex,response,responsevalue);
            }
        });
    }
}

exports.getProductsDetail = getProductsDetail;