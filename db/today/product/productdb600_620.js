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

    var newCategory = new todayCategory({pid:602
        ,cid:4
        ,title:'香港诺兰ELYI艾怡 金属迷你av震动按摩棒 '
        ,volume:0
        ,recentvolume:0
        ,org_price:678.00
        ,price:276.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID602_URL
        ,time:0
        ,gallery:macroproduct.PID602_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:603
        ,cid:4
        ,title:'诺兰蓝蝶充电震动按摩棒'
        ,volume:0
        ,recentvolume:0
        ,org_price:998.00
        ,price:299.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID603_URL
        ,time:0
        ,gallery:macroproduct.PID603_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:604
        ,cid:4
        ,title:'香港诺兰伊杜 纯金属按摩棒'
        ,volume:0
        ,recentvolume:0
        ,org_price:998.00
        ,price:199.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID604_URL
        ,time:0
        ,gallery:macroproduct.PID604_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:605
        ,cid:4
        ,title:'香港诺兰月牙弯全球首创无线触感按摩棒手指触控智能按摩器'
        ,volume:0
        ,recentvolume:0
        ,org_price:998.00
        ,price:299.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID605_URL
        ,time:0
        ,gallery:macroproduct.PID605_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:606
        ,cid:4
        ,title:'诺兰AV棒震动按摩棒悦魅女用自慰器具成人用品 樱桃红'
        ,volume:0
        ,recentvolume:0
        ,org_price:998.00
        ,price:499.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID606_URL
        ,time:0
        ,gallery:macroproduct.PID606_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:607
        ,cid:4
        ,title:'积之美 成人情趣用品 孔雀开屏前后通用多点刺激棒'
        ,volume:0
        ,recentvolume:0
        ,org_price:218.00
        ,price:78.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID607_URL
        ,time:0
        ,gallery:macroproduct.PID607_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:608
        ,cid:4
        ,title:'成人用品 4U 淫纹G皇 女用自慰器'
        ,volume:0
        ,recentvolume:0
        ,org_price:298.00
        ,price:198.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID608_URL
        ,time:0
        ,gallery:macroproduct.PID608_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

}