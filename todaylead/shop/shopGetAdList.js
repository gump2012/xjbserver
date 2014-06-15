/**
 * Created by lishiming on 14-4-17.
 */
var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");

function getAdList(response,request){

    var responsevalue = {
        info:{
            extra:{},
            data:[]
        },
        response_status:'true',
        msg:''
    }

    var admodle = mongoose.model('todayAd');
    admodle.find({},function(err,doc){
        for(var i in doc){
            var item = {
                advert_id              :doc[i].adid
                ,picture          :doc[i].img_url
                ,type             :doc[i].type
                ,link             :doc[i].linkto
                ,param            :{
                    type   :0
                }
            }

            if(doc[i].param && doc[i].param.app_ad_in_subtype){
                item.param.type = doc[i].param.app_ad_in_subtype;
            }

            switch (item.type)
            {
                case 1:
                {
                    switch (item.param.type)
                    {
                        case 1:
                        {
                            item.param.keyword = doc[i].param.keyword;
                        }
                            break;
                        case 2:
                        {
                            item.param.product_id = doc[i].param.pid;
                        }
                            break;
                        default :
                            break;
                    }
                }
                    break;
                case 2:
                {
                    item.link = doc[i].linkto;
                    item.param.name = doc[i].param.name;
                }
                    break;
                default :
                    break;
            }


            responsevalue.info.data.push(item);
        }

        publictool.returnValue(response,responsevalue);
    });
}

exports.getAdList = getAdList;