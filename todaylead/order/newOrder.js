/**
 * Created by lishiming on 14-3-28.
 */

var mongoose = require('mongoose');
var crypto = require('crypto');

function newOrder(response,request){
    request.setEncoding('utf8');

    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        var datajson = JSON.parse(requestData);
        console.log(requestData);
        console.log(datajson);
        console.log(datajson.productlist);
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
                console.log(item);
            }
        }

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
            order_id:item.order_id
            ,orderprice:orderprice
            ,create_time:item.creat_time
            ,order_status:item.order_states
            ,payment_way_id:item.payment_way_id
            ,payment_status:item.payment_states
        }
        console.log(responsevalue);
        var postData = JSON.stringify(responsevalue);
        response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        response.write(postData);
        console.log(postData);
        response.end();
    });
}

function MD5(str, encoding) {
    return crypto.createHash('md5').update(str).digest(encoding || 'hex');
}

exports.newOrder = newOrder;