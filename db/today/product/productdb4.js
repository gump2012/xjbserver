/**
 * Created by gump on 4/12/14.
 */
function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProduct');

    var newCategory = new todayCategory({pid:61
        ,cid:4
        ,title:'百乐小号电动丰胸器 丰乳挑逗 乳房增大器 吸乳器 美胸杯'
        ,volume:0
        ,recentvolume:0
        ,org_price:169.00
        ,price:109.0
        ,state:1
        ,stamper:''
        //,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_1.jpg'
        ,pic_url:'http://gd2.alicdn.com/bao/uploaded/i2/T1UvvJFmBeXXXXXXXX_!!0-item_pic.jpg_460x460.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:62
        ,cid:4
        ,title:'邦爱12频双跳蛋 变频静音防水迷你可爱双跳蛋'
        ,volume:0
        ,recentvolume:0
        ,org_price:48.00
        ,price:48.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_2.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:63
        ,cid:4
        ,title:'正品百乐招蜂引蝶情趣玩具摇摆按摩棒性用品成人用品女性自慰器'
        ,volume:0
        ,recentvolume:0
        ,org_price:126.00
        ,price:126.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_3.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:64
        ,cid:4
        ,title:'女性潮吹AV棒 成人情趣用品阴蒂G点刺激女用自慰器震动充电按摩棒'
        ,volume:0
        ,recentvolume:0
        ,org_price:50.00
        ,price:29.00
        ,state:1
        ,stamper:''
        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_4.jpg'
        ,time:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

//    var newCategory = new todayCategory({pid:65
//        ,cid:4
//        ,title:'久兴幻魅真人倒模手动飞机杯'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:88.00
//        ,price:48.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_5.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:66
//        ,cid:4
//        ,title:'优客仕战士系列口娇自慰飞机杯'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:480.00
//        ,price:210.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_6.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:67
//        ,cid:4
//        ,title:'倍儿性桃花岛真人阴臀倒模 飞一样的感觉'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:45.00
//        ,price:25.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_7.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:68
//        ,cid:4
//        ,title:'名器飞机杯真人体温USB加热'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:30.00
//        ,price:12.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_8.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:69
//        ,cid:4
//        ,title:'日本男优终极利器 延时训练器'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:48.00
//        ,price:26.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_9.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:70
//        ,cid:4
//        ,title:'玩爆潮品MFONES取悦电动震动飞机杯'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:169.00
//        ,price:72.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_10.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:71
//        ,cid:4
//        ,title:'男女通用强力吸附后庭拉珠'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:69.00
//        ,price:28.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_11.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:72
//        ,cid:4
//        ,title:'百乐前列腺按摩棒'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:60.00
//        ,price:40.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_12.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:73
//        ,cid:4
//        ,title:'百乐大力神4频电动超爽飞机杯'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:159.00
//        ,price:76.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_13.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:74
//        ,cid:4
//        ,title:'百乐大男人空心阳具男用加长套增长6厘米延时阴茎增大增粗'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:39.00
//        ,price:20.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_14.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:75
//        ,cid:4
//        ,title:'真的好厉害 男性增大脉冲理疗环电机理疗器'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:98.00
//        ,price:60.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_15.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:76
//        ,cid:4
//        ,title:'美国FunZone少女后庭自慰杯 电动震动飞机杯'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:299.00
//        ,price:156.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_16.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:77
//        ,cid:4
//        ,title:'自慰狼友前列腺按摩棒'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:56.00
//        ,price:36.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_17.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:78
//        ,cid:4
//        ,title:'震动版太空杯 特价优惠'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:80.00
//        ,price:35.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_18.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:79
//        ,cid:4
//        ,title:'香港邦爱电动震动处女阴交口娇肛交飞机杯'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:199.00
//        ,price:130.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_19.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
//
//    var newCategory = new todayCategory({pid:80
//        ,cid:4
//        ,title:'香港雷霆首款可自动伸缩的飞机杯'
//        ,volume:0
//        ,recentvolume:0
//        ,org_price:388.00
//        ,price:199.00
//        ,state:1
//        ,stamper:''
//        ,pic_url:'http://115.28.225.137:10080/res/images/category/product/category4/categoryproduct4_20.jpg'
//        ,time:0});
//    newCategory.save( function( err, silence ) {
//        if( err )
//        {
//            console.log(err);
//        }
//    });
}

exports.createdb = creatdb;