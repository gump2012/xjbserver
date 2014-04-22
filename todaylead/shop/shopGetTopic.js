/**
 * Created by gump on 4/21/14.
 */
var mongoose = require('mongoose');

function getTopic(response,request){

    var responsevalue = {
        info:{
            extra:{},
            data:[]
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

            responsevalue.info.data.push(item);
        }

        var postData = JSON.stringify(responsevalue);
        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        response.write(postData);
        response.end();
    });
}

exports.getTopic = getTopic;