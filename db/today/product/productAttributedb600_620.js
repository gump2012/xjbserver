/**
 * Created by lishiming on 14-6-5.
 */
exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProductAttr');

    var newCategory = new todayCategory({pid:600
        ,attr_id:11
        ,goods_attr_id:60000001
        ,attr_name:'品牌'
        ,attr_value:'诺兰'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:600
        ,attr_id:12
        ,goods_attr_id:60000002
        ,attr_name:'材质'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:600
        ,attr_id:13
        ,goods_attr_id:60000003
        ,attr_name:'产地'
        ,attr_value:'香港'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:600
        ,attr_id:18
        ,goods_attr_id:60000004
        ,attr_name:'规格'
        ,attr_value:'阴道哑铃'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:601
        ,attr_id:11
        ,goods_attr_id:60100001
        ,attr_name:'品牌'
        ,attr_value:'诺兰'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:601
        ,attr_id:12
        ,goods_attr_id:60100002
        ,attr_name:'材质'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:601
        ,attr_id:13
        ,goods_attr_id:60100003
        ,attr_name:'产地'
        ,attr_value:'香港'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:601
        ,attr_id:18
        ,goods_attr_id:60100004
        ,attr_name:'规格'
        ,attr_value:'诺兰音乐人'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:602
        ,attr_id:11
        ,goods_attr_id:60200001
        ,attr_name:'品牌'
        ,attr_value:'诺兰'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:602
        ,attr_id:12
        ,goods_attr_id:60200002
        ,attr_name:'材质'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:602
        ,attr_id:13
        ,goods_attr_id:60200003
        ,attr_name:'产地'
        ,attr_value:'香港'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:602
        ,attr_id:18
        ,goods_attr_id:60200004
        ,attr_name:'规格'
        ,attr_value:'紫色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:602
        ,attr_id:18
        ,goods_attr_id:60200005
        ,attr_name:'规格'
        ,attr_value:'红色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:602
        ,attr_id:18
        ,goods_attr_id:60200006
        ,attr_name:'规格'
        ,attr_value:'黄色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:603
        ,attr_id:11
        ,goods_attr_id:60300001
        ,attr_name:'品牌'
        ,attr_value:'诺兰'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:603
        ,attr_id:12
        ,goods_attr_id:60300002
        ,attr_name:'材质'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:603
        ,attr_id:13
        ,goods_attr_id:60300003
        ,attr_name:'产地'
        ,attr_value:'香港'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:603
        ,attr_id:18
        ,goods_attr_id:60300004
        ,attr_name:'规格'
        ,attr_value:'诺兰蓝蝶'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:604
        ,attr_id:11
        ,goods_attr_id:60400001
        ,attr_name:'品牌'
        ,attr_value:'诺兰'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:604
        ,attr_id:12
        ,goods_attr_id:60400002
        ,attr_name:'材质'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:604
        ,attr_id:13
        ,goods_attr_id:60400003
        ,attr_name:'产地'
        ,attr_value:'香港'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:604
        ,attr_id:18
        ,goods_attr_id:60400004
        ,attr_name:'规格'
        ,attr_value:'诺兰蓝蝶'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:605
        ,attr_id:11
        ,goods_attr_id:60500001
        ,attr_name:'品牌'
        ,attr_value:'诺兰'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:605
        ,attr_id:12
        ,goods_attr_id:60500002
        ,attr_name:'材质'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:605
        ,attr_id:13
        ,goods_attr_id:60500003
        ,attr_name:'产地'
        ,attr_value:'香港'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:605
        ,attr_id:18
        ,goods_attr_id:60500004
        ,attr_name:'规格'
        ,attr_value:'诺兰月牙弯'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:606
        ,attr_id:11
        ,goods_attr_id:60600001
        ,attr_name:'品牌'
        ,attr_value:'诺兰'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:606
        ,attr_id:12
        ,goods_attr_id:60600002
        ,attr_name:'材质'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:606
        ,attr_id:13
        ,goods_attr_id:60600003
        ,attr_name:'产地'
        ,attr_value:'香港'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:606
        ,attr_id:18
        ,goods_attr_id:60600004
        ,attr_name:'规格'
        ,attr_value:'诺兰悦魅'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:607
        ,attr_id:11
        ,goods_attr_id:60700001
        ,attr_name:'品牌'
        ,attr_value:'积之美'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:607
        ,attr_id:12
        ,goods_attr_id:60700002
        ,attr_name:'材质'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:607
        ,attr_id:13
        ,goods_attr_id:60700003
        ,attr_name:'产地'
        ,attr_value:'香港'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:607
        ,attr_id:18
        ,goods_attr_id:60700004
        ,attr_name:'规格'
        ,attr_value:'孔雀开屏'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:608
        ,attr_id:11
        ,goods_attr_id:60800001
        ,attr_name:'品牌'
        ,attr_value:'4U'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:608
        ,attr_id:12
        ,goods_attr_id:60800002
        ,attr_name:'材质'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:608
        ,attr_id:13
        ,goods_attr_id:60800003
        ,attr_name:'产地'
        ,attr_value:'香港'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:608
        ,attr_id:18
        ,goods_attr_id:60800004
        ,attr_name:'规格'
        ,attr_value:'4U淫纹G皇'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:609
        ,attr_id:11
        ,goods_attr_id:60900001
        ,attr_name:'品牌'
        ,attr_value:'雷霆'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:609
        ,attr_id:12
        ,goods_attr_id:60900002
        ,attr_name:'材质'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:609
        ,attr_id:13
        ,goods_attr_id:60900003
        ,attr_name:'产地'
        ,attr_value:'香港'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:609
        ,attr_id:18
        ,goods_attr_id:60900004
        ,attr_name:'规格'
        ,attr_value:'双配宝石蓝'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:609
        ,attr_id:18
        ,goods_attr_id:60900005
        ,attr_name:'规格'
        ,attr_value:'双配诱惑粉'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:609
        ,attr_id:18
        ,goods_attr_id:60900006
        ,attr_name:'规格'
        ,attr_value:'双配贵族紫'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:609
        ,attr_id:18
        ,goods_attr_id:60900007
        ,attr_name:'规格'
        ,attr_value:'充电宝石蓝'
        ,attr_price:20.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:609
        ,attr_id:18
        ,goods_attr_id:60900008
        ,attr_name:'规格'
        ,attr_value:'充电诱惑粉'
        ,attr_price:20.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:609
        ,attr_id:18
        ,goods_attr_id:60900009
        ,attr_name:'规格'
        ,attr_value:'充电贵族紫'
        ,attr_price:20.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:610
        ,attr_id:11
        ,goods_attr_id:61000001
        ,attr_name:'品牌'
        ,attr_value:'蒂贝'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:610
        ,attr_id:12
        ,goods_attr_id:61000002
        ,attr_name:'材质'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:610
        ,attr_id:13
        ,goods_attr_id:61000003
        ,attr_name:'产地'
        ,attr_value:'国产'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:610
        ,attr_id:18
        ,goods_attr_id:61000004
        ,attr_name:'规格'
        ,attr_value:'诱惑粉'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:610
        ,attr_id:18
        ,goods_attr_id:61000005
        ,attr_name:'规格'
        ,attr_value:'贵族紫'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:611
        ,attr_id:11
        ,goods_attr_id:61100001
        ,attr_name:'品牌'
        ,attr_value:'其它'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:611
        ,attr_id:12
        ,goods_attr_id:61100002
        ,attr_name:'材质'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:611
        ,attr_id:13
        ,goods_attr_id:61100003
        ,attr_name:'产地'
        ,attr_value:'其它'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:611
        ,attr_id:18
        ,goods_attr_id:61100004
        ,attr_name:'规格'
        ,attr_value:'紫色美人鱼'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:611
        ,attr_id:18
        ,goods_attr_id:61100005
        ,attr_name:'规格'
        ,attr_value:'花心兔子'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:611
        ,attr_id:18
        ,goods_attr_id:61100006
        ,attr_name:'规格'
        ,attr_value:'玉鸟'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:611
        ,attr_id:18
        ,goods_attr_id:61100007
        ,attr_name:'规格'
        ,attr_value:'炫彩玉兔'
        ,attr_price:15.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:611
        ,attr_id:18
        ,goods_attr_id:61100008
        ,attr_name:'规格'
        ,attr_value:'炫彩黄金美人鱼'
        ,attr_price:15.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:611
        ,attr_id:18
        ,goods_attr_id:61100009
        ,attr_name:'规格'
        ,attr_value:'炫彩紫色美人鱼'
        ,attr_price:15.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:612
        ,attr_id:11
        ,goods_attr_id:61200001
        ,attr_name:'品牌'
        ,attr_value:'其它'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:612
        ,attr_id:12
        ,goods_attr_id:61200002
        ,attr_name:'材质'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:612
        ,attr_id:13
        ,goods_attr_id:61200003
        ,attr_name:'产地'
        ,attr_value:'其它'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:612
        ,attr_id:18
        ,goods_attr_id:61200004
        ,attr_name:'规格'
        ,attr_value:'水晶辣椒'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:612
        ,attr_id:18
        ,goods_attr_id:61200005
        ,attr_name:'规格'
        ,attr_value:'春色撩人'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:612
        ,attr_id:18
        ,goods_attr_id:61200006
        ,attr_name:'规格'
        ,attr_value:'一柱擎天'
        ,attr_price:36.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}