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
                adid              :doc[i].adid
                ,img_url          :doc[i].img_url
                ,type             :doc[i].type
                ,linkto           :doc[i].linkto
                ,param            :{
                    app_ad_in_subtype   :0
                }
            }

            if(doc[i].param && doc[i].param.app_ad_in_subtype){
                item.param.app_ad_in_subtype = doc[i].param.app_ad_in_subtype;
            }

            switch (item.type)
            {
                case 1:
                {
                    switch (item.param.app_ad_in_subtype)
                    {
                        case 1:
                        {
                            item.param.keyword = doc[i].param.keyword;
                        }
                            break;
                        case 2:
                        {
                            item.param.pid = doc[i].param.pid;
                        }
                            break;
                        default :
                            break;
                    }
                }
                    break;
                case 2:
                {
                    item.linkto = doc[i].linkto;
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