/**
 * Created by gump on 6/28/14.
 */
var publicfun = require("../todayPublic/getAssistantValue");
var mongoose = require('mongoose');
var commentHandles = require("../todayPublic/comment/commentcontent");

exports.getProductReviewList = function(response,request){

    var productid = publicfun.getpid(request);

    if(productid){
        var responsevalue = {
            info:{
                extra:''
                ,data:[]
            }
            ,response_status:'true'
            ,msg:''
        };
        if(typeof commentHandles.commentHandles[productid] === 'object'){
            for(i in commentHandles.commentHandles[productid]){
                responsevalue.info.data.push(commentHandles.commentHandles[productid][i]);
            }
        }
        publicfun.returnValue(response,responsevalue);
    }
    else{
        publicfun.returnErr(response,'没有商品id');
    }
}