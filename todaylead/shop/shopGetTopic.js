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
                topic_list:[]
                ,recommend:{
                    name:''
                    ,keyword:''
                    ,product_list:[]
                }
            }
        },
        response_status:'true',
        msg:''
    }


    var topicmodle;
    if(publictool.getSelfPlatform(request) == "android"){
        var vc = publictool.getSelfVersionCount(request);
        var ivc = new Number(vc);
        if(ivc > 3){
            topicmodle = mongoose.model('todayshoptopic');
        }
        else{
            topicmodle = mongoose.model('todayshoptopicold');
        }
    }
    else{
        topicmodle = mongoose.model('todayshoptopic');
    }

    topicmodle.find({},function(err,doc){
        for(var i in doc){
            var item = {
                topic_id           :doc[i].topicid
                ,picture          :doc[i].pic_url
                ,name            :doc[i].title
                ,product_list            :[]
            }

            var iTop = 5;
            if(doc[i].goods.length - 1 > iTop)
            {
                for(var j = 0; j < iTop; ++j)
                {
					var topicProductItem = {
						picture          :doc[i].goods[j].pic_url
						,product_id            :doc[i].goods[j].product_id
                        ,name :doc[i].goods[j].name
					}
                    item.product_list.push(topicProductItem);
                }
            }
            else{
                for(var j = 0; j < doc[i].goods.length - 1; ++j)
                {
					var topicProductItem = {
						picture          :doc[i].goods[j].pic_url
						,product_id            :doc[i].goods[j].product_id
                        ,name :doc[i].goods[j].name
					}
                    item.product_list.push(topicProductItem);
                }
            }

            responsevalue.info.data.topic_list.push(item);
        }

        getRecommend(request,response,responsevalue);
    });
}

function getRecommend(request,response,responsevalue){
    var productmodle = mongoose.model('todayProduct');

    var strRecommend = '头牌推荐';
    var strkw = '头牌推荐';

    responsevalue.info.data.recommend.name = strRecommend;
    responsevalue.info.data.recommend.keyword = strkw;

//    productmodle.find({},'title pid pic_url',{sort: {pid:'desc'}}, function (err, docs) {
//        var gettext=[];
//        for(var i in docs){
//            if(docs[i].title.indexOf(strkw) != -1){
//                var item = {
//                    picture:docs[i].pic_url
//                    ,product_id:docs[i].pid
//                }
//                gettext.push(item);
//            }
//        }
//
//        if(gettext.length > 2)
//        {
//            for(var i = 0; i < 3; ++i)
//            {
//                responsevalue.info.data.recommend.product_list.push(gettext[i]);
//            }
//        }
//        else
//        {
//            for(i in gettext)
//            {
//                responsevalue.info.data.recommend.product_list.push(gettext[i]);
//            }
//        }
//
//        publictool.returnValue(response,responsevalue);
//    });

    if(publictool.getSelfPlatform(request) == "android"){
        var vc = publictool.getSelfVersionCount(request);
        var ivc = new Number(vc);
        if(ivc > 3){
            var item = {
                picture:'http://pic.yupoo.com/yige2002/Eby7linn/6lqgM.jpg'
                ,product_id:224
                ,name:'一抹娇羞'
            }
            responsevalue.info.data.recommend.product_list.push(item);
            var item1 = {
                picture:'http://pic.yupoo.com/yige2002/Eby7l6BZ/LeMjH.jpg'
                ,product_id:362
                ,name:'浓情蜜液'
            }
            responsevalue.info.data.recommend.product_list.push(item1);
            var item2 = {
                picture:'http://pic.yupoo.com/yige2002/Eby7kYh0/1pKF9.jpg'
                ,product_id:455
                ,name:'等君还家来'
            }
            responsevalue.info.data.recommend.product_list.push(item2);
        }
        else{
            var item = {
                picture:'http://pic.yupoo.com/yige2002/Eby6MvXz/uMrsH.jpg'
                ,product_id:224
                ,name:'一抹娇羞'
            }
            responsevalue.info.data.recommend.product_list.push(item);
            var item1 = {
                picture:'http://pic.yupoo.com/yige2002/Eby6LF4o/HcSTI.jpg'
                ,product_id:362
                ,name:'浓情蜜液'
            }
            responsevalue.info.data.recommend.product_list.push(item1);
            var item2 = {
                picture:'http://pic.yupoo.com/yige2002/Eby6LlNH/TujFH.jpg'
                ,product_id:455
                ,name:'等君还家来'
            }
            responsevalue.info.data.recommend.product_list.push(item2);
        }
    }
    else{
        var item = {
            picture:'http://pic.yupoo.com/yige2002/Eby7linn/6lqgM.jpg'
            ,product_id:224
            ,name:'一抹娇羞'
        }
        responsevalue.info.data.recommend.product_list.push(item);
        var item1 = {
            picture:'http://pic.yupoo.com/yige2002/Eby7l6BZ/LeMjH.jpg'
            ,product_id:362
            ,name:'浓情蜜液'
        }
        responsevalue.info.data.recommend.product_list.push(item1);
        var item2 = {
            picture:'http://pic.yupoo.com/yige2002/Eby7kYh0/1pKF9.jpg'
            ,product_id:455
            ,name:'等君还家来'
        }
        responsevalue.info.data.recommend.product_list.push(item2);
    }



    publictool.returnValue(response,responsevalue);
}

exports.getTopic = getTopic;