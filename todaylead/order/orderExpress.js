/**
 * Created by lishiming on 14-6-17.
 */
var querystring = require("querystring");
var url = require("url");
var mongoose = require('mongoose');

var publictool = require("../todayPublic/getAssistantValue");

exports.getExpress = function (response,request){

    var arg = url.parse(request.url).query;
    var order_id = querystring.parse(arg).order_id;

    if(order_id){
        var ordermodle = mongoose.model('todayOrder');
        ordermodle.findOne({order_id:order_id},function(err,doc){
            if(doc){
                if(doc.express_name && doc.express_number){
                    var strurl = 'http://m.kuaidi100.com/index_all.html?type='+doc.express_name+'&postid='+doc.express_number;

                    var responseValue = {
                        info:{
                            extra:{}
                            ,data:{
                                express_url:strurl
                            }
                        }
                        ,response_status:'true'
                        ,msg:''
                    }
                    publictool.returnValue(response,responseValue);
                }else{
                    publictool.returnErr(response,'无快递信息');
                }

            }
            else{
                publictool.returnErr(response,'no order data');
            }
        });
    }
    else{
        publictool.returnErr(response,'need orderid');
    }
}