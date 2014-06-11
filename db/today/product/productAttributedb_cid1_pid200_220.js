/**
 * Created by lishiming on 14-6-11.
 */
exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProductAttr');

    var newCategory = new todayCategory({pid:200
        ,attr_id:11
        ,goods_attr_id:20000001
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

    newCategory = new todayCategory({pid:200
        ,attr_id:12
        ,goods_attr_id:20000002
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

    newCategory = new todayCategory({pid:200
        ,attr_id:13
        ,goods_attr_id:20000003
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

    newCategory = new todayCategory({pid:200
        ,attr_id:18
        ,goods_attr_id:20000004
        ,attr_name:'规格'
        ,attr_value:'M小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:200
        ,attr_id:18
        ,goods_attr_id:20000005
        ,attr_name:'规格'
        ,attr_value:'L小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:201
        ,attr_id:11
        ,goods_attr_id:20100001
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

    newCategory = new todayCategory({pid:201
        ,attr_id:12
        ,goods_attr_id:20100002
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

    newCategory = new todayCategory({pid:201
        ,attr_id:13
        ,goods_attr_id:20100003
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

    newCategory = new todayCategory({pid:201
        ,attr_id:18
        ,goods_attr_id:20100004
        ,attr_name:'规格'
        ,attr_value:'M小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:201
        ,attr_id:18
        ,goods_attr_id:20100005
        ,attr_name:'规格'
        ,attr_value:'L大号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:202
        ,attr_id:11
        ,goods_attr_id:20200001
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

    newCategory = new todayCategory({pid:202
        ,attr_id:12
        ,goods_attr_id:20200002
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

    newCategory = new todayCategory({pid:202
        ,attr_id:13
        ,goods_attr_id:20200003
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

    newCategory = new todayCategory({pid:202
        ,attr_id:18
        ,goods_attr_id:20200004
        ,attr_name:'规格'
        ,attr_value:'黑色M小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:202
        ,attr_id:18
        ,goods_attr_id:20200005
        ,attr_name:'规格'
        ,attr_value:'黑色L大号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:202
        ,attr_id:18
        ,goods_attr_id:20200006
        ,attr_name:'规格'
        ,attr_value:'米色M小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:202
        ,attr_id:18
        ,goods_attr_id:20200007
        ,attr_name:'规格'
        ,attr_value:'米色L大号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:203
        ,attr_id:11
        ,goods_attr_id:20300001
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

    newCategory = new todayCategory({pid:203
        ,attr_id:12
        ,goods_attr_id:20300002
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

    newCategory = new todayCategory({pid:203
        ,attr_id:13
        ,goods_attr_id:20300003
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

    newCategory = new todayCategory({pid:203
        ,attr_id:18
        ,goods_attr_id:20300004
        ,attr_name:'规格'
        ,attr_value:'黑色M小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:203
        ,attr_id:18
        ,goods_attr_id:20300005
        ,attr_name:'规格'
        ,attr_value:'黑色L大号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:203
        ,attr_id:18
        ,goods_attr_id:20300006
        ,attr_name:'规格'
        ,attr_value:'粉色M小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:203
        ,attr_id:18
        ,goods_attr_id:20300007
        ,attr_name:'规格'
        ,attr_value:'粉色L大号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:204
        ,attr_id:11
        ,goods_attr_id:20400001
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

    newCategory = new todayCategory({pid:204
        ,attr_id:12
        ,goods_attr_id:20400002
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

    newCategory = new todayCategory({pid:204
        ,attr_id:13
        ,goods_attr_id:20400003
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

    newCategory = new todayCategory({pid:204
        ,attr_id:18
        ,goods_attr_id:20400004
        ,attr_name:'规格'
        ,attr_value:'黑色M小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:204
        ,attr_id:18
        ,goods_attr_id:20400005
        ,attr_name:'规格'
        ,attr_value:'黑色L大号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:204
        ,attr_id:18
        ,goods_attr_id:20400006
        ,attr_name:'规格'
        ,attr_value:'白色M小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:204
        ,attr_id:18
        ,goods_attr_id:20400007
        ,attr_name:'规格'
        ,attr_value:'白色L大号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:204
        ,attr_id:18
        ,goods_attr_id:20400008
        ,attr_name:'规格'
        ,attr_value:'豹纹M小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:204
        ,attr_id:18
        ,goods_attr_id:20400009
        ,attr_name:'规格'
        ,attr_value:'豹纹L大号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:205
        ,attr_id:11
        ,goods_attr_id:20500001
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

    newCategory = new todayCategory({pid:205
        ,attr_id:12
        ,goods_attr_id:20500002
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

    newCategory = new todayCategory({pid:205
        ,attr_id:13
        ,goods_attr_id:20500003
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

    newCategory = new todayCategory({pid:205
        ,attr_id:18
        ,goods_attr_id:20500004
        ,attr_name:'规格'
        ,attr_value:'黑色M小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:205
        ,attr_id:18
        ,goods_attr_id:20500005
        ,attr_name:'规格'
        ,attr_value:'黑色L大号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:205
        ,attr_id:18
        ,goods_attr_id:20500006
        ,attr_name:'规格'
        ,attr_value:'粉色M小号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:205
        ,attr_id:18
        ,goods_attr_id:20500007
        ,attr_name:'规格'
        ,attr_value:'粉色L大号'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}