/**
 * Created by lishiming on 14-5-27.
 */

var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid5_pid751_770");

exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProduct');

    var newCategory = new todayCategory({pid:751
        ,cid:5
        ,title:'名流避孕套 活力螺纹+动感颗粒+柔滑丝薄 共30只正品安全套'
        ,volume:0
        ,recentvolume:0
        ,org_price:78.00
        ,price:19.9
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID751_URL
        ,time:0
        ,gallery:macroproduct.PID751_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:752
        ,cid:5
        ,title:'003超薄白金3片+黄金6片98  白金3片 38  黄金6片 65'
        ,volume:0
        ,recentvolume:0
        ,org_price:157.00
        ,price:38.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID752_URL
        ,time:0
        ,gallery:macroproduct.PID752_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:753
        ,cid:5
        ,title:'第六感原装进口避孕套72只 安全套 六合一24+螺纹24+超薄平滑24'
        ,volume:16158
        ,recentvolume:22
        ,org_price:109.00
        ,price:59.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID753_URL
        ,time:0
        ,gallery:macroproduct.PID753_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

}