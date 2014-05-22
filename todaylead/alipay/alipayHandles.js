/**
 * Created by lishiming on 14-5-9.
 */
var getAssistantValue = require("../todayPublic/getAssistantValue");
var route = require("../../router");
var querystring = require("querystring");
var mongoose = require('mongoose');

function alipay(response,request){

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        console.log(requestData);
        var out_trade_no = querystring.parse(requestData).out_trade_no;
        var trade_status = querystring.parse(requestData).trade_status;
        console.log(trade_status);
        if(trade_status){
            if(trade_status.indexOf('TRADE_FINISHED') || trade_status.indexOf('TRADE_SUCCESS')){
                if(out_trade_no){
                    var ordermodle = mongoose.model('todayOrder');
                    ordermodle.findOne({order_id:out_trade_no},function(err,doc){
                        if(doc){
                            doc.order_states = 1;
                            doc.payment_states = 1;
                            doc.save( function( err, silence ) {
                                if( err )
                                {
                                    console.log(err);
                                }
                            });
                        }
                    });
                }
                
                returnText(response,'success');
            }
            else{
                returnText(response,'false');
            }
        }
        else{
            returnText(response,'false');
        }

    });
}

function returnText(response,strText){
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    response.write(strText);
    response.end();
}

exports.alipay = alipay;