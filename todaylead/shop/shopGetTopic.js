/**
 * Created by gump on 4/21/14.
 */
var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");

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
        response_status:'true',
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
            if(doc[i].goods.length - 1 > iTop)
            {
                for(var j = 0; j < iTop; ++j)
                {
                    item.goods.push(doc[i].goods[j]);
                }
            }
            else{
                for(var j = 0; j < doc[i].goods.length - 1; ++j)
                {
                    item.goods.push(doc[i].goods[j]);
                }
            }

            responsevalue.info.data.topic.push(item);
        }

        getRecommend(response,responsevalue);
    });
}

function getRecommend(response,responsevalue){
    var productmodle = mongoose.model('todayProduct');

    var strRecommend = '头牌推荐';
    var strkw = '头牌推荐';

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

        publictool.returnValue(response,responsevalue);
    });
}

exports.getTopic = getTopic;