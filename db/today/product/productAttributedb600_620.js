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
}