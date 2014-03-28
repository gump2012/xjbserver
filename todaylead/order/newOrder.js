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
        var postData = '';
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
            ,order_id:MD5(Date.now())
            ,creat_time:Date.now()
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

                if(datajson.productlist.attr_list)
                {
                    for(j in datajson.productlist.attr_list)
                    {
                        var attritem = {
                            goods_attr_id:datajson.productlist.attr_list[i].goods_attr_id
                            ,attr_price:datajson.productlist.attr_list[i].attr_price
                        }

                        productitem.attr_list.push(attritem);
                    }
                }

                item.productlist.push(productitem);
            }
        }

        var ordermodle = mongoose.model('todayOrder');

        var orderEntity = new ordermodle(productitem);
        orderEntity.save();

        var consigneemodle = mongoose.model('todayConsigneeInfo');
        var consigneeitem = {
            token:productitem.token
            ,consignee:productitem.consignee
            ,address:productitem.address
            ,mobile:productitem.mobile
            ,baseaddr:productitem.baseaddr
        }

        var consigneeEntity = new consigneemodle(consigneeitem);
        consigneeEntity.save();

        var responsevalue = {
            order_id:productitem.order_id
            ,orderprice:productitem.shipping_fee + productitem.promotion_totalprice
            ,create_time:productitem.creat_time.getTime()
        }

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