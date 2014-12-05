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
        adid:18
        ,img_url:macroproduct.AD_1
        ,type:1
        ,linkto:''
        ,param:{
            app_ad_in_subtype:1
            ,keyword:'震撼来临'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
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
}

exports.createdb = createdb;