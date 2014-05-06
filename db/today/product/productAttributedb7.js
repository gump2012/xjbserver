/**
 * Created by lishiming on 14-5-6.
 */
function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProductAttr');

    var newCategory = new todayCategory({pid:61
        ,attr_id:11
        ,goods_attr_id:6100001
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

    newCategory = new todayCategory({pid:61
        ,attr_id:12
        ,goods_attr_id:6100002
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

    newCategory = new todayCategory({pid:61
        ,attr_id:13
        ,goods_attr_id:6100003
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

    newCategory = new todayCategory({pid:61
        ,attr_id:18
        ,goods_attr_id:6100004
        ,attr_name:'规格'
        ,attr_value:'蓝色蛋蛋'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:61
        ,attr_id:18
        ,goods_attr_id:6100005
        ,attr_name:'规格'
        ,attr_value:'粉色蛋蛋'
        ,attr_price:2.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:62
        ,attr_id:11
        ,goods_attr_id:6200001
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

    newCategory = new todayCategory({pid:62
        ,attr_id:12
        ,goods_attr_id:6200002
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

    newCategory = new todayCategory({pid:62
        ,attr_id:13
        ,goods_attr_id:6200003
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

    newCategory = new todayCategory({pid:62
        ,attr_id:18
        ,goods_attr_id:6200004
        ,attr_name:'规格'
        ,attr_value:'咪咪按摩器'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:63
        ,attr_id:11
        ,goods_attr_id:6300001
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

    newCategory = new todayCategory({pid:63
        ,attr_id:12
        ,goods_attr_id:6300002
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

    newCategory = new todayCategory({pid:63
        ,attr_id:13
        ,goods_attr_id:6300003
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

    newCategory = new todayCategory({pid:63
        ,attr_id:18
        ,goods_attr_id:6300004
        ,attr_name:'规格'
        ,attr_value:'黑色220V加头套'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:63
        ,attr_id:18
        ,goods_attr_id:6300005
        ,attr_name:'规格'
        ,attr_value:'金色双充加头套'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:63
        ,attr_id:18
        ,goods_attr_id:6300006
        ,attr_name:'规格'
        ,attr_value:'金色220V加头套'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:64
        ,attr_id:11
        ,goods_attr_id:6400001
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

    newCategory = new todayCategory({pid:64
        ,attr_id:12
        ,goods_attr_id:6400002
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

    newCategory = new todayCategory({pid:64
        ,attr_id:13
        ,goods_attr_id:6400003
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

    newCategory = new todayCategory({pid:64
        ,attr_id:18
        ,goods_attr_id:6400004
        ,attr_name:'规格'
        ,attr_value:'随机发货'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:65
        ,attr_id:11
        ,goods_attr_id:6500001
        ,attr_name:'品牌'
        ,attr_value:'喵星人'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:65
        ,attr_id:13
        ,goods_attr_id:6500002
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

    var newCategory = new todayCategory({pid:65
        ,attr_id:12
        ,goods_attr_id:6500003
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

    newCategory = new todayCategory({pid:65
        ,attr_id:18
        ,goods_attr_id:6500004
        ,attr_name:'规格'
        ,attr_value:'光面深紫'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:56
        ,attr_id:11
        ,goods_attr_id:5600001
        ,attr_name:'品牌'
        ,attr_value:'FunZone'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:56
        ,attr_id:12
        ,goods_attr_id:5600002
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

    newCategory = new todayCategory({pid:56
        ,attr_id:13
        ,goods_attr_id:5600003
        ,attr_name:'产地'
        ,attr_value:'美国'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:56
        ,attr_id:18
        ,goods_attr_id:5600004
        ,attr_name:'规格'
        ,attr_value:'处女娇嫩后庭花'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:57
        ,attr_id:11
        ,goods_attr_id:5700001
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

    newCategory = new todayCategory({pid:57
        ,attr_id:12
        ,goods_attr_id:5700002
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

    newCategory = new todayCategory({pid:57
        ,attr_id:13
        ,goods_attr_id:5700003
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

    newCategory = new todayCategory({pid:57
        ,attr_id:18
        ,goods_attr_id:5700004
        ,attr_name:'规格'
        ,attr_value:'前列腺按摩棒'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:58
        ,attr_id:11
        ,goods_attr_id:5800001
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

    newCategory = new todayCategory({pid:58
        ,attr_id:12
        ,goods_attr_id:5800002
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

    newCategory = new todayCategory({pid:58
        ,attr_id:13
        ,goods_attr_id:5800003
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

    newCategory = new todayCategory({pid:58
        ,attr_id:18
        ,goods_attr_id:5800004
        ,attr_name:'规格'
        ,attr_value:'太空杯'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:59
        ,attr_id:11
        ,goods_attr_id:5900001
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

    newCategory = new todayCategory({pid:59
        ,attr_id:12
        ,goods_attr_id:5900002
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

    newCategory = new todayCategory({pid:59
        ,attr_id:13
        ,goods_attr_id:5900003
        ,attr_name:'产地'
        ,attr_value:'中国香港'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:59
        ,attr_id:18
        ,goods_attr_id:5900004
        ,attr_name:'规格'
        ,attr_value:'蓝色阴交版'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:59
        ,attr_id:18
        ,goods_attr_id:5900005
        ,attr_name:'规格'
        ,attr_value:' 红色口娇版'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:59
        ,attr_id:18
        ,goods_attr_id:5900006
        ,attr_name:'规格'
        ,attr_value:'绿色肛交版'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:60
        ,attr_id:11
        ,goods_attr_id:6000001
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

    newCategory = new todayCategory({pid:60
        ,attr_id:12
        ,goods_attr_id:6000002
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

    newCategory = new todayCategory({pid:60
        ,attr_id:13
        ,goods_attr_id:6000003
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

    newCategory = new todayCategory({pid:60
        ,attr_id:18
        ,goods_attr_id:6000004
        ,attr_name:'规格'
        ,attr_value:'伸缩飞机杯'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = creatdb;