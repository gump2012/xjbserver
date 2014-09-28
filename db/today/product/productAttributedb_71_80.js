/**
 * Created by lishiming on 14-5-7.
 */
function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProductAttr');

    var newCategory = new todayCategory({pid:71
        ,attr_id:11
        ,goods_attr_id:7100001
        ,attr_name:'品牌'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:71
        ,attr_id:12
        ,goods_attr_id:7100002
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

    newCategory = new todayCategory({pid:71
        ,attr_id:13
        ,goods_attr_id:7100003
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

    newCategory = new todayCategory({pid:71
        ,attr_id:18
        ,goods_attr_id:7100004
        ,attr_name:'规格'
        ,attr_value:'大号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:71
        ,attr_id:18
        ,goods_attr_id:7100005
        ,attr_name:'规格'
        ,attr_value:'小号'
        ,attr_price:2.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:72
        ,attr_id:11
        ,goods_attr_id:7200001
        ,attr_name:'品牌'
        ,attr_value:'百乐'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:72
        ,attr_id:12
        ,goods_attr_id:7200002
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

    newCategory = new todayCategory({pid:72
        ,attr_id:13
        ,goods_attr_id:7200003
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

    newCategory = new todayCategory({pid:72
        ,attr_id:18
        ,goods_attr_id:7200004
        ,attr_name:'规格'
        ,attr_value:'小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:72
        ,attr_id:18
        ,goods_attr_id:7200005
        ,attr_name:'规格'
        ,attr_value:'大号'
        ,attr_price:5.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:73
        ,attr_id:11
        ,goods_attr_id:7300001
        ,attr_name:'品牌'
        ,attr_value:'百乐'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:73
        ,attr_id:12
        ,goods_attr_id:7300002
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

    newCategory = new todayCategory({pid:73
        ,attr_id:13
        ,goods_attr_id:7300003
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

    newCategory = new todayCategory({pid:73
        ,attr_id:18
        ,goods_attr_id:7300004
        ,attr_name:'规格'
        ,attr_value:'仿真款'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:73
        ,attr_id:18
        ,goods_attr_id:7300005
        ,attr_name:'规格'
        ,attr_value:'时尚款'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:74
        ,attr_id:11
        ,goods_attr_id:7400001
        ,attr_name:'品牌'
        ,attr_value:'百乐'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:74
        ,attr_id:12
        ,goods_attr_id:7400002
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

    newCategory = new todayCategory({pid:74
        ,attr_id:13
        ,goods_attr_id:7400003
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

    newCategory = new todayCategory({pid:74
        ,attr_id:18
        ,goods_attr_id:7400004
        ,attr_name:'规格'
        ,attr_value:'百乐一代招蜂引蝶'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:74
        ,attr_id:18
        ,goods_attr_id:7400005
        ,attr_name:'规格'
        ,attr_value:'百乐二代招蜂引蝶'
        ,attr_price:19.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:74
        ,attr_id:18
        ,goods_attr_id:7400006
        ,attr_name:'规格'
        ,attr_value:'百乐小号招蜂引蝶-蝴蝶飞飞'
        ,attr_price:9.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:75
        ,attr_id:11
        ,goods_attr_id:7500001
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

    newCategory = new todayCategory({pid:75
        ,attr_id:12
        ,goods_attr_id:7500002
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

    var newCategory = new todayCategory({pid:75
        ,attr_id:13
        ,goods_attr_id:7500003
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

    newCategory = new todayCategory({pid:75
        ,attr_id:18
        ,goods_attr_id:7500004
        ,attr_name:'规格'
        ,attr_value:'粉色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:75
        ,attr_id:18
        ,goods_attr_id:7500005
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

    newCategory = new todayCategory({pid:76
        ,attr_id:11
        ,goods_attr_id:7600001
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

    newCategory = new todayCategory({pid:76
        ,attr_id:12
        ,goods_attr_id:7600002
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

    var newCategory = new todayCategory({pid:76
        ,attr_id:13
        ,goods_attr_id:7600003
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

    newCategory = new todayCategory({pid:76
        ,attr_id:18
        ,goods_attr_id:7600004
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

    newCategory = new todayCategory({pid:76
        ,attr_id:18
        ,goods_attr_id:7600005
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

    newCategory = new todayCategory({pid:77
        ,attr_id:11
        ,goods_attr_id:7700001
        ,attr_name:'品牌'
        ,attr_value:'邦爱'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:77
        ,attr_id:12
        ,goods_attr_id:7700002
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

    var newCategory = new todayCategory({pid:77
        ,attr_id:13
        ,goods_attr_id:7700003
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

    newCategory = new todayCategory({pid:77
        ,attr_id:18
        ,goods_attr_id:7700004
        ,attr_name:'规格'
        ,attr_value:'美国大兵手动版A'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:77
        ,attr_id:18
        ,goods_attr_id:7700005
        ,attr_name:'规格'
        ,attr_value:'美国大兵手动版B'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:77
        ,attr_id:18
        ,goods_attr_id:7700006
        ,attr_name:'规格'
        ,attr_value:'美国大兵普通版'
        ,attr_price:50.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:77
        ,attr_id:18
        ,goods_attr_id:7700007
        ,attr_name:'规格'
        ,attr_value:'美国大兵加强版'
        ,attr_price:110.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:78
        ,attr_id:11
        ,goods_attr_id:7800001
        ,attr_name:'品牌'
        ,attr_value:'邦爱'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:78
        ,attr_id:12
        ,goods_attr_id:7800002
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

    var newCategory = new todayCategory({pid:78
        ,attr_id:13
        ,goods_attr_id:7800003
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

    newCategory = new todayCategory({pid:78
        ,attr_id:18
        ,goods_attr_id:7800004
        ,attr_name:'规格'
        ,attr_value:'12频邦爱小老二软蛋【湖蓝色】'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:78
        ,attr_id:18
        ,goods_attr_id:7800005
        ,attr_name:'规格'
        ,attr_value:'12频邦爱小老二软蛋【水粉色】'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:79
        ,attr_id:11
        ,goods_attr_id:7900001
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

    newCategory = new todayCategory({pid:79
        ,attr_id:12
        ,goods_attr_id:7900002
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

    var newCategory = new todayCategory({pid:79
        ,attr_id:13
        ,goods_attr_id:7900003
        ,attr_name:'产地'
        ,attr_value:'其他'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:79
        ,attr_id:18
        ,goods_attr_id:7900004
        ,attr_name:'规格'
        ,attr_value:'玉兔旋风'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:80
        ,attr_id:11
        ,goods_attr_id:8000001
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

    newCategory = new todayCategory({pid:80
        ,attr_id:12
        ,goods_attr_id:8000002
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

    var newCategory = new todayCategory({pid:80
        ,attr_id:13
        ,goods_attr_id:8000003
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

    newCategory = new todayCategory({pid:80
        ,attr_id:18
        ,goods_attr_id:8000004
        ,attr_name:'规格'
        ,attr_value:'非充电式'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:80
        ,attr_id:18
        ,goods_attr_id:8000005
        ,attr_name:'规格'
        ,attr_value:'充电式'
        ,attr_price:40.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = creatdb;