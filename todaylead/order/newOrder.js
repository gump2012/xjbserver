/**
 * Created by lishiming on 14-3-28.
 */

var mongoose = require('mongoose');
var crypto = require('crypto');

var querystring = require("querystring");

function newOrder(response,request){
    request.setEncoding('utf8');

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        var strjson = querystring.parse(requestData).order_json;
        if(strjson){
            var datajson = JSON.parse(strjson);
            if(datajson){
                var item = {
                    city:datajson.city
                    ,province:datajson.province
                    ,area:datajson.area
                    ,consignee:datajson.consignee
                    ,mobile:datajson.mobile
                    ,memo:datajson.memo
                    ,ticket_id:datajson.ticket_id
                    ,token:datajson.token
                    ,address:datajson.address
                    ,shipping_fee:datajson.shipping_fee
                    ,promotion_totalprice:datajson.promotion_totalprice
                    ,payment_way_id:datajson.payment_way_id
                    ,order_id:MD5(Date.now().toString())
                    ,creat_time:Date.now().toString()
                    ,order_states:0
                    ,payment_states:0
                    ,shipping_states:0
                    ,productlist:[]
                }

                if(datajson.productlist)
                {
                    for(i in datajson.productlist)
                    {
                        var productitem = {
                            title:datajson.productlist[i].title
                            ,price:datajson.productlist[i].price
                            ,pid:datajson.productlist[i].pid
                            ,quantity:datajson.productlist[i].quantity
                            ,attr_list:[]
                        }

                        if(datajson.productlist[i].attr_list)
                        {
                            for(j in datajson.productlist[i].attr_list)
                            {
                                var attritem = {
                                    goods_attr_id:datajson.productlist[i].attr_list[j].goods_attr_id
                                    ,attr_price:datajson.productlist[i].attr_list[j].attr_price
                                }

                                productitem.attr_list.push(attritem);
                            }
                        }

                        item.productlist.push(productitem);
                    }
                }

                var pidnumber = item.productlist.length;
                findPid(item,response,pidnumber);
            }
            else
            {
                returnErr(response,'数据错误');
            }

        }
        else{
            returnErr(response,'数据为空')
        }

    });
}

function MD5(str, encoding) {
    return crypto.createHash('md5').update(str).digest(encoding || 'hex');
}

function priceCompare(item){
    return false;
}

function returnErr(response,errstr){
    var responsevalue = {
        info:{
            extra:'',
            data:''
        },
        response_status:'',
        msg:errstr
    }
    var postData = JSON.stringify(responsevalue);
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    response.write(postData);
    response.end();
}

function findPid(item,response,pidnumber){
    var productmodle = mongoose.model('todayProduct');

    if(pidnumber <= 0){
        comparePrice(item,response);
    }
    else{
        var pid = item.productlist[pidnumber-1].pid;
        productmodle.findOne({pid:pid},'price',function(err,doc){
            if(doc)
            {
                if(item.productlist[pidnumber - 1].price == doc.price){
                    pidnumber--;
                    var attrnumber = item.productlist[pidnumber].attr_list.length;
                    if(attrnumber > 0){
                        findAttr(item,response,pidnumber,attrnumber);
                    }
                    else{
                        findPid(item,response,pidnumber);
                    }
                }
                else{
                    var strerr = item.productlist[pidnumber - 1].pid + '商品价格不符';
                    returnErr(response,strerr);
                }

            }
            else
            {
                returnErr(response,'未找到商品数据');
            }
        });
    }

}

function comparePrice(item,response){
    var totalprice = 0.00;
    for(i in item.productlist){
        var attrprice = 0.00;
        for(j in item.productlist[i].attr_list){
            attrprice += new Number(item.productlist[i].attr_list[j].attr_price);
        }
        totalprice += (new Number(item.productlist[i].price) + attrprice) * item.productlist[i].quantity;
    }
    if(totalprice != item.promotion_totalprice){
        returnErr(response,'商品总价不对');
    }
    else{
        var shipfee = 0.00;
        if(item.payment_way_id == 1){
            if(totalprice < 1000.00){
                shipfee = 12.00;
            }
        }
        else if(item.payment_way_id == 2){
            if(totalprice < 1000.00){
                shipfee = 12.00;
            }
        }

        if(shipfee != item.shipping_fee)
        {
            returnErr(response,'运费不对');
        }
        else{
            var ordermodle = mongoose.model('todayOrder');

            var orderEntity = new ordermodle(item);
            orderEntity.save();

            var consigneemodle = mongoose.model('todayConsigneeInfo');
            var consigneeitem = {
                token:item.token
                ,consignee:item.consignee
                ,address:item.address
                ,mobile:item.mobile
                ,baseaddr:item.baseaddr
            }

            var consigneeEntity = new consigneemodle(consigneeitem);
            consigneeEntity.save();

            var orderprice = new Number(item.shipping_fee) + new Number(item.promotion_totalprice);
            var responsevalue = {
                info:{
                    extra:'',
                    data:{
                        order_id:item.order_id
                        ,orderprice:orderprice
                        ,create_time:item.creat_time
                        ,order_status:item.order_states
                        ,payment_way_id:item.payment_way_id
                        ,payment_status:item.payment_states
                    }
                },
                response_status:'',
                msg:''
            }
            var postData = JSON.stringify(responsevalue);
            response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
            response.write(postData);
            console.log(postData);
            response.end();
        }
    }
}

function findAttr(item,response,pidnumber,attrnumber){
    if(attrnumber > 0){
        attrnumber--;
        var goodattrid = item.productlist[pidnumber].attr_list[attrnumber].goods_attr_id;

        var attrmodel = mongoose.model('todayProductAttr');
        attrmodel.findOne({goods_attr_id:goodattrid},'attr_price',function(err,doc){
            if(doc)
            {
                if(item.productlist[pidnumber].attr_list[attrnumber].attr_price == doc.attr_price){
                    findAttr(item,response,pidnumber,attrnumber);
                }
                else{
                    var strerr = item.productlist[pidnumber].attr_list[attrnumber].goods_attr_id + '商品属性价格不符';
                    returnErr(response,strerr);
                }

            }
            else
            {
                returnErr(response,'未找到商品属性数据');
            }
        });
    }
    else{
        findPid(item,response,pidnumber);
    }
}

exports.newOrder = newOrder;