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
        ,img_url:'http://img01.taobaocdn.com/imgextra/i1/468359490/T2KbGsXFpaXXXXXXXX-468359490.jpg'
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
        ,img_url:'http://img01.taobaocdn.com/imgextra/i1/468359490/T2KbGsXFpaXXXXXXXX-468359490.jpg'
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
        ,img_url:'http://img04.taobaocdn.com/imgextra/i4/468359490/T24zTTXtFXXXXXXXXX-468359490.jpg'
        ,type:1
        ,linkto:''
        ,param:{
            app_ad_in_subtype:1
            ,keyword:'周年庆'
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