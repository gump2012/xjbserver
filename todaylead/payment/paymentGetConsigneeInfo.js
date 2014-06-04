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
                desc:{
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
                responsevalue.desc.data.consignee = doc.consignee;
                responsevalue.desc.data.address = doc.address;
                responsevalue.desc.data.mobile = doc.mobile;
                responsevalue.desc.data.baseaddr = doc.baseaddr;
                responsevalue.desc.data.province_code = doc.province;
                responsevalue.desc.data.city_code = doc.city;
                responsevalue.desc.data.area_code = doc.area;
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