/**
 * Created by lishiming on 14-4-18.
 */

var mongoose = require('mongoose');

var url = require("url");
var querystring = require("querystring");

function getProducts(response,request){

    var arg = url.parse(request.url).query;
    var strkeyword = querystring.parse(arg).keyword;

    var responsevalue = {
        info:{
            extra:'',
            data:[]
        },
        response_status:'',
        msg:''
    }

    if(strkeyword)
    {
        var productmodle = mongoose.model('todayProduct');

        productmodle.find({},{},{sort: {pid:'desc'}}, function (err, docs) {
            for(var i in docs){
                if(docs[i].title.indexOf(strkeyword) != -1){
                    var item = {
                        pid:docs[i].pid
                        ,cid:docs[i].cid
                        ,title:docs[i].title
                        ,org_price:docs[i].org_price
                        ,price:docs[i].price
                        ,volume:docs[i].volume
                        ,recentvolume:docs[i].recentvolume
                        ,pic_url:docs[i].pic_url
                    }
                    responsevalue.info.data.push(item);
                }
            }

            var postData = JSON.stringify(responsevalue);
            response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
            response.write(postData);
            response.end();
        });
    }
    else
    {
        responsevalue.msg = 'keyword is empty';

        var postData = JSON.stringify(responsevalue);
        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        response.write(postData);
        response.end();
    }
}

exports.getProducts = getProducts;