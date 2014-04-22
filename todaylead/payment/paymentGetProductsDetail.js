/**
 * Created by lishiming on 14-4-21.
 */

var publicfun = require("../todayPublic/getAssistantValue");
var mongoose = require('mongoose');

var querystring = require("querystring");

function getProductsDetail(response,request){
    request.setEncoding('utf8');

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        var strpids = querystring.parse(requestData).pids;
        if(strpids){
            var pidsarr=strpids.split(",");
            if(pidsarr.length > 0){
                var responsevalue = {
                    info:{
                        extra:''
                        ,data:[]
                    }
                    ,response_status:''
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
                pid:doc.pid
                ,title:doc.title
                ,price:doc.price
                ,state:doc.state
                ,cid:doc.cid
                ,attr_list:[]
            };

            responsevalue.info.data.push(productitem);
            findAttribute(pidarr,iindex,response,responsevalue);
        }
        else{
            publicfun.returnErr(response,'没有找到商品数据');
        }
    });
}

function findAttribute(pidarr,iindex,response,responsevalue){
    if(iindex >= responsevalue.info.data.length)
    {
        publicfun.returnErr(response,'服务器数据逻辑错误');
    }
    else{
        var productAttrModle = mongoose.model('todayProductAttr');

        productAttrModle.find({pid:responsevalue.info.data[iindex].pid},function(err,doc){
            for(i in doc){
                if(doc[i].attr_type == 1){
                    var item = {
                        attr_id          :doc[i].attr_id
                        ,goods_attr_id   :doc[i].goods_attr_id
                        ,attr_name       :doc[i].attr_name
                        ,attr_value      :doc[i].attr_value
                        ,attr_price      :doc[i].attr_price
                        ,attr_type       :doc[i].attr_type
                    }

                    responsevalue.info.data[iindex].attr_list.push(item);
                }
            }

            iindex++;

            if(iindex >= pidarr.length){
                var postData = JSON.stringify(responsevalue);
                response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                response.write(postData);
                response.end();
            }
            else{
                findProduct(pidarr,iindex,response,responsevalue);
            }
        });
    }
}

exports.getProductsDetail = getProductsDetail;