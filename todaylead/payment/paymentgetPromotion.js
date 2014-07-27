/**
 * Created by gump on 3/26/14.
 */

var url = require("url");
var querystring = require("querystring");
var publictool = require("../todayPublic/getAssistantValue");

function getPromotionDetail(response,request){

    var arg = url.parse(request.url).query;
    var strtotalprice = querystring.parse(arg).price;
    var strpayment_way_id = querystring.parse(arg).payment_way_id;
    var provice = querystring.parse(arg).province_code;

    if(provice&&strpayment_way_id&&strtotalprice){
        var payment_way_id = new Number(strpayment_way_id);
        var totalprice = new Number(strtotalprice);

        var shoping_fee = checkShopingFee(payment_way_id,totalprice,provice,false,response);
        if(shoping_fee != -1.0){
            var orderprice = totalprice + shoping_fee;
            var responsevalue = {
                info:{
                    extra:'',
                    data:{
                        product_total_price:totalprice,
                        discount_amount: 0.00,
                        price: orderprice,
                        transport_price: shoping_fee,
                        transport_price_reduce: 0.00,
                        product_price_reduce: 0.00
                    }
                },
                response_status:'true',
                msg:''
            }

            publictool.returnValue(response,responsevalue);
        }


    }else{
        publictool.returnErr(response,'参数不全');
    }
}

function checkShopingFee(payment_way_id,totalprice,provice,isPrompt,response){
    var shopingfee = 16.00;

    if(isPrompt){
        if(payment_way_id == 1 && totalprice - 20.0 < 0.01){
            publictool.returnErr(response,'低于20元不可以货到付款哦');
            shopingfee = -1.0;
            return shopingfee;
        }
    }

    if(payment_way_id == 1){
        if(totalprice - 167.99 < 0.01){
            switch(provice){
                case '2182'://山东
                {
                    shopingfee = 9.0;
                }
                    break;
                case '1643'://江苏
                case '3133'://浙江
                case '21'://上海
                {
                    shopingfee = 10.0;
                }
                    break;
                case '104'://安徽
                {
                    shopingfee = 11.0;
                }
                    break;
                case '3449'://北京
                {
                    shopingfee = 10.0;
                }
                    break;
                case '42'://天津
                case '814'://河北
                case '998'://河南
                {
                    shopingfee = 11.0;
                }
                    break;
                case '1320'://湖北
                case '1436'://湖南
                {
                    shopingfee = 12.0;
                }
                    break;
                case '1763'://江西
                {
                    shopingfee = 11.0;
                }
                    break;
                case '227'://福建
                {
                    shopingfee = 14.0;
                }
                    break;
                case '2340'://山西
                case '2471'://陕西
                {
                    shopingfee = 13.0;
                }
                    break;
                case '423'://广东
                {
                    shopingfee = 13.0;
                }
                    break;
                case '1176'://黑龙江
                {
                    shopingfee = 12.0;
                }
                    break;
                case '1573'://吉林
                {
                    shopingfee = 16.0;
                }
                    break;
                case '1874'://辽宁
                {
                    shopingfee = 13.0;
                }
                    break;
                case '322'://甘肃
                {
                    shopingfee = 14.0;
                }
                    break;
                case '2103'://宁夏
                {
                    shopingfee = 15.0;
                }
                    break;
                case '2130'://青海
                {
                    shopingfee = 14.0;
                }
                    break;
                case '2589'://四川
                {
                    shopingfee = 13.0;
                }
                    break;
                case '62'://重庆
                {
                    shopingfee = 12.0;
                }
                    break;
                case '566'://广西
                {
                    shopingfee = 13.0;
                }
                    break;
                case '2987'://云南
                {
                    shopingfee = 15.0;
                }
                    break;
                case '690'://贵州
                {
                    shopingfee = 13.0;
                }
                    break;
                case '788'://海南
                {
                    shopingfee = 13.0;
                }
                    break;
                case '1989'://内蒙
                {
                    shopingfee = 11.0;
                }
                    break;
                case '2873'://新疆
                case '2792'://西藏
                {
                    shopingfee = 23.0;
                }
                    break;
                default :
                {
                    shopingfee = 13.0;
                }
                    break;
            }
        }else{
            shopingfee = 0.0;
        }
    }else if(payment_way_id == 2){
        if(totalprice - 99.99 < 0.01){
            switch(provice){
                case '2182'://山东
                {
                    shopingfee = 6.0;
                }
                    break;
                case '1643'://江苏
                case '3133'://浙江
                case '21'://上海
                {
                    shopingfee = 6.0;
                }
                    break;
                case '104'://安徽
                {
                    shopingfee = 6.0;
                }
                    break;
                case '3449'://北京
                {
                    shopingfee = 6.0;
                }
                    break;
                case '42'://天津
                case '814'://河北
                case '998'://河南
                {
                    shopingfee = 7.0;
                }
                    break;
                case '1320'://湖北
                case '1436'://湖南
                {
                    shopingfee = 8.0;
                }
                    break;
                case '1763'://江西
                {
                    shopingfee = 8.0;
                }
                    break;
                case '227'://福建
                {
                    shopingfee = 8.0;
                }
                    break;
                case '2340'://山西
                case '2471'://陕西
                {
                    shopingfee = 9.0;
                }
                    break;
                case '423'://广东
                {
                    shopingfee = 9.0;
                }
                    break;
                case '1176'://黑龙江
                case '1573'://吉林
                case '1874'://辽宁
                {
                    shopingfee = 9.0;
                }
                    break;
                case '322'://甘肃
                {
                    shopingfee = 12.0;
                }
                    break;
                case '2103'://宁夏
                {
                    shopingfee = 12.0;
                }
                    break;
                case '2130'://青海
                {
                    shopingfee = 12.0;
                }
                    break;
                case '2589'://四川
                {
                    shopingfee = 10.0;
                }
                    break;
                case '62'://重庆
                {
                    shopingfee = 10.0;
                }
                    break;
                case '566'://广西
                {
                    shopingfee = 10.0;
                }
                    break;
                case '2987'://云南
                {
                    shopingfee = 11.0;
                }
                    break;
                case '690'://贵州
                {
                    shopingfee = 11.0;
                }
                    break;
                case '788'://海南
                {
                    shopingfee = 11.0;
                }
                    break;
                case '1989'://内蒙
                {
                    shopingfee = 10.0;
                }
                    break;
                case '2873'://新疆
                case '2792'://西藏
                {
                    shopingfee = 20.0;
                }
                    break;
                default :
                {
                    shopingfee = 10.0;
                }
                    break;
            }
        }else{
            shopingfee = 0.0;
        }
    }

    return shopingfee;
}

exports.getPromotionDetail = getPromotionDetail;
exports.getShopingFee = checkShopingFee;