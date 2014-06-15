/**
 * Created by lishiming on 14-3-14.
 */

var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");

function getCategoryList(response,request){

    var categorymodle = mongoose.model('todayCategoryList');

    categorymodle.find({},function(err,doc){

        var responsevalue = {
            info:{
                extra:{},
                data:[]
            },
            response_status:'true',
            msg:''
        }

        for(var i in doc){
            var item = {
                category_id : doc[i].cid,
                name : doc[i].cname,
                desc :doc[i].info,
                picture: doc[i].pic_url
            }

            responsevalue.info.data.push(item);
        }

        publictool.returnValue(response,responsevalue);
    });
}

exports.getCategoryList = getCategoryList;