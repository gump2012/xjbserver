/**
 * Created by gump on 4/12/14.
 */

var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid1_pid1_20");

function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProduct');

var newCategory = new todayCategory({pid:1
    ,cid:1
    ,title:'白色性感漏乳挂脖开怀性感连体情趣内衣'
    ,volume:0
    ,recentvolume:0
    ,org_price:36.00
    ,price:0.01
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID1_URL
    ,time:0
    ,gallery:[
        macroproduct.PID1_GALLERY_1
        ,macroproduct.PID1_GALLERY_2
        ,macroproduct.PID1_GALLERY_3
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:2
    ,cid:1
    ,title:'百花天使 公主透明纱网抹胸短裙 刺激你的眼球'
    ,volume:0
    ,recentvolume:0
    ,org_price:30.00
    ,price:15.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID2_URL
    ,time:0
    ,gallery:[
        macroproduct.PID2_GALLERY_1
        ,macroproduct.PID2_GALLERY_2
        ,macroproduct.PID2_GALLERY_3
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:3
    ,cid:1
    ,title:'百花天使 性感吊带抹胸系带网纱情趣内衣'
    ,volume:16158
    ,recentvolume:22
    ,org_price:22.00
    ,price:19.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID3_URL
    ,time:0
    ,gallery:[
        macroproduct.PID3_GALLERY_1
        ,macroproduct.PID3_GALLERY_2
        ,macroproduct.PID3_GALLERY_3
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:4
    ,cid:1
    ,title:'百花天使 性感抹胸透视蕾丝诱惑内衣'
    ,volume:3256
    ,recentvolume:562
    ,org_price:50.00
    ,price:22.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID4_URL
    ,time:0
    ,gallery:[
        macroproduct.PID4_GALLERY_1
        ,macroproduct.PID4_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:5
    ,cid:1
    ,title:'百花天使 性感机车短裙野战必备'
    ,volume:3154
    ,recentvolume:144
    ,org_price:46.00
    ,price:22.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID5_URL
    ,time:0
    ,gallery:[
        macroproduct.PID5_GALLERY_1
        ,macroproduct.PID5_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:6
    ,cid:1
    ,title:'百花天使 性感蕾丝花边 激情T裤套装'
    ,volume:315145
    ,recentvolume:121
    ,org_price:35.00
    ,price:18.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID6_URL
    ,time:0
    ,gallery:[
        macroproduct.PID6_GALLERY_1
        ,macroproduct.PID6_GALLERY_2
        ,macroproduct.PID6_GALLERY_3
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:7
    ,cid:1
    ,title:'百花天使 性感蕾丝花边 激情开衫系带连体衣'
    ,volume:315145
    ,recentvolume:121
    ,org_price:50.00
    ,price:25.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID7_URL
    ,time:0
    ,gallery:[
        macroproduct.PID7_GALLERY_1
        ,macroproduct.PID7_GALLERY_2
        ,macroproduct.PID7_GALLERY_3
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:8
    ,cid:1
    ,title:'百花天使 打造你的女仆 性感蕾丝吊带女仆装'
    ,volume:315145
    ,recentvolume:121
    ,org_price:65.00
    ,price:25.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID8_URL
    ,time:0
    ,gallery:[
        macroproduct.PID8_GALLERY_1
        ,macroproduct.PID8_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:9
    ,cid:1
    ,title:'百花天使 激情透视蕾丝花边挂脖吊带性感情趣内衣'
    ,volume:315145
    ,recentvolume:121
    ,org_price:35.00
    ,price:18.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID9_URL
    ,time:0
    ,gallery:[
        macroproduct.PID9_GALLERY_1
        ,macroproduct.PID9_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:10
    ,cid:1
    ,title:'百花天使 致命诱惑 侧开透视蕾丝薄纱睡裙'
    ,volume:315145
    ,recentvolume:121
    ,org_price:49.00
    ,price:25.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID10_URL
    ,time:0
    ,gallery:[
        macroproduct.PID10_GALLERY_1
        ,macroproduct.PID10_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:11
    ,cid:1
    ,title:'百花天使 蕾丝花边透明性感睡裙诱惑睡衣'
    ,volume:315145
    ,recentvolume:121
    ,org_price:49.00
    ,price:25.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID11_URL
    ,time:0
    ,gallery:[
        macroproduct.PID11_GALLERY_1
        ,macroproduct.PID11_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:12
    ,cid:1
    ,title:'百花天使 赛车啦啦队服学生装水手服 角色扮演'
    ,volume:315145
    ,recentvolume:121
    ,org_price:65.00
    ,price:28.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID12_URL
    ,time:0
    ,gallery:[
        macroproduct.PID12_GALLERY_1
        ,macroproduct.PID12_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:13
    ,cid:1
    ,title:'百花天使印花蕾丝比基尼性感套装'
    ,volume:315145
    ,recentvolume:121
    ,org_price:36.00
    ,price:18.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID13_URL
    ,time:0
    ,gallery:[
        macroproduct.PID13_GALLERY_1
        ,macroproduct.PID13_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:14
    ,cid:1
    ,title:'百花天使性感抹胸挂脖诱惑开裆T裤激情连体衣'
    ,volume:315145
    ,recentvolume:121
    ,org_price:32.00
    ,price:15.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID14_URL
    ,time:0
    ,gallery:[
        macroproduct.PID14_GALLERY_1
        ,macroproduct.PID14_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:15
    ,cid:1
    ,title:'百花天使性感薄纱蕾丝透明公主性感睡衣睡裙'
    ,volume:315145
    ,recentvolume:121
    ,org_price:36.00
    ,price:18.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID15_URL
    ,time:0
    ,gallery:[
        macroproduct.PID15_GALLERY_1
        ,macroproduct.PID15_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:16
    ,cid:1
    ,title:'百花天使暗夜销魂黑色透明网纱 诱惑你的神经'
    ,volume:315145
    ,recentvolume:121
    ,org_price:48.00
    ,price:24.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID16_URL
    ,time:0
    ,gallery:[
        macroproduct.PID16_GALLERY_1
        ,macroproduct.PID16_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:17
    ,cid:1
    ,title:'百花天使火爆仿皮野性魅力两件式情趣内衣 头牌推荐'
    ,volume:315145
    ,recentvolume:121
    ,org_price:32.00
    ,price:15.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID17_URL
    ,time:0
    ,gallery:[
        macroproduct.PID17_GALLERY_1
        ,macroproduct.PID17_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:18
    ,cid:1
    ,title:'百花天使胸前镂空四面开裆网眼连体衣'
    ,volume:315145
    ,recentvolume:121
    ,org_price:56.00
    ,price:28.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID18_URL
    ,time:0
    ,gallery:[
        macroproduct.PID18_GALLERY_1
        ,macroproduct.PID18_GALLERY_2
        ,macroproduct.PID18_GALLERY_3
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:19
    ,cid:1
    ,title:'百花天使良家超长性感情趣睡袍'
    ,volume:315145
    ,recentvolume:121
    ,org_price:40.00
    ,price:25.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID19_URL
    ,time:0
    ,gallery:[
        macroproduct.PID19_GALLERY_1
        ,macroproduct.PID19_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:20
    ,cid:1
    ,title:'百花天使高贵紫色 女神来袭 吊带睡裙'
    ,volume:315145
    ,recentvolume:121
    ,org_price:80.00
    ,price:35.00
    ,state:1
    ,stamper:''
    ,pic_url:macroproduct.PID20_URL
    ,time:0
    ,gallery:[
        macroproduct.PID20_GALLERY_1
        ,macroproduct.PID20_GALLERY_2
        ,null
    ]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

}

exports.createdb = creatdb;