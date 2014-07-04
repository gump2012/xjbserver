/**
 * Created by lishiming on 14-7-2.
 */
var datanow = Date.now().toString();
console.log('now:'+datanow);
var d = new Date();
var dd = new Date(1404354300000);
console.log('时间戳变为时间:'+dd);
var ddd = new Date(2014,5,30,9,20);
console.log('时间变时间戳',ddd,ddd.getTime(),ddd.getMonth());
