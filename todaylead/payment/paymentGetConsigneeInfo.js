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
                        ,province_code:''
                        ,city_code:''
                        ,area_code:''
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
                responsevalue.info.data.province_code = doc.province;
                responsevalue.info.data.city_code = doc.city;
                responsevalue.info.data.area_code = doc.area;
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