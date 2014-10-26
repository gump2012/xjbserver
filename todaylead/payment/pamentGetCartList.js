/**
 * Created by gump on 10/5/14.
 */
var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");

exports.getCartList = function(response,request){
    var token = publictool.getDeviceID(request);
    console.log(token);
    if(token){
        var cartmodel = mongoose.model('cartList');
        cartmodel.find({token:token},function(err,docs){

            if(docs){

                var responsevalue = {
                    "info": {
                        "extra": null,
                        "data": []
                    },
                    "response_status": "true",
                    "msg": null
                }

                for(var i = 0;i < docs.length;++i){
                    responsevalue.info.data.push(docs[i]);
                }

                publictool.returnValue(response,responsevalue);
            }
            else{
                publictool.returnErr(response,'查询购物车列表出错');
            }
        });
    }else{
        publictool.returnErr(response,'没有设备id');
    }
}