/**
 * Created by lishiming on 14-3-14.
 */

var mongoose = require('mongoose');

function getCategoryList(response,request){

    var categorymodle = mongoose.model('todayCategoryList');

    categorymodle.find({},function(err,doc){

        var responsevalue = {
            info:{
                extra:{},
                data:[]
            },
            response_status:'',
            msg:''
        }

        for(var i in doc){
            var item = {
                cid : doc[i].cid,
                cname : doc[i].cname,
                info :doc[i].info,
                pic_url: doc[i].pic_url
            }

            responsevalue.info.data.push(item);
        }

        var postData = JSON.stringify(responsevalue);
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write(postData);
        response.end();
    });
}

exports.getCategoryList = getCategoryList;