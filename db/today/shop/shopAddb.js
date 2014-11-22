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

    newAd = new todayAd({
        adid:17
        ,img_url:macroproduct.AD_2
        ,type:3
        ,linkto:'http://latest.toupai360.com:10080/html/chaochui.html'
        ,param:{
            name:'做个潮吹女'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newAd = new todayAd({
        adid:16
        ,img_url:macroproduct.AD_3
        ,type:1
        ,linkto:''
        ,param:{
            app_ad_in_subtype:1
            ,keyword:'全年最低'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
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
}

exports.createdb = createdb;