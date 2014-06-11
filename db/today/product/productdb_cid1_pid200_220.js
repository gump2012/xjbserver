/**
 * Created by lishiming on 14-6-11.
 */

var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid1_pid200_220");

exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProduct');

    var newCategory = new todayCategory({pid:200
        ,cid:1
        ,title:'情趣内衣pid200媚火情趣内衣 无袖拼接网纱露背夜店服装 PU亮面性感睡裙'
        ,volume:0
        ,recentvolume:0
        ,org_price:98.00
        ,price:36.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID200_URL
        ,time:0
        ,gallery:macroproduct.PID200_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:201
        ,cid:1
        ,title:'媚火情趣内衣 诱惑夜店装 性感睡衣超短裙紧身透明制服'
        ,volume:0
        ,recentvolume:0
        ,org_price:102.00
        ,price:49.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID201_URL
        ,time:0
        ,gallery:macroproduct.PID201_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:202
        ,cid:1
        ,title:'媚火情趣内衣 夜店装惹火豹纹吊带制服套装 性感睡衣睡裙'
        ,volume:0
        ,recentvolume:0
        ,org_price:100.00
        ,price:39.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID202_URL
        ,time:0
        ,gallery:macroproduct.PID202_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:203
        ,cid:1
        ,title:'媚火情趣内衣女诱惑夜店套装 性感睡衣短裙紧身钢管舞制服'
        ,volume:0
        ,recentvolume:0
        ,org_price:100.00
        ,price:37.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID203_URL
        ,time:0
        ,gallery:macroproduct.PID203_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:204
        ,cid:1
        ,title:'媚火情趣内衣 夜店装惹火豹纹吊带制服套装 性感睡衣睡裙'
        ,volume:0
        ,recentvolume:0
        ,org_price:110.00
        ,price:48.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID204_URL
        ,time:0
        ,gallery:macroproduct.PID204_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:205
        ,cid:1
        ,title:'媚火情趣内衣 亮片吊带时尚夜店服 性感火辣束身睡衣超短裙'
        ,volume:0
        ,recentvolume:0
        ,org_price:105.00
        ,price:43.00
        ,state:1
        ,stamper:''
        ,pic_url:macroproduct.PID205_URL
        ,time:0
        ,gallery:macroproduct.PID205_GALLERY
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

}