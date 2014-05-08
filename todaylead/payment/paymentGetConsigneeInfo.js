/**
 * Created by lishiming on 14-3-26.
 */
var mongoose = require('mongoose');

var url = require("url");
var querystring = require("querystring");
var publictool = require("../todayPublic/getAssistantValue");

function getInfo(response,request){

    var arg = url.parse(request.url).query;
    var token = querystring.parse(arg).token;

    var categorymodle = mongoose.model('todayConsigneeInfo');

    categorymodle.findOne({token:token},function(err,doc){

        var responsevalue = {
            info:{
                extra:'',
                data:{
                    consignee:''
                    ,address:''
                    ,mobile:''
                    ,baseaddr:''
                }
            },
            response_status:'true',
            msg:''
        }

        if(doc)
        {
            responsevalue.data.consignee = doc.consignee;
            responsevalue.data.address = doc.address;
            responsevalue.data.mobile = doc.mobile;
            responsevalue.data.baseaddr = doc.baseaddr;
        }
        else
        {
            responsevalue.msg = 'not find product';
        }

        publictool.returnValue(response,responsevalue);
    });
}

exports.getInfo = getInfo;