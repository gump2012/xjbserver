/**
 * Created by gump on 4/21/14.
 */
var mongoose = require('mongoose');

function getTopic(response,request){

    var responsevalue = {
        info:{
            extra:{},
            data:{
                topic:[]
                ,recommend:{
                    title:''
                    ,keyword:''
                    ,topthree:[]
                }
            }
        },
        response_status:'',
        msg:''
    }

    var topicmodle = mongoose.model('todayshoptopic');
    topicmodle.find({},function(err,doc){
        for(var i in doc){
            var item = {
                topicid           :doc[i].topicid
                ,pic_url          :doc[i].pic_url
                ,title            :doc[i].title
                ,goods            :[]
            }

            var iTop = 5;
            if(doc[i].goods.length > iTop)
            {
                for(var j = 0; j < iTop; ++j)
                {
                    item.goods.push(doc[i].goods[j]);
                }
            }
            else{
                for(j in doc[i].goods)
                {
                    item.goods.push(doc[i].goods[j]);
                }
            }

            responsevalue.info.data.topic.push(item);
        }

        getRecommend(response,responsevalue);
//        var postData = JSON.stringify(responsevalue);
//        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
//        response.write(postData);
//        response.end();
    });
}

function getRecommend(response,responsevalue){
    var productmodle = mongoose.model('todayProduct');

    var strRecommend = '新潮推荐';
    var strkw = '新潮';

    responsevalue.info.data.recommend.title = strRecommend;
    responsevalue.info.data.recommend.keyword = strkw;

    productmodle.find({},'title pid pic_url',{sort: {pid:'desc'}}, function (err, docs) {
        var gettext=[];
        for(var i in docs){
            if(docs[i].title.indexOf(strkw) != -1){
                var item = {
                    pic_url:docs[i].pic_url
                    ,pid:docs[i].pid
                }
                gettext.push(item);
            }
        }

        if(gettext.length > 2)
        {
            for(var i = 0; i < 3; ++i)
            {
                responsevalue.info.data.recommend.topthree.push(gettext[i]);
            }
        }
        else
        {
            for(i in gettext)
            {
                responsevalue.info.data.recommend.topthree.push(gettext[i]);
            }
        }

        var postData = JSON.stringify(responsevalue);
        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        response.write(postData);
        response.end();
    });
}

exports.getTopic = getTopic;