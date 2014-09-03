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
        adid:9
        ,img_url:macroproduct.AD_2
        ,type:1
        ,linkto:''
        ,param:{
            app_ad_in_subtype:1
            ,keyword:'中秋特惠'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newAd = new todayAd({
        adid:8
        ,img_url:macroproduct.AD_8
        ,type:3
        ,linkto:'http://www.toupai360.com:10080/html/buaishuozhiaizuo_android.html'
        ,param:{
            name:'不爱说只爱做'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newAd = new todayAd({
        adid:5
        ,img_url:macroproduct.AD_5
        ,type:3
        ,linkto:'http://www.toupai360.com:10080/html/test0yuangou.html'
        ,param:{
            name:'爱情加强季'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newAd = new todayAd({
        adid:7
        ,img_url:macroproduct.AD_7
        ,type:3
        ,linkto:'http://latest.toupai360.com:10080/html/saodongnidexin_android.html'
        ,param:{
            name:'骚动你的心'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newAd = new todayAd({
        adid:3
        ,img_url:macroproduct.AD_3
        ,type:2
        ,linkto:'http://115.28.225.137:10080/html/baoyou.html'
        ,param:{
            name:'包邮活动'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newAd = new todayAd({
        adid:4
        ,img_url:macroproduct.AD_4
        ,type:2
        ,linkto:'http://115.28.225.137:10080/html/manezengsong.html'
        ,param:{
            name:'满额赠送'
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