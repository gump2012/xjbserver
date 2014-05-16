/**
 * Created by lishiming on 14-3-26.
 */
var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");

function getInfo(response,request){

    var token = publictool.getDeviceID(request);

    var categorymodle = mongoose.model('todayConsigneeInfo');

    if(token){
        categorymodle.findOne({token:token},function(err,doc){

            var responsevalue = {
                info:{
                    extra:'',
                    data:{
                        consignee:''
                        ,address:''
                        ,mobile:''
                        ,baseaddr:''
                        ,province:''
                        ,city:''
                        ,area:''
                    }
                },
                response_status:'true',
                msg:''
            }

            if(doc)
            {
                responsevalue.info.data.consignee = doc.consignee;
                responsevalue.info.data.address = doc.address;
                responsevalue.info.data.mobile = doc.mobile;
                responsevalue.info.data.baseaddr = doc.baseaddr;
                responsevalue.info.data.province = doc.province;
                responsevalue.info.data.city = doc.city;
                responsevalue.info.data.area = doc.area;
            }
            else
            {
                responsevalue.msg = 'not find product';
            }

            publictool.returnValue(response,responsevalue);
        });
    }
    else{
        publictool.returnErr(response,'no deviceid');
    }
}

exports.getInfo = getInfo;