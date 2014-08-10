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
}