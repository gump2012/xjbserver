/**
 * Created by gump on 4/25/14.
 */
var publicfun = require("../todayPublic/getAssistantValue");
var mongoose = require('mongoose');

function getMyOrderList(response,request){

    var limit = publicfun.getLimit(request);
    var page = publicfun.getPage(request);
    if(limit && page){
        var ticket_id = publicfun.getRegistID(request);

        if(ticket_id){

            var ordermodel = mongoose.model('todayOrder');

            ordermodel.find({ticket_id:ticket_id},{},{sort:{'_id': -1}},function(err,docs){
                if(docs){
                    var responsevalue = {
                        "info": {
                            "extra": {},
                            "data": []
                        },
                        "response_status": "true",
                        "msg": ""
                    }

                    getReturnValue(docs,limit,page,response,responsevalue);
                }
                else{
                    publicfun.returnErr(response,'no order');
                }
            });
        }
        else{
            var token = publicfun.getDeviceID(request);
            if(token){
                var ordermodel = mongoose.model('todayOrder');

                ordermodel.find({token:token},null,{sort:{'_id': -1}},function(err,docs){
                    var responsevalue = {
                        "info": {
                            "extra": {},
                            "data":[]
                        },
                        "response_status": "true",
                        "msg": ""
                    }
                    if(docs && docs.length > 0){
                        getReturnValue(docs,limit,page,response,responsevalue);
                    }
                    else{
                        publicfun.returnValue(response,responsevalue);
                    }
                });
            }
            else{
                publicfun.returnErr(response,'no token or tickid');
            }
        }
    }
    else{
        publicfun.returnErr(response,'no page or limit');
    }
}

function getReturnValue(docs,limit,page,response,responsevalue){
    var ipage = new Number(page);
    var ilimit = new Number(limit);
    if(ipage <= 0){
        publicfun.returnErr(response,'page 怎么能是0捏');
    }
    else{
        var istartcount = (ipage - 1) * ilimit;
        if(istartcount > docs.length){
            publicfun.returnErr(response,'数据超出了');
        }
        else{
            var iendcount = ipage * ilimit;
            var orderarr = [];
            if(iendcount > docs.length){
                for(var i = istartcount;i < docs.length;++i){
                    var item = {
                        order_id:docs[i].order_id
                        ,price:docs[i].promotion_totalprice + docs[i].shipping_fee
                        ,create_time:docs[i].creat_time
                        ,status:docs[i].order_states
                        ,payment_status:docs[i].payment_states
                        ,transport_status:docs[i].shipping_states
                        ,payment_way_id:docs[i].payment_way_id
                        ,payment_name:docs[i].payment_name
                        ,product_count:docs[i].goods_number
                        ,picture:''
                    }

                    if(docs[i].productlist.length > 0){
                        item.picture = docs[i].productlist[0].pic_url;
                    }

                    responsevalue.info.data.push(item);
                }
            }
            else{
                for(var i = istartcount; i < iendcount;++i){
                    var item = {
                        order_id:docs[i].order_id
                        ,price:docs[i].promotion_totalprice + docs[i].shipping_fee
                        ,create_time:docs[i].creat_time
                        ,status:docs[i].order_states
                        ,pay_status:docs[i].payment_states
                        ,shipping_status:docs[i].shipping_states
                        ,payment_way_id:docs[i].payment_way_id
                        ,payment_name:docs[i].payment_name
                        ,count:docs[i].goods_number
                        ,picture:''
                    }

                    if(docs[i].productlist.length > 0){
                        item.picture = docs[i].productlist[0].pic_url;
                    }

                    responsevalue.info.data.push(item);
                }
            }
        }
    }

    publicfun.returnValue(response,responsevalue);
}

exports.getMyOrderList = getMyOrderList;