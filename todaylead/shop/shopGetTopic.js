/**
 * Created by gump on 4/21/14.
 */
var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");

function getTopic(response,request){

    var responsevalue = {
        info:{
            extra:{},
            data:{
                topic_list:[]
                ,recommend:{
                    name:''
                    ,keyword:''
                    ,product_list:[]
                }
            }
        },
        response_status:'true',
        msg:''
    }


    var topicmodle;
    if(publictool.getSelfPlatform(request) == "android"){
        var vc = publictool.getSelfVersionCount(request);
        var ivc = new Number(vc);
        if(ivc > 3){
            topicmodle = mongoose.model('todayshoptopic');
        }
        else{
            topicmodle = mongoose.model('todayshoptopicold');
        }
    }
    else{
        topicmodle = mongoose.model('todayshoptopic');
    }

    topicmodle.find({},function(err,doc){
        for(var i in doc){
            var item = {
                topic_id           :doc[i].topicid
                ,picture          :doc[i].pic_url
                ,name            :doc[i].title
                ,product_list            :[]
            }

            var iTop = 5;
            if(doc[i].goods.length - 1 > iTop)
            {
                for(var j = 0; j < iTop; ++j)
                {
					var topicProductItem = {
						picture          :doc[i].goods[j].pic_url
						,product_id            :doc[i].goods[j].product_id
                        ,name :doc[i].goods[j].name
					}
                    item.product_list.push(topicProductItem);
                }
            }
            else{
                for(var j = 0; j < doc[i].goods.length - 1; ++j)
                {
					var topicProductItem = {
						picture          :doc[i].goods[j].pic_url
						,product_id            :doc[i].goods[j].product_id
                        ,name :doc[i].goods[j].name
					}
                    item.product_list.push(topicProductItem);
                }
            }

            responsevalue.info.data.data_list.push(item);
        }

        getRecommend(request,response,responsevalue);
    });
}

function getRecommend(request,response,responsevalue){
    var productmodle = mongoose.model('todayProduct');

    var strRecommend = '头牌推荐';
    var strkw = '头牌推荐';

    responsevalue.info.data.recommend.name = strRecommend;
    responsevalue.info.data.recommend.keyword = strkw;

//    productmodle.find({},'title pid pic_url',{sort: {pid:'desc'}}, function (err, docs) {
//        var gettext=[];
//        for(var i in docs){
//            if(docs[i].title.indexOf(strkw) != -1){
//                var item = {
//                    picture:docs[i].pic_url
//                    ,product_id:docs[i].pid
//                }
//                gettext.push(item);
//            }
//        }
//
//        if(gettext.length > 2)
//        {
//            for(var i = 0; i < 3; ++i)
//            {
//                responsevalue.info.data.recommend.product_list.push(gettext[i]);
//            }
//        }
//        else
//        {
//            for(i in gettext)
//            {
//                responsevalue.info.data.recommend.product_list.push(gettext[i]);
//            }
//        }
//
//        publictool.returnValue(response,responsevalue);
//    });

    if(publictool.getSelfPlatform(request) == "android"){
        var vc = publictool.getSelfVersionCount(request);
        var ivc = new Number(vc);
        if(ivc > 3){
            var item = {
                picture:'http://pic.yupoo.com/yige2002/Eby7linn/6lqgM.jpg'
                ,product_id:224
                ,name:'一抹娇羞'
            }
            responsevalue.info.data.recommend.product_list.push(item);
            var item1 = {
                picture:'http://pic.yupoo.com/yige2002/Eby7l6BZ/LeMjH.jpg'
                ,product_id:362
                ,name:'浓情蜜液'
            }
            responsevalue.info.data.recommend.product_list.push(item1);
            var item2 = {
                picture:'http://pic.yupoo.com/yige2002/Eby7kYh0/1pKF9.jpg'
                ,product_id:455
                ,name:'等君还家来'
            }
            responsevalue.info.data.recommend.product_list.push(item2);
        }
        else{
            var item = {
                picture:'http://pic.yupoo.com/yige2002/Eby6MvXz/uMrsH.jpg'
                ,product_id:224
                ,name:'一抹娇羞'
            }
            responsevalue.info.data.recommend.product_list.push(item);
            var item1 = {
                picture:'http://pic.yupoo.com/yige2002/Eby6LF4o/HcSTI.jpg'
                ,product_id:362
                ,name:'浓情蜜液'
            }
            responsevalue.info.data.recommend.product_list.push(item1);
            var item2 = {
                picture:'http://pic.yupoo.com/yige2002/Eby6LlNH/TujFH.jpg'
                ,product_id:455
                ,name:'等君还家来'
            }
            responsevalue.info.data.recommend.product_list.push(item2);
        }
    }
    else{
        var item = {
            picture:'http://pic.yupoo.com/yige2002/Eby7linn/6lqgM.jpg'
            ,product_id:224
            ,name:'一抹娇羞'
        }
        responsevalue.info.data.recommend.product_list.push(item);
        var item1 = {
            picture:'http://pic.yupoo.com/yige2002/Eby7l6BZ/LeMjH.jpg'
            ,product_id:362
            ,name:'浓情蜜液'
        }
        responsevalue.info.data.recommend.product_list.push(item1);
        var item2 = {
            picture:'http://pic.yupoo.com/yige2002/Eby7kYh0/1pKF9.jpg'
            ,product_id:455
            ,name:'等君还家来'
        }
        responsevalue.info.data.recommend.product_list.push(item2);
    }



    publictool.returnValue(response,responsevalue);
}






function getTopic_2(response,request){

    var responsevalue = {
        info:{
            extra:{},
            data:{
                data_list:[]
            }
        },
        response_status:'true',
        msg:''
    }
	
	
	{
		var item = {
		    type: 5
		    ,name: "放纵放心"
		    ,data_list: []
		}
		
		item.more_info = {
			type: 2
			,id: 107
		};
		
		{
			var dataProduct = {
				type: 1
				,id: 224
				,picture: "http://pic.yupoo.com/yige2002/EeuDvlYy/uXmaW.jpg"
			}
			item.data_list.push(dataProduct);
		}
		
		{
			var dataProduct = {
				type: 1
				,id: 362
				,name: "浓情蜜液"
				,picture: "http://pic.yupoo.com/yige2002/EeuDwD1p/14RgsO.jpg"
			}
			item.data_list.push(dataProduct);
		}
		{
			var dataProduct = {
				type: 1
				,id: 84
				,name: "三倍持久"
				,picture: "http://pic.yupoo.com/yige2002/EeuDykQm/S7LhW.jpg"
			}
			item.data_list.push(dataProduct);
		}
		{
			var dataProduct = {
				type: 1
				,id: 79
				,name: "玉兔旋风"
				,picture: "http://pic.yupoo.com/yige2002/EeuDxZIn/10RjoU.jpg"
			}
			item.data_list.push(dataProduct);
		}
		{
			var dataProduct = {
				type: 1
				,id: 66
				,name: "震动C字裤"
				,picture: "http://pic.yupoo.com/yige2002/EeuDycYX/aopdA.jpg"
			}
			item.data_list.push(dataProduct);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	{
		var item = {
		    type: 3
		    ,name: "樱桃果味"
		    ,data_list: []
			,rate: 500.0 / 145.0
		}
		
		{
			var dataProduct = {
				type: 1
				,id: 0
				,picture: "http://pic.yupoo.com/yige2002/EeuM3Xwe/medium.jpg"
			}
			item.data_list.push(dataProduct);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	{
		var item = {
		    type: 5
		    ,name: "TOP热卖"
		    ,data_list: []
		}
		
		item.more_info = {
			type: 2
			,id: 110
		};
		
		{
			var dataProduct = {
				type: 2
				,id: 106
				,picture: "http://pic.yupoo.com/yige2002/EeqRoTPK/ClEgg.jpg"
			}
			item.data_list.push(dataProduct);
		}
		
		{
			var dataProduct = {
				type: 1
				,id: 307
				,name: "7分钟罪爱"
				,picture: "http://pic.yupoo.com/yige2002/EeqTa1di/SvCHK.jpg"
			}
			item.data_list.push(dataProduct);
		}
		{
			var dataProduct = {
				type: 1
				,id: 100
				,name: "第六感组合"
				,picture: "http://pic.yupoo.com/yige2002/EeqT2rKM/xZsSx.jpg"
			}
			item.data_list.push(dataProduct);
		}
		{
			var dataProduct = {
				type: 1
				,id: 456
				,name: "我在这里等你"
				,picture: "http://pic.yupoo.com/yige2002/EeqTYNZ1/PhW3c.jpg"
			}
			item.data_list.push(dataProduct);
		}
		{
			var dataProduct = {
				type: 1
				,id: 212
				,name: "和服风情"
				,picture: "http://pic.yupoo.com/yige2002/Eeuyrbxl/KkQAD.jpg"
			}
			item.data_list.push(dataProduct);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	{
		var item = {
		    type: 3
		    ,name: "鏖战通宵"
		    ,data_list: []
		}
		
		// item.more_info = {
		// 	type: 2
		// 	,id: 108
		// };
		
		{
			var dataProduct = {
				type: 1
				,id: 225
				,picture: "http://pic.yupoo.com/yige2002/Eeqflttv/Kcn91.jpg"
			}
			item.data_list.push(dataProduct);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	{
		var item = {
		    type: 5
		    ,name: "性福之家"
		    ,data_list: []
		}
		
		item.more_info = {
			type: 2
			,id: 109
		};
		
		{
			var dataProduct = {
				type: 2
				,id: 100
				,picture: "http://pic.yupoo.com/yige2002/EeqvDxPN/xLzXO.jpg"
			}
			item.data_list.push(dataProduct);
		}
		
		{
			var dataProduct = {
				type: 1
				,id: 758
				,name: "极爽女用套"
				,picture: "http://pic.yupoo.com/yige2002/Eeqw3A2E/KviFF.jpg"
			}
			item.data_list.push(dataProduct);
		}
		{
			var dataProduct = {
				type: 1
				,id: 354
				,name: "快感增强香水"
				,picture: "http://pic.yupoo.com/yige2002/EeqwsZm8/b2axQ.jpg"
			}
			item.data_list.push(dataProduct);
		}
		{
			var dataProduct = {
				type: 1
				,id: 22
				,name: "日本销量第一"
				,picture: "http://pic.yupoo.com/yige2002/Eeqy5EIG/rscgG.jpg"
			}
			item.data_list.push(dataProduct);
		}
		{
			var dataProduct = {
				type: 1
				,id: 609
				,name: "女神专用AV棒"
				,picture: "http://pic.yupoo.com/yige2002/EeqxFJQk/ta5jc.jpg"
			}
			item.data_list.push(dataProduct);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	{
		var item = {
		    type: 3
		    ,name: "旋转魔舌"
		    ,data_list: []
			,rate: 500.0 / 145.0
		}
		
		{
			var dataProduct = {
				type: 1
				,id: 111
				,picture: "http://pic.yupoo.com/yige2002/EeuGfHAc/Mi5Zj.jpg"
			}
			item.data_list.push(dataProduct);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	{
		var item = {
		    type: 5
		    ,name: "特惠来袭"
		    ,data_list: []
		}
		
		item.more_info = {
			type: 2
			,id: 111
		};
		
		{
			var dataProduct = {
				type: 2
				,id: 101
				,picture: "http://pic.yupoo.com/yige2002/EeuEUBhs/3PgKp.jpg"
			}
			item.data_list.push(dataProduct);
		}
		
		{
			var dataProduct = {
				type: 2
				,id: 102
				,name: "超低价疯抢区"
				,picture: "http://pic.yupoo.com/yige2002/EeuEVWTT/3s3Ss.jpg"
			}
			item.data_list.push(dataProduct);
		}
		{
			var dataProduct = {
				type: 2
				,id: 103
				,name: "精选不到12元"
				,picture: "http://pic.yupoo.com/yige2002/EeuF4RHg/fJUPP.jpg"
			}
			item.data_list.push(dataProduct);
		}
		{
			var dataProduct = {
				type: 2
				,id: 104
				,name: "延时润滑5折起"
				,picture: "http://pic.yupoo.com/yige2002/EeuF6i9r/tNz9L.jpg"
			}
			item.data_list.push(dataProduct);
		}
		{
			var dataProduct = {
				type: 2
				,id: 105
				,name: "内衣12元起"
				,picture: "http://pic.yupoo.com/yige2002/EeuF62iH/mRDD6.jpg"
			}
			item.data_list.push(dataProduct);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	
	
	
	
    publictool.returnValue(response,responsevalue);
}








exports.getTopic = getTopic;
exports.getTopic_2 = getTopic_2;