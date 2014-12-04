/**
 * Created by gump on 8/10/14.
 */
exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProductAttr');

    var newCategory = new todayCategory({pid:221
        ,attr_id:11
        ,goods_attr_id:22100001
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

newCategory = new todayCategory({pid:221
    ,attr_id:12
    ,goods_attr_id:22100002
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

newCategory = new todayCategory({pid:221
    ,attr_id:13
    ,goods_attr_id:22100003
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

newCategory = new todayCategory({pid:221
    ,attr_id:18
    ,goods_attr_id:22100004
    ,attr_name:'规格'
    ,attr_value:'黑色'
    ,attr_price:0.00
    ,attr_type:1});
newCategory.save( function( err, silence ) {
    if( err )
    {
        console.log(err);
    }
});

    newCategory = new todayCategory({pid:221
        ,attr_id:18
        ,goods_attr_id:22100005
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

    newCategory = new todayCategory({pid:221
        ,attr_id:18
        ,goods_attr_id:22100006
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

    var newCategory = new todayCategory({pid:222
        ,attr_id:11
        ,goods_attr_id:22200001
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

    newCategory = new todayCategory({pid:222
        ,attr_id:12
        ,goods_attr_id:22200002
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

    newCategory = new todayCategory({pid:222
        ,attr_id:13
        ,goods_attr_id:22200003
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

    newCategory = new todayCategory({pid:222
        ,attr_id:18
        ,goods_attr_id:22200004
        ,attr_name:'规格'
        ,attr_value:'黑色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:223
        ,attr_id:11
        ,goods_attr_id:22300001
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

    newCategory = new todayCategory({pid:223
        ,attr_id:12
        ,goods_attr_id:22300002
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

    newCategory = new todayCategory({pid:223
        ,attr_id:13
        ,goods_attr_id:22300003
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

    newCategory = new todayCategory({pid:223
        ,attr_id:18
        ,goods_attr_id:22300004
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

    var newCategory = new todayCategory({pid:224
        ,attr_id:11
        ,goods_attr_id:22400001
        ,attr_name:'品牌'
        ,attr_value:'媚火'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:224
        ,attr_id:12
        ,goods_attr_id:22400002
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

    newCategory = new todayCategory({pid:224
        ,attr_id:13
        ,goods_attr_id:22400003
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

    newCategory = new todayCategory({pid:224
        ,attr_id:18
        ,goods_attr_id:22400004
        ,attr_name:'规格'
        ,attr_value:'玫红M小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:224
        ,attr_id:18
        ,goods_attr_id:22400005
        ,attr_name:'规格'
        ,attr_value:'玫红L大号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:224
        ,attr_id:18
        ,goods_attr_id:22400006
        ,attr_name:'规格'
        ,attr_value:'米黄M小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:224
        ,attr_id:18
        ,goods_attr_id:22400007
        ,attr_name:'规格'
        ,attr_value:'米黄L大号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:225
        ,attr_id:11
        ,goods_attr_id:22500001
        ,attr_name:'品牌'
        ,attr_value:'国产'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:225
        ,attr_id:12
        ,goods_attr_id:22500002
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

    newCategory = new todayCategory({pid:225
        ,attr_id:13
        ,goods_attr_id:22500003
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

    newCategory = new todayCategory({pid:225
        ,attr_id:18
        ,goods_attr_id:22500004
        ,attr_name:'规格'
        ,attr_value:'野性潮吹套餐'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:226
        ,attr_id:11
        ,goods_attr_id:22600001
        ,attr_name:'品牌'
        ,attr_value:'国产'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:226
        ,attr_id:12
        ,goods_attr_id:22600002
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

    newCategory = new todayCategory({pid:226
        ,attr_id:13
        ,goods_attr_id:22600003
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

    newCategory = new todayCategory({pid:226
        ,attr_id:18
        ,goods_attr_id:22600004
        ,attr_name:'规格'
        ,attr_value:'猫女装'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:227
        ,attr_id:11
        ,goods_attr_id:22700001
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

    newCategory = new todayCategory({pid:227
        ,attr_id:12
        ,goods_attr_id:22700002
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

    newCategory = new todayCategory({pid:227
        ,attr_id:13
        ,goods_attr_id:22700003
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

    newCategory = new todayCategory({pid:227
        ,attr_id:18
        ,goods_attr_id:22700004
        ,attr_name:'规格'
        ,attr_value:'浅蓝'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:227
        ,attr_id:18
        ,goods_attr_id:22700005
        ,attr_name:'规格'
        ,attr_value:'黑色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:227
        ,attr_id:18
        ,goods_attr_id:22700006
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

    var newCategory = new todayCategory({pid:228
        ,attr_id:11
        ,goods_attr_id:22800001
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

    newCategory = new todayCategory({pid:228
        ,attr_id:12
        ,goods_attr_id:22800002
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

    newCategory = new todayCategory({pid:228
        ,attr_id:13
        ,goods_attr_id:22800003
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

    newCategory = new todayCategory({pid:228
        ,attr_id:18
        ,goods_attr_id:22800004
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

    newCategory = new todayCategory({pid:228
        ,attr_id:18
        ,goods_attr_id:22800005
        ,attr_name:'规格'
        ,attr_value:'黑色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:228
        ,attr_id:18
        ,goods_attr_id:22800006
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

    newCategory = new todayCategory({pid:228
        ,attr_id:18
        ,goods_attr_id:22800007
        ,attr_name:'规格'
        ,attr_value:'玫红'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}