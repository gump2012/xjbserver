/**
 * Created by lishiming on 14-4-17.
 */
var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_shopurl");

function createdb(mongoose){
    var userSchema = new mongoose.Schema({
        adid                    :{
            type: Number,
            unique: true
        }
        ,img_url                :String
        ,type                   :Number
        ,linkto                 :String
        ,param                  :mongoose.Schema.Types.Mixed
    });

    mongoose.model('todayAd',userSchema);

    var todayAd = mongoose.model('todayAd');

    todayAd.remove({}, function(err) {
    });

    var newAd = new todayAd({
        adid:15
        ,img_url:macroproduct.AD_6
        ,type:1
        ,linkto:''
        ,param:{
            app_ad_in_subtype:1
            ,keyword:'光棍节'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newAd = new todayAd({
        adid:14
        ,img_url:macroproduct.AD_5
        ,type:1
        ,linkto:''
        ,param:{
            app_ad_in_subtype:1
            ,keyword:'双11特惠'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newAd = new todayAd({
        adid:13
        ,img_url:macroproduct.AD_4
        ,type:3
        ,linkto:'http://www.toupai360.com:10080/html/cupstory.html'
        ,param:{
            name:'飞机杯的故事'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newAd = new todayAd({
        adid:10
        ,img_url:macroproduct.AD_1
        ,type:3
        ,linkto:'http://www.toupai360.com:10080/html/chuyouji.html'
        ,param:{
            name:'出游记'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newAd = new todayAd({
        adid:12
        ,img_url:macroproduct.AD_3
        ,type:3
        ,linkto:'http://www.toupai360.com:10080/html/lvxingbibei.html'
        ,param:{
            name:'旅行必备'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = createdb;