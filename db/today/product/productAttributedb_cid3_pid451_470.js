/**
 * Created by lishiming on 14-6-20.
 */
exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProductAttr');

    var newCategory = new todayCategory({pid:451
        ,attr_id:11
        ,goods_attr_id:45100001
        ,attr_name:'品牌'
        ,attr_value:'优客仕'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:451
        ,attr_id:12
        ,goods_attr_id:45100002
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

    newCategory = new todayCategory({pid:451
        ,attr_id:13
        ,goods_attr_id:45100003
        ,attr_name:'产地'
        ,attr_value:'英国'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:451
        ,attr_id:18
        ,goods_attr_id:45100004
        ,attr_name:'规格'
        ,attr_value:'黑色攻击'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:451
        ,attr_id:18
        ,goods_attr_id:45100005
        ,attr_name:'规格'
        ,attr_value:'黄色锤炼'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:451
        ,attr_id:18
        ,goods_attr_id:45100006
        ,attr_name:'规格'
        ,attr_value:'绿色入侵'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:451
        ,attr_id:18
        ,goods_attr_id:45100007
        ,attr_name:'规格'
        ,attr_value:'白色交叉'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:451
        ,attr_id:18
        ,goods_attr_id:45100008
        ,attr_name:'规格'
        ,attr_value:'红色心箭'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:452
        ,attr_id:11
        ,goods_attr_id:45200001
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

    newCategory = new todayCategory({pid:452
        ,attr_id:12
        ,goods_attr_id:45200002
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

    newCategory = new todayCategory({pid:452
        ,attr_id:13
        ,goods_attr_id:45200003
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

    newCategory = new todayCategory({pid:452
        ,attr_id:18
        ,goods_attr_id:45200004
        ,attr_name:'规格'
        ,attr_value:'旋转情人'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:453
        ,attr_id:11
        ,goods_attr_id:45300001
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

    newCategory = new todayCategory({pid:453
        ,attr_id:12
        ,goods_attr_id:45300002
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

    newCategory = new todayCategory({pid:453
        ,attr_id:13
        ,goods_attr_id:45300003
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

    newCategory = new todayCategory({pid:453
        ,attr_id:18
        ,goods_attr_id:45300004
        ,attr_name:'规格'
        ,attr_value:'手指套随机发'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:454
        ,attr_id:11
        ,goods_attr_id:45400001
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

    newCategory = new todayCategory({pid:454
        ,attr_id:12
        ,goods_attr_id:45400002
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

    newCategory = new todayCategory({pid:454
        ,attr_id:13
        ,goods_attr_id:45400003
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

    newCategory = new todayCategory({pid:454
        ,attr_id:18
        ,goods_attr_id:45400004
        ,attr_name:'规格'
        ,attr_value:'小名器真人'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:455
        ,attr_id:11
        ,goods_attr_id:45500001
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

    newCategory = new todayCategory({pid:455
        ,attr_id:12
        ,goods_attr_id:45500002
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

    newCategory = new todayCategory({pid:455
        ,attr_id:13
        ,goods_attr_id:45500003
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

    newCategory = new todayCategory({pid:455
        ,attr_id:18
        ,goods_attr_id:45500004
        ,attr_name:'规格'
        ,attr_value:'一体式娃娃'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:456
        ,attr_id:11
        ,goods_attr_id:45600001
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

    newCategory = new todayCategory({pid:456
        ,attr_id:12
        ,goods_attr_id:45600002
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

    newCategory = new todayCategory({pid:456
        ,attr_id:13
        ,goods_attr_id:45600003
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

    newCategory = new todayCategory({pid:456
        ,attr_id:18
        ,goods_attr_id:45600004
        ,attr_name:'规格'
        ,attr_value:'半实体娃娃'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:457
        ,attr_id:11
        ,goods_attr_id:45700001
        ,attr_name:'品牌'
        ,attr_value:'PNG'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:457
        ,attr_id:12
        ,goods_attr_id:45700002
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

    newCategory = new todayCategory({pid:457
        ,attr_id:13
        ,goods_attr_id:45700003
        ,attr_name:'产地'
        ,attr_value:'日本'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:457
        ,attr_id:18
        ,goods_attr_id:45700004
        ,attr_name:'规格'
        ,attr_value:'小泽玛利亚名器'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:458
        ,attr_id:11
        ,goods_attr_id:45800001
        ,attr_name:'品牌'
        ,attr_value:'PNG'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:458
        ,attr_id:12
        ,goods_attr_id:45800002
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

    newCategory = new todayCategory({pid:458
        ,attr_id:13
        ,goods_attr_id:45800003
        ,attr_name:'产地'
        ,attr_value:'日本'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:458
        ,attr_id:18
        ,goods_attr_id:45800004
        ,attr_name:'规格'
        ,attr_value:'张筱雨名器'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:459
        ,attr_id:11
        ,goods_attr_id:45900001
        ,attr_name:'品牌'
        ,attr_value:'PNG'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:459
        ,attr_id:12
        ,goods_attr_id:45900002
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

    newCategory = new todayCategory({pid:459
        ,attr_id:13
        ,goods_attr_id:45900003
        ,attr_name:'产地'
        ,attr_value:'日本'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:459
        ,attr_id:18
        ,goods_attr_id:45900004
        ,attr_name:'规格'
        ,attr_value:'颜如忆名器'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:460
        ,attr_id:11
        ,goods_attr_id:46000001
        ,attr_name:'品牌'
        ,attr_value:'玩爆潮品'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:460
        ,attr_id:12
        ,goods_attr_id:46000002
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

    newCategory = new todayCategory({pid:460
        ,attr_id:13
        ,goods_attr_id:46000003
        ,attr_name:'产地'
        ,attr_value:'日本'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:460
        ,attr_id:18
        ,goods_attr_id:46000004
        ,attr_name:'规格'
        ,attr_value:'熟女'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:460
        ,attr_id:18
        ,goods_attr_id:46000005
        ,attr_name:'规格'
        ,attr_value:'幼女'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:460
        ,attr_id:18
        ,goods_attr_id:46000006
        ,attr_name:'规格'
        ,attr_value:'少女'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:460
        ,attr_id:18
        ,goods_attr_id:46000007
        ,attr_name:'规格'
        ,attr_value:'舒适'
        ,attr_price:9.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:460
        ,attr_id:18
        ,goods_attr_id:46000008
        ,attr_name:'规格'
        ,attr_value:'快感'
        ,attr_price:9.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:460
        ,attr_id:18
        ,goods_attr_id:46000009
        ,attr_name:'规格'
        ,attr_value:'紧致'
        ,attr_price:9.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}