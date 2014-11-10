/**
 * Created by gump on 10/7/14.
 */
var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");
var querystring = require("querystring");

exports.update = function(response,request){
    var requestData = '';
    request.addListener('data', function(postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener('end', function() {
        var device_id = publictool.getDeviceID(request);
        var strjson = querystring.parse(requestData).list;
        var type = querystring.parse(requestData).type;

        if(strjson&&type&&device_id){
            if(type == "del"){
                deletecart(device_id,strjson,response);
            }
            else if(type == "merge"){
                mergecart(device_id,strjson,response);
            }
            else if(type == "add"){
                addcart(device_id,strjson,response);
            }
        }
    });
}

function addcart(device_id,strjson,response){
    var datajson = JSON.parse(strjson);

    addOneCart(device_id,datajson,response,0);


}

function deletecart(device_id,strjson,response){
    var datajson = JSON.parse(strjson);

    var responsevalue = {
        "info":{"extra":null,"data":null},"response_status":"true","msg":null
    }
    console.log(responsevalue);
    publictool.returnValue(response,responsevalue);


}

function mergecart(device_id,strjson,response){
    var datajson = JSON.parse(strjson);

    var responsevalue = {
        "info":{"extra":null,"data":null},"response_status":"true","msg":null
    }
    console.log(responsevalue);
    publictool.returnValue(response,responsevalue);


}

function addOneCart(device_id,datajson,response,index){
    if(index < datajson.length){

        var cart = datajson[index];
        var pid = cart.product_id;
        var quantity = cart.quantity;

        var cartmodel = mongoose.model('cartList');
        cartmodel.find({token:device_id,product_id:pid},function(err,docs){
            if(docs.length > 0){
                for(var i = 0; i < docs.length;++i){
                    var onecart = docs[i];
                    var bfind = false;
                    for(var j = 0; j < onecart.attr_list.length;++j){
                        for(var k = 0; k < cart.attr_list.length;++k){
                            if(onecart.attr_list[j].goods_attr_id == cart.attr_list[k].goods_attr_id){
                                bfind = true;
                                var newquantity = onecart.quantity + new Number(cart.quantity);
                                cartmodel.update({_id:docs[i]._id},{$set:{quantity:newquantity}},function(err,num){
                                    if(err){
                                        console.log("update err  " + err);
                                    }
                                });
                            }
                        }
                    }
                    if(!bfind){
                        saveNewCart(pid,device_id,datajson,response,index,response,quantity,cart);
                    }else{
                        addOneCart(device_id,datajson,response,index + 1);
                    }
                }
            }
            else{
                saveNewCart(pid,device_id,datajson,response,index,response,quantity,cart);
            }
        });
    }else{
        var responsevalue = {
            "info":{"extra":null,"data":null},"response_status":"true","msg":null
        }
        console.log(responsevalue);
        publictool.returnValue(response,responsevalue);
    }
}

function saveNewCart(pid,device_id,datajson,response,index,response,quantity,cart){
    var productmodel = mongoose.model('todayProduct');

    var newcart = {
        token:device_id
        ,product_id:pid
        ,is_activity:0
        ,activity_type:1
        ,quantity:quantity
        ,title:''
        ,pic_url:''
        ,price:0.00
        ,state:1
        ,tag:''
        ,invalid_time:''
        ,referral_code:''
        ,attr_list:[]
    };

    productmodel.findOne({pid:pid},function(err,doc){
        if(doc){
            newcart.title = doc.title;
            newcart.pic_url = doc.pic_url;
            newcart.price = doc.price;
            newcart.state = doc.state;

            var attrlist = cart.attr_list;
            if(attrlist.length > 0){
                findAttrList(device_id,datajson,response,index,attrlist,newcart,0);
            }
            else{
                console.log("no product attr  " + pid);
                publictool.returnErr(response,'没有此商品属性');
            }
        }
        else{
            console.log("no product  " + pid);
            publictool.returnErr(response,'没有此商品');
        }
    });
}

function findAttrList(device_id,datajson,response,index,attrlist,newcart,attrindex){
    if(attrindex < attrlist.length){
        var attr = attrlist[attrindex];
        var attrmodel = mongoose.model('todayProductAttr');

        attrmodel.findOne({goods_attr_id:attr.goods_attr_id},function(err,doc){
            if(doc){
                var attrvar = {
                    attr_id:doc.attr_id
                    ,goods_attr_id:doc.goods_attr_id
                    ,attr_name:doc.attr_name
                    ,attr_value:doc.attr_value
                    ,attr_price:doc.attr_price
                    ,attr_type:doc.attr_type
                }

                newcart.attr_list.push(attrvar);

                findAttrList(device_id,datajson,response,index,attrlist,newcart,attrindex + 1);
            }
            else{
                console.log("no product attr  " + attr.goods_attr_id);
                publictool.returnErr(response,'没有此商品属性');
            }
        });
    }else{
        var cartmodel = mongoose.model('cartList');
        var cartentity = new cartmodel(newcart);
        cartentity.save(function( err, silence ) {
            if( err )
            {
                console.log(err);
            }
        });

        addOneCart(device_id,datajson,response,index + 1);
    }

}