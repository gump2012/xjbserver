/**
 * Created by gump on 4/12/14.
 */

function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProduct');

var newCategory = new todayCategory({pid:1
    ,cid:1
    ,title:'白色性感漏乳挂脖开怀性感连体情趣内衣'
    ,volume:0
    ,recentvolume:0
    ,org_price:36.00
    ,price:18.00
    ,state:1
    ,stamper:''
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pFjKM/eCGt1.jpg'
    ,time:0
    ,gallery:[
        'http://img03.taobaocdn.com/imgextra/i3/468359490/T2rEuxXtpXXXXXXXXX-468359490.jpg'
        ,'http://img02.taobaocdn.com/imgextra/i2/468359490/T2qE4FXxpaXXXXXXXX-468359490.jpg'
        ,'http://img02.taobaocdn.com/imgextra/i2/468359490/T2LSWKXpNaXXXXXXXX-468359490.jpg'
        ,'http://img02.taobaocdn.com/imgextra/i2/468359490/T2Xa0WXAlaXXXXXXXX-468359490.jpg'
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pFFvk/p88pE.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pFyRw/5vQyV.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pEuJw/QpzFN.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pEBdV/pT2h1.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pFTcU/KNG1j.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pEP7c/qZ3wb.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pGmdO/10anS9.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pFLcZ/b4XSH.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pFSwx/wMnYW.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pFiaf/K3snU.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pGs9s/siBhe.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pFwBd/nTmiJ.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pGOBc/VR9XQ.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pGsin/vAwcr.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pH4wu/12werd.jpg'
    ,time:0
    ,gallery:[]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

newCategory = new todayCategory({pid:17
    ,cid:1
    ,title:'百花天使火爆仿皮野性魅力两件式情趣内衣'
    ,volume:315145
    ,recentvolume:121
    ,org_price:32.00
    ,price:15.00
    ,state:1
    ,stamper:''
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pHdBB/QD68Y.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pHfsp/XC17E.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pHmHz/AEcgA.jpg'
    ,time:0
    ,gallery:[]});
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
    ,pic_url:'http://pic.yupoo.com/yige2002/DH3pHuZQ/Mfi1X.jpg'
    ,time:0
    ,gallery:[]});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});


}

exports.createdb = creatdb;