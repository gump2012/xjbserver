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
			picture: "http://pic.yupoo.com/yige2002/EfDJJGlu/gowds.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 1001,
				name: "惹火睡裙",
				picture: "http://pic.yupoo.com/yige2002/Ef5VLnJX/dCwcP.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1002,
				name: "角色扮演",
				picture: "http://pic.yupoo.com/yige2002/Ef5VLdSU/UXr2V.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1003,
				name: "情趣三点",
				picture: "http://pic.yupoo.com/yige2002/Ef5VLeqv/IpRut.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1004,
				name: "连体网衣",
				picture: "http://pic.yupoo.com/yige2002/Ef5VLyga/tiDyo.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1005,
				name: "美腿丝袜",
				picture: "http://pic.yupoo.com/yige2002/Ef5VLjgE/JyDVO.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1006,
				name: "丁字裤",
				picture: "http://pic.yupoo.com/yige2002/Ef5VKHKz/S82sb.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1007,
				name: "性感肚兜",
				picture: "http://pic.yupoo.com/yige2002/Ef5VzQuh/aToGE.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 1008,
				name: "优雅旗袍",
				picture: "http://pic.yupoo.com/yige2002/Ef5VzuFc/hB71F.jpg"
			}
			item.data_list.push(subItem);
		}
		
		
		responsevalue.info.data.data_list.push(item);
	}
	
	
	
	{
	    var item = {
	        category_id: 2,
	        name: "套套世界",
			picture: "http://pic.yupoo.com/yige2002/EfDJYhgD/jFZpX.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 2001,
				name: "杜蕾斯",
				picture: "http://pic.yupoo.com/yige2002/Ef5WxP4a/4u7q0.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2002,
				name: "冈本",
				picture: "http://pic.yupoo.com/yige2002/Ef5WycFF/L6xTO.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2003,
				name: "杰士邦",
				picture: "http://pic.yupoo.com/yige2002/Ef5Wyae4/4vEkE.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2004,
				name: "名流",
				picture: "http://pic.yupoo.com/yige2002/Ef5WyarA/SNgyZ.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2005,
				name: "第六感",
				picture: "http://pic.yupoo.com/yige2002/Ef5Wxz5A/SPdww.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2006,
				name: "倍力乐",
				picture: "http://pic.yupoo.com/yige2002/Ef5WlKRj/JNJEI.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2007,
				name: "狼牙颗粒",
				picture: "http://pic.yupoo.com/yige2002/Ef5WyctV/oXBnk.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2008,
				name: "超值促销",
				picture: "http://pic.yupoo.com/yige2002/Ef5VzuFc/hB71F.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2009,
				name: "超薄系列",
				picture: "http://pic.yupoo.com/yige2002/Ef5WxtGX/222WJ.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 2010,
				name: "紧绷持久",
				picture: "http://pic.yupoo.com/yige2002/Ef5WxZMx/O21I3.jpg"
			}
			item.data_list.push(subItem);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	
	{
	    var item = {
	        category_id: 3,
	        name: "男用玩具",
			picture: "http://pic.yupoo.com/yige2002/EfDJXh3n/95GWI.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 3001,
				name: "飞机杯",
				picture: "http://pic.yupoo.com/yige2002/Ef5XCOzh/bJ0xt.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 3002,
				name: "阴臀倒模",
				picture: "http://pic.yupoo.com/yige2002/Ef5XrsOJ/7QNHT.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 3003,
				name: "前列腺",
				picture: "http://pic.yupoo.com/yige2002/Ef5XCZLG/qJLub.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 3004,
				name: "充气娃娃",
				picture: "http://pic.yupoo.com/yige2002/Ef5XCGU3/iK7z4.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 3005,
				name: "延时训练",
				picture: "http://pic.yupoo.com/yige2002/Ef5XD9nE/9nI5m.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 3006,
				name: "包茎矫正",
				picture: "http://pic.yupoo.com/yige2002/Ef5XCtDJ/12E96G.jpg"
			}
			item.data_list.push(subItem);
		}
		
		
		responsevalue.info.data.data_list.push(item);
	}
	
	
	{
	    var item = {
	        category_id: 4,
	        name: "女用玩具",
			picture: "http://pic.yupoo.com/yige2002/EfDJJAAl/pu3VR.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 4001,
				name: "AV棒",
				picture: "http://pic.yupoo.com/yige2002/Ef5Y1cSL/943oV.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4002,
				name: "G点刺激",
				picture: "http://pic.yupoo.com/yige2002/Ef5Y1nk2/V75ll.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4003,
				name: "转珠棒",
				picture: "http://pic.yupoo.com/yige2002/Ef5Y214p/aVnbP.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4004,
				name: "情趣跳蛋",
				picture: "http://pic.yupoo.com/yige2002/Ef5Y1EWZ/9HbDG.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4005,
				name: "缩阴锻炼",
				picture: "http://pic.yupoo.com/yige2002/Ef5XQd1V/Y5Met.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4006,
				name: "后庭",
				picture: "http://pic.yupoo.com/yige2002/Ef5Y1FBn/UT6S5.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4007,
				name: "仿真阳具",
				picture: "http://pic.yupoo.com/yige2002/Ef5Y1F4a/8j6OP.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4008,
				name: "丰乳",
				picture: "http://pic.yupoo.com/yige2002/Ef5Y1Swg/F1oqQ.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 4009,
				name: "穿戴",
				picture: "http://pic.yupoo.com/yige2002/Ef5Y1Akj/KMRGp.jpg"
			}
			item.data_list.push(subItem);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	
	{
	    var item = {
	        category_id: 5,
	        name: "延时助勃",
			picture: "http://pic.yupoo.com/yige2002/EfDJXqAE/KrKKk.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 5001,
				name: "延时喷剂",
				picture: "http://pic.yupoo.com/yige2002/Ef5YnPib/MtKkP.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 5002,
				name: "锁精套环",
				picture: "http://pic.yupoo.com/yige2002/Ef5YnyFH/ymKE1.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 5003,
				name: "延时湿巾",
				picture: "http://pic.yupoo.com/yige2002/Ef5YnGbw/7NEEN.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 5004,
				name: "增大助勃",
				picture: "http://pic.yupoo.com/yige2002/Ef5Yo9Qf/HSXGg.jpg"
			}
			item.data_list.push(subItem);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	
	
	
	
	
	
	
	{
	    var item = {
	        category_id: 6,
	        name: "润滑清洁",
			picture: "http://pic.yupoo.com/yige2002/EfDJXu9D/At1kX.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 6001,
				name: "私处养护",
				picture: "http://pic.yupoo.com/yige2002/Ef5YJxfe/guqoC.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 6002,
				name: "消毒清洗",
				picture: "http://pic.yupoo.com/yige2002/Ef5YJoBT/wsjAR.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 6003,
				name: "情趣润滑",
				picture: "http://pic.yupoo.com/yige2002/Ef5YJf5X/mRA9o.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 6004,
				name: "可食用润滑",
				picture: "http://pic.yupoo.com/yige2002/Ef5YJ4Br/XoGdY.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 6005,
				name: "仿真润滑液",
				picture: "http://pic.yupoo.com/yige2002/Ef5YISHw/13KCSc.jpg"
			}
			item.data_list.push(subItem);
		}
		
		
		responsevalue.info.data.data_list.push(item);
	}
	
	
	{
	    var item = {
	        category_id: 7,
	        name: "催情助兴",
			picture: "http://pic.yupoo.com/yige2002/EfDJK9qp/WjNfX.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 7001,
				name: "调情香水",
				picture: "http://pic.yupoo.com/yige2002/Ef60nsuh/159rdE.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 7002,
				name: "女用催情",
				picture: "http://pic.yupoo.com/yige2002/Ef60ze1o/ZZEiM.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 7003,
				name: "双人助情",
				picture: "http://pic.yupoo.com/yige2002/Ef60zdyb/YR83l.jpg"
			}
			item.data_list.push(subItem);
		}
		
		responsevalue.info.data.data_list.push(item);
	}
	
	{
	    var item = {
	        category_id: 8,
	        name: "双人游戏",
			picture: "http://pic.yupoo.com/yige2002/EfDJYbMj/TIOa9.png",
			data_list: []
	    }
		
		{
			var subItem = {
				category_id: 8001,
				name: "乳头刺激",
				picture: "http://pic.yupoo.com/yige2002/Ef60VRJX/xxHGM.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 8002,
				name: "SM系列",
				picture: "http://pic.yupoo.com/yige2002/Ef60VGkj/nQtZr.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 8003,
				name: "捆绑绳索",
				picture: "http://pic.yupoo.com/yige2002/Ef60VGuA/DAQR8.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 8004,
				name: "另类体验",
				picture: "http://pic.yupoo.com/yige2002/Ef60VAyY/FQWRA.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 8005,
				name: "双人共振",
				picture: "http://pic.yupoo.com/yige2002/Ef60KdD7/xOqMQ.jpg"
			}
			item.data_list.push(subItem);
		}
		{
			var subItem = {
				category_id: 8006,
				name: "欢爱家具",
				picture: "http://pic.yupoo.com/yige2002/Ef60VuM0/DeZKu.jpg"
			}
			item.data_list.push(subItem);
		}
		
		responsevalue.info.data.data_list.push(item);
	}

    publictool.returnValue(response,responsevalue);
}

exports.getCategoryList = getCategoryList;
exports.getCategoryList_2 = getCategoryList_2;