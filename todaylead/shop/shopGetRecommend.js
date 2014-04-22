/**
 * Created by gump on 4/18/14.
 */

var mongoose = require('mongoose');

function getRecommend(response,request){

//    var productmodle = mongoose.model('todayProduct');
//
//    var strRecommend = '新潮推荐';
//    var strkw = '新潮';
    var responsevalue = {
        info:{
            extra:{},
            data:{
                title:strRecommend
                ,keyword:strkw
                ,topthree:[]
            }
        },
        response_status:'',
        msg:'暂时合并 不用此协议了'
    }

//    productmodle.find({},'title pid pic_url',{sort: {pid:'desc'}}, function (err, docs) {
//        var gettext=[];
//        for(var i in docs){
//            if(docs[i].title.indexOf(strkw) != -1){
//                var item = {
//                    pic_url:docs[i].pic_url
//                    ,pid:docs[i].pid
//                }
//                gettext.push(item);
//            }
//        }
//
//        if(gettext.length > 2)
//        {
//            for(var i = 0; i < 3; ++i)
//            {
//                responsevalue.info.data.topthree.push(gettext[i]);
//            }
//        }
//        else
//        {
//            for(i in gettext)
//            {
//                responsevalue.info.data.topthree.push(gettext[i]);
//            }
//        }

        var postData = JSON.stringify(responsevalue);
        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        response.write(postData);
        response.end();
//    });
}

exports.getRecommend = getRecommend;