/**
 * Created by lishiming on 14-6-11.
 */
var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid2_pid351_370");

exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProduct');

    var newCategory = new todayCategory({pid:351
        ,cid:2
        ,title:'延时喷剂SK战马白金版 男士用持久防早泄 情趣性爱成人用品'
        ,volume:0
        ,recentvolume:0
        ,org_price:80.00
        ,price:25.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID351_URL
        ,time:0
        ,gallery:macroproduct.PID351_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:352
        ,cid:2
        ,title:'日本2H2D延时喷剂 男性防早泄持久非伟哥万艾可进口原液'
        ,volume:0
        ,recentvolume:0
        ,org_price:360.00
        ,price:135.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID352_URL
        ,time:0
        ,gallery:macroproduct.PID352_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:353
        ,cid:2
        ,title:'人初油 男性外用延时喷剂 持久神油 防早泄延长时间 15ml 成人用品人体润滑'
        ,volume:0
        ,recentvolume:0
        ,org_price:78.00
        ,price:24.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID353_URL
        ,time:0
        ,gallery:macroproduct.PID353_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:354
        ,cid:2
        ,title:'美国KEY O女性快感增强液'
        ,volume:0
        ,recentvolume:0
        ,org_price:182.00
        ,price:108.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID354_URL
        ,time:0
        ,gallery:macroproduct.PID354_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:355
        ,cid:2
        ,title:'雅润男用成人情趣性用品润滑剂润滑液润滑油 肛交'
        ,volume:0
        ,recentvolume:0
        ,org_price:20.00
        ,price:2.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID355_URL
        ,time:0
        ,gallery:macroproduct.PID355_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:356
        ,cid:2
        ,title:'男露888男用中药延时喷剂非进口印度神油伟哥'
        ,volume:0
        ,recentvolume:0
        ,org_price:169.00
        ,price:46.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID356_URL
        ,time:0
        ,gallery:macroproduct.PID356_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:357
        ,cid:2
        ,title:'本草堂喷剂外用持久防早泄不麻木保健用品滑 本草堂喷剂15ML'
        ,volume:0
        ,recentvolume:0
        ,org_price:100.00
        ,price:14.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID357_URL
        ,time:0
        ,gallery:macroproduct.PID357_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:358
        ,cid:2
        ,title:'倍力乐 人体润滑剂 房事润滑剂 性爱润滑剂 成人情趣用品'
        ,volume:0
        ,recentvolume:0
        ,org_price:56.00
        ,price:9.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID358_URL
        ,time:0
        ,gallery:macroproduct.PID358_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

}