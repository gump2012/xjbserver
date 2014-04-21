/**
 * Created by lishiming on 14-3-26.
 */
var mongoose = require('mongoose');

var url = require("url");
var querystring = require("querystring");

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
            response_status:'',
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

        var postData = JSON.stringify(responsevalue);
        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        response.write(postData);
        response.end();
    });
}

exports.getInfo = getInfo;