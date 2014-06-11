/**
 * Created by lishiming on 14-6-5.
 */

var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid4_pid600_620");

exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProduct');

    var newCategory = new todayCategory({pid:600
        ,cid:4
        ,title:'阴道哑铃'
        ,volume:0
        ,recentvolume:0
        ,org_price:299.00
        ,price:188.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID600_URL
        ,time:0
        ,gallery:macroproduct.PID600_GALLERY});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:601
        ,cid:4
        ,title:'诺兰音乐人'
        ,volume:0
        ,recentvolume:0
        ,org_price:998.00
        ,price:399.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID601_URL
        ,time:0
        ,gallery:macroproduct.PID601_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

}