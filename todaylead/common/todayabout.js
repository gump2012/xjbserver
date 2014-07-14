/**
 * Created by lishiming on 14-7-1.
 */

var publictool = require("../todayPublic/getAssistantValue");

exports.todayabout = function(response,request){
      responsevalue = {
          info:{
              extra:{},
              data:{
                  content:''
              }
          },
          response_status:'true',
          msg:''
      }

    var strversion = publictool.getVersion(request);

    responsevalue.info.data.content = '<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" />' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" />' +
        '<title>关于我们</title><style>' +
        '*{margin:0;padding:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);}' +
        'body{font-size:12px;background:#F0F0F0;}.logo{text-align:center;padding-left:20%;padding-top:5%;background:#FFFFFF;padding-bottom:10%;position:relative;}' +
        '.ver{position:absolute;left:66%;font-size:1em;color:#FFF;}.content{border-top:1px solid #CBCBCB;background:#FFFFFF;padding-bottom:2%;}.' +
        'title{background:url(http://xingjiabi.b0.upaiyun.com/ico/abouticobg.png) no-repeat;height:1.8em;line-height:1.8em;text-align:center;width:40%;background-size:cover;}' +
        '.title span{margin-left:-10%;color:#FFFFFF;}ul{margin-top:5%;margin-left:8%;color:#7A7A7A;}' +
        'li{font-size:1.5em;list-style:none;line-height:1.5em;}li span{display:inline-table;vertical-align:top;}.' +
        'footer{margin-top:10%;line-height:1.5em;font-size:1.25em;color:#747474;text-align:center;width:100%;}' +
        '</style></head><body><div class="logo"><div class="ver">'+strversion+'</div><img src="http://pic.yupoo.com/yige2002/DU9WGCQo/dvDui.png" width="64%"/>' +
        '</div><div class="content"><div class="title"><span>商务合作方式</span></div>' +
        '<ul><li><span>QQ:</span><span>304261359</span></li><li><span>Email:</span><span>toupai@3pshow.com</span></li></ul></div>' +
        '<div class="footer"><div>Copyright&copy;2014 今日头牌 版权所有</div><div>三人秀(北京)科技有限公司</div></div></body></html>';

    console.log(responsevalue.info.data.content);
     publictool.returnValue(response,responsevalue);

}