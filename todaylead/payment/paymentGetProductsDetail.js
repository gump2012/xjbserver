/**
 * Created by lishiming on 14-4-21.
 */

var publicfun = require("../todayPublic/getAssistantValue");
var mongoose = require('mongoose');

function getProductsDetail(response,request){
    request.setEncoding('utf8');

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        var datajson = JSON.parse(requestData);
        if(datajson.pids){
            var strpids = datajson.pids;
            var pidsarr=strpids.split(",");
            console.log(pidsarr.length);
            if(pidsarr.length > 0){
                findProduct(pidsarr,0,response,responsevalue);
            }
            else{
                publicfun.returnErr(response,'商品数据信息错误');
            }
        }
        else{
            publicfun.returnErr(response,'没有商品数据信息');
        }
    });
}

function findProduct(pidarr,iindex,response,responsevalue){

}

exports.getProductsDetail = getProductsDetail;