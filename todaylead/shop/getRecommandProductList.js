/**
 * Created by gump on 6/28/14.
 */
var publicfun = require("../todayPublic/getAssistantValue");
var mongoose = require('mongoose');
var querystring = require("querystring");

exports.getRecommandProductList = function(response,request){

    var productid = publicfun.getpid(request);

    if(productid){
        var responsevalue = {
            info:{
                extra:''
                ,data:
                [
                    {
                        "product_id": "1005",
                        "name": "雷霆 活塞X-9飞机杯自动抽插运动伸缩自慰器【新品尝鲜】",
                        "price": "198.00",
                        "picture": "http://img01.taobaocdn.com/imgextra/i1/468359490/TB2aWvXXVXXXXX0XpXXXXXXXXXX-468359490.jpg"
                    },
                    {
                        "product_id": "1012",
                        "name": "香港leten雷霆 3D名器倒模 男用自慰器 逼真肤质体验【新品尝鲜】",
                        "price": "38.00",
                        "picture": "http://img03.taobaocdn.com/imgextra/i3/468359490/TB2wA1.XVXXXXb9XXXXXXXXXXXX-468359490.jpg"
                    },
                    {
                        "product_id": "1013",
                        "name": "爱巢玩爆 4D黑腔名器 真人倒模男用神器 逼真体感【新品尝鲜】",
                        "price": "46.00",
                        "picture": "http://img04.taobaocdn.com/imgextra/i4/468359490/TB2mw9.XVXXXXaFXpXXXXXXXXXX-468359490.jpg"
                    },
                    {
                        "product_id": "1024",
                        "name": "爱巢玩爆 5D黑腔美肌名器 男用自慰倒模 硅胶真实肤感【新品尝鲜】",
                        "price": "58.00",
                        "picture": "http://img01.taobaocdn.com/imgextra/i1/468359490/TB2D.a.XVXXXXbDXXXXXXXXXXXX-468359490.jpg"
                    },
                    {
                        "product_id": "1025",
                        "name": "爱巢取悦 震动前列腺 电动按摩棒【新品尝鲜】",
                        "price": "78.00",
                        "picture": "http://img03.taobaocdn.com/imgextra/i3/468359490/TB2Xn9.XVXXXXcVXXXXXXXXXXXX-468359490.jpg"
                    },
                    {
                        "product_id": "848",
                        "name": "Youcups优客仕万能环 3只可组装男用飞机杯",
                        "price": "38.00",
                        "pic_url": "http://img01.taobaocdn.com/imgextra/i1/468359490/T2pG1NXsVaXXXXXXXX-468359490.jpg"
                    },
                    {
                        "product_id": "732",
                        "title": "AV女优NPG并木优真人阴臀倒模",
                        "price": "68.00",
                        "picture": "http://img04.taobaocdn.com/imgextra/i4/468359490/T2e_F8XlNaXXXXXXXX_!!468359490.jpg"
                    },
                    {
                        "product_id": "754",
                        "name": "根之浴真人发声 12频 炫彩电动杯 5款可选",
                        "price": "138.00",
                        "pic_url": "http://img03.taobaocdn.com/imgextra/i3/468359490/T2taVOXEtXXXXXXXXX-468359490.jpg"
                    },
                    {
                        "product_id": "96",
                        "name": "AV女优17岁少女小萝莉双姐妹名器倒模",
                        "price": "48.00",
                        "picture": "http://img03.taobaocdn.com/imgextra/i3/468359490/T2Vjr9XI4aXXXXXXXX-468359490.jpg"
                    }
                ]
            }
            ,response_status:'true'
            ,msg:''
        };

        publicfun.returnValue(response,responsevalue);
    }
    else{
        publicfun.returnErr(response,'没有商品id');
    }
}