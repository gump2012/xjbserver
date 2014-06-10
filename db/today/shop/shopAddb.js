/**
 * Created by lishiming on 14-4-17.
 */
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
        adid:1
        ,img_url:'http://pic.yupoo.com/yige2002/DJo6DUKq/WurV9.jpg'
        ,type:1
        ,linkto:''
        ,param:{
            app_ad_in_subtype:1
            ,keyword:'新品尝鲜'
        }
    });
    newAd.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newAd = new todayAd({
        adid:2
        ,img_url:'http://pic.yupoo.com/yige2002/DJo6EIds/PDLNL.jpg'
        ,type:1
        ,linkto:''
        ,param:{
            app_ad_in_subtype:2
            ,pid:1
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
        ,img_url:'http://pic.yupoo.com/yige2002/DOX1p8Yp/U3g0A.jpg'
        ,type:2
        ,linkto:'http://115.28.225.137:10080/res/html/baoyou.html'
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
}

exports.createdb = createdb;