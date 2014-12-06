/**
 * Created by lishiming on 14-3-14.
 */

var mongoose = require('mongoose');
var publictool = require("../todayPublic/getAssistantValue");

function getCategoryList(response,request){

    var categorymodle = mongoose.model('todayCategoryList');

    categorymodle.find({},function(err,doc){

        var responsevalue = {
            info:{
                extra:{},
                data:[]
            },
            response_status:'true',
            msg:''
        }

        for(var i in doc){
            var item = {
                category_id : doc[i].cid,
                name : doc[i].cname,
                desc :doc[i].info,
                picture: doc[i].pic_url
            }

            responsevalue.info.data.push(item);
        }

        publictool.returnValue(response,responsevalue);
    });
}


function getCategoryList_2(response,request){
    var responsevalue = {
        info:{
            extra:{},
            data:{
            	data_list: []
            }
        },
        response_status:'true',
        msg:''
    }

	{
	    var item = {
	        category_id: 1,
	        name: "情趣内衣",
//			picture: "http://pic.yupoo.com/yige2002/EfDdlQeO/XeCDt.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 1001,
				name: "惹火睡裙",
				picture: "http://pic.yupoo.com/yige2002/EfNFMJL1/edQOx.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1002,
				name: "角色扮演",
				picture: "http://pic.yupoo.com/yige2002/EfNFM1sv/Xmgat.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1003,
				name: "情趣三点",
				picture: "http://pic.yupoo.com/yige2002/EfNFNnLv/ptblU.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1004,
				name: "连体网衣",
				picture: "http://pic.yupoo.com/yige2002/EfNFMnHH/12A3qz.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1005,
				name: "美腿丝袜",
				picture: "http://pic.yupoo.com/yige2002/EfNFy4jr/pWYLR.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1006,
				name: "丁字裤",
				picture: "http://pic.yupoo.com/yige2002/EfNFxNOp/bWCgg.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1007,
				name: "性感肚兜",
				picture: "http://pic.yupoo.com/yige2002/EfNFNEcV/TaMdC.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1008,
				name: "优雅旗袍",
				picture: "http://pic.yupoo.com/yige2002/EfNFNG0E/PatF2.jpg"
			}
			item.data_list.push(subItem);
		}
		
		
		responsevalue.info.data.data_list.push(item);
	}
	
	
	
	{
	    var item = {
	        category_id: 2,
	        name: "套套世界",
//			picture: "http://pic.yupoo.com/yige2002/EfDdlpT0/tTdjF.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 2001,
				name: "杜蕾斯",
				picture: "http://pic.yupoo.com/yige2002/EfNGTPfn/lcr7Z.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2002,
				name: "冈本",
				picture: "http://pic.yupoo.com/yige2002/EfNGTFOF/L9q99.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2003,
				name: "杰士邦",
				picture: "http://pic.yupoo.com/yige2002/EfNGUax6/14XeMw.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2004,
				name: "名流",
				picture: "http://pic.yupoo.com/yige2002/EfNGU5qz/143wwt.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2005,
				name: "第六感",
				picture: "http://pic.yupoo.com/yige2002/EfNGUiCr/wNUY9.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2006,
				name: "倍力乐",
				picture: "http://pic.yupoo.com/yige2002/EfNGSXMJ/BwAk6.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2007,
				name: "狼牙颗粒",
				picture: "http://pic.yupoo.com/yige2002/EfNGVaUi/WXLU4.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2008,
				name: "超值促销",
				picture: "http://pic.yupoo.com/yige2002/EfNGTb5t/DFLjC.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2009,
				name: "超薄系列",
				picture: "http://pic.yupoo.com/yige2002/EfNGF10K/lmYRl.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2010,
				name: "紧绷持久",
				picture: "http://pic.yupoo.com/yige2002/EfNGV59B/EURlw.jpg"
			}
			item.data_list.push(subItem);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	
	{
	    var item = {
	        category_id: 3,
	        name: "男用玩具",
//			picture: "http://pic.yupoo.com/yige2002/EfDdkHJm/17LV5.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 3001,
				name: "飞机杯",
				picture: "http://pic.yupoo.com/yige2002/EfNHEOZX/N5EGh.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 3002,
				name: "阴臀倒模",
				picture: "http://pic.yupoo.com/yige2002/EfNHFUHJ/kR7Ys.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 3003,
				name: "前列腺",
				picture: "http://pic.yupoo.com/yige2002/EfNHETYc/FsCbf.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 3004,
				name: "充气娃娃",
				picture: "http://pic.yupoo.com/yige2002/EfNHErLU/Z7F3T.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 3005,
				name: "延时训练",
				picture: "http://pic.yupoo.com/yige2002/EfNHEDT5/11Xgmb.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 3006,
				name: "包茎矫正",
				picture: "http://pic.yupoo.com/yige2002/EfNHEmmw/13pJFj.jpg"
			}
			item.data_list.push(subItem);
		}
		
		
		responsevalue.info.data.data_list.push(item);
	}
	
	
	{
	    var item = {
	        category_id: 4,
	        name: "女用玩具",
//			picture: "http://pic.yupoo.com/yige2002/EfDdl2CO/xToe2.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 4001,
				name: "AV棒",
				picture: "http://pic.yupoo.com/yige2002/EfNHMAxU/i52RP.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4002,
				name: "G点刺激",
				picture: "http://pic.yupoo.com/yige2002/EfNHMGFK/2hx2v.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4003,
				name: "转珠棒",
				picture: "http://pic.yupoo.com/yige2002/EfNI1E2K/ijYXD.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4004,
				name: "情趣跳蛋",
				picture: "http://pic.yupoo.com/yige2002/EfNI1m1M/jIh16.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4005,
				name: "缩阴锻炼",
				picture: "http://pic.yupoo.com/yige2002/EfNI1Pje/pNTop.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4006,
				name: "后庭",
				picture: "http://pic.yupoo.com/yige2002/EfNI2eJ4/GffmP.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4007,
				name: "仿真阳具",
				picture: "http://pic.yupoo.com/yige2002/EfNI0YLp/5oQVB.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4008,
				name: "丰乳",
				picture: "http://pic.yupoo.com/yige2002/EfNI25pw/14nWNU.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4009,
				name: "穿戴",
				picture: "http://pic.yupoo.com/yige2002/EfNI0XNb/I0DDK.jpg"
			}
			item.data_list.push(subItem);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	
	{
	    var item = {
	        category_id: 5,
	        name: "延时助勃",
//			picture: "http://pic.yupoo.com/yige2002/EfDdm0Hg/1eeuD.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 5001,
				name: "延时喷剂",
				picture: "http://pic.yupoo.com/yige2002/EfNIdpDr/Jyd1E.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 5002,
				name: "锁精套环",
				picture: "http://pic.yupoo.com/yige2002/EfNIrft8/o6BYJ.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 5003,
				name: "延时湿巾",
				picture: "http://pic.yupoo.com/yige2002/EfNIryyY/3rgmL.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 5004,
				name: "增大助勃",
				picture: "http://pic.yupoo.com/yige2002/EfNIrHmq/rVxoF.jpg"
			}
			item.data_list.push(subItem);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	
	
	
	
	
	
	
	{
	    var item = {
	        category_id: 6,
	        name: "润滑清洁",
//			picture: "http://pic.yupoo.com/yige2002/EfDdkSJz/fbijT.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 6001,
				name: "私处养护",
				picture: "http://pic.yupoo.com/yige2002/EfNIV1I2/FGlO0.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 6002,
				name: "消毒清洗",
				picture: "http://pic.yupoo.com/yige2002/EfNIUQOV/yQyXs.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 6003,
				name: "情趣润滑",
				picture: "http://pic.yupoo.com/yige2002/EfNIULd8/BEZmV.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 6004,
				name: "可食用润滑",
				picture: "http://pic.yupoo.com/yige2002/EfNIVFg9/12Y7DL.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 6005,
				name: "仿真润滑液",
				picture: "http://pic.yupoo.com/yige2002/EfNIUDdO/FtdcZ.jpg"
			}
			item.data_list.push(subItem);
		}
		
		
		responsevalue.info.data.data_list.push(item);
	}
	
	
	{
	    var item = {
	        category_id: 7,
	        name: "催情助兴",
//			picture: "http://pic.yupoo.com/yige2002/EfDd78zB/JgKyX.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 7001,
				name: "调情香水",
				picture: "http://pic.yupoo.com/yige2002/EfNJmkzs/GZjkt.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 7002,
				name: "女用催情",
				picture: "http://pic.yupoo.com/yige2002/EfNJmB3K/4Pcd3.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 7003,
				name: "双人助情",
				picture: "http://pic.yupoo.com/yige2002/EfNJmHE9/GeStG.jpg"
			}
			item.data_list.push(subItem);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	{
	    var item = {
	        category_id: 8,
	        name: "双人游戏",
//			picture: "http://pic.yupoo.com/yige2002/EfDdlpKk/ZP5Ya.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 8001,
				name: "乳头刺激",
				picture: "http://pic.yupoo.com/yige2002/EfNJQ3uC/13d3wV.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 8002,
				name: "SM系列",
				picture: "http://pic.yupoo.com/yige2002/EfNJBdeI/wbwwe.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 8003,
				name: "捆绑绳索",
				picture: "http://pic.yupoo.com/yige2002/EfNJPwsf/FwwF7.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 8004,
				name: "另类体验",
				picture: "http://pic.yupoo.com/yige2002/EfNJByh6/4aVa0.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 8005,
				name: "双人共振",
				picture: "http://pic.yupoo.com/yige2002/EfNJPRIi/ajpwG.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 8006,
				name: "欢爱家具",
				picture: "http://pic.yupoo.com/yige2002/EfNJPNpL/1R1An.jpg"
			}
			item.data_list.push(subItem);
		}
		
		responsevalue.info.data.data_list.push(item);
	}

    publictool.returnValue(response,responsevalue);
}

exports.getCategoryList = getCategoryList;
exports.getCategoryList_2 = getCategoryList_2;