/**
 * Created by lishiming on 14-7-2.
 */

var commenthandle = require("../todaylead/todayPublic/comment/commentcontent");

//var datanow = Date.now().toString();
//console.log('now:'+datanow);
//var d = new Date();
//var dd = new Date(1404549240000);
//console.log('时间戳变为时间:'+dd);
//var ddd = new Date(2014,5,30,9,20);
//console.log('时间变时间戳',ddd,ddd.getTime(),ddd.getMonth());

var arr = commenthandle.commentHandles["41"];
for(i in arr){
    var timestr = arr[i].create_time;


    var stry = '20'+ timestr.substring(0,2);
    var iy = new Number(stry);
    var im = new Number(timestr.substring(3,5)) - 1;
    var id = new Number(timestr.substring(6,8));
    var ih = new Number(timestr.substring(9,11));
    var imo = new Number(timestr.substring(12,14));

    var ddd = new Date(iy,im,id,ih,imo);
    console.log('时间变时间戳',ddd,ddd.getTime(),ddd.getMonth());
}