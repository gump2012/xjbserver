/**
 * Created by lishiming on 14-6-11.
 */
exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProductAttr');

    var newCategory = new todayCategory({pid:351
        ,attr_id:11
        ,goods_attr_id:35100001
        ,attr_name:'品牌'
        ,attr_value:'SK'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:351
        ,attr_id:12
        ,goods_attr_id:35100002
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

    newCategory = new todayCategory({pid:351
        ,attr_id:13
        ,goods_attr_id:35100003
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

    newCategory = new todayCategory({pid:351
        ,attr_id:18
        ,goods_attr_id:35100004
        ,attr_name:'规格'
        ,attr_value:'SK战马白金延时喷剂'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:352
        ,attr_id:11
        ,goods_attr_id:35200001
        ,attr_name:'品牌'
        ,attr_value:'2H2D'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:352
        ,attr_id:12
        ,goods_attr_id:35200002
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

    newCategory = new todayCategory({pid:352
        ,attr_id:13
        ,goods_attr_id:35200003
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

    newCategory = new todayCategory({pid:352
        ,attr_id:18
        ,goods_attr_id:35200004
        ,attr_name:'规格'
        ,attr_value:'2H2D延时喷剂'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:353
        ,attr_id:11
        ,goods_attr_id:35300001
        ,attr_name:'品牌'
        ,attr_value:'人初油'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:353
        ,attr_id:12
        ,goods_attr_id:35300002
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

    newCategory = new todayCategory({pid:353
        ,attr_id:13
        ,goods_attr_id:35300003
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

    newCategory = new todayCategory({pid:353
        ,attr_id:18
        ,goods_attr_id:35300004
        ,attr_name:'规格'
        ,attr_value:'人初油15ml'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:354
        ,attr_id:11
        ,goods_attr_id:35400001
        ,attr_name:'品牌'
        ,attr_value:'key'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:354
        ,attr_id:12
        ,goods_attr_id:35400002
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

    newCategory = new todayCategory({pid:354
        ,attr_id:13
        ,goods_attr_id:35400003
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

    newCategory = new todayCategory({pid:354
        ,attr_id:18
        ,goods_attr_id:35400004
        ,attr_name:'规格'
        ,attr_value:'key o女性增强液'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:355
        ,attr_id:11
        ,goods_attr_id:35500001
        ,attr_name:'品牌'
        ,attr_value:'雅润'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:355
        ,attr_id:12
        ,goods_attr_id:35500002
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

    newCategory = new todayCategory({pid:355
        ,attr_id:13
        ,goods_attr_id:35500003
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

    newCategory = new todayCategory({pid:355
        ,attr_id:18
        ,goods_attr_id:35500004
        ,attr_name:'规格'
        ,attr_value:'雅润人体润滑剂13g'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:355
        ,attr_id:18
        ,goods_attr_id:35500005
        ,attr_name:'规格'
        ,attr_value:'雅润人体润滑剂30g'
        ,attr_price:2.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:355
        ,attr_id:18
        ,goods_attr_id:35500006
        ,attr_name:'规格'
        ,attr_value:'雅润人体润滑剂45g'
        ,attr_price:2.80
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:355
        ,attr_id:18
        ,goods_attr_id:35500007
        ,attr_name:'规格'
        ,attr_value:'雅润人体润滑剂60g'
        ,attr_price:3.20
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:355
        ,attr_id:18
        ,goods_attr_id:35500008
        ,attr_name:'规格'
        ,attr_value:'雅润人体润滑剂120g'
        ,attr_price:8.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:356
        ,attr_id:11
        ,goods_attr_id:35600001
        ,attr_name:'品牌'
        ,attr_value:'男露'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:356
        ,attr_id:12
        ,goods_attr_id:35600002
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

    newCategory = new todayCategory({pid:356
        ,attr_id:13
        ,goods_attr_id:35600003
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

    newCategory = new todayCategory({pid:356
        ,attr_id:18
        ,goods_attr_id:35600004
        ,attr_name:'规格'
        ,attr_value:'男露888 3ml'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:357
        ,attr_id:11
        ,goods_attr_id:35700001
        ,attr_name:'品牌'
        ,attr_value:'本草堂'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:357
        ,attr_id:12
        ,goods_attr_id:35700002
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

    newCategory = new todayCategory({pid:357
        ,attr_id:13
        ,goods_attr_id:35700003
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

    newCategory = new todayCategory({pid:357
        ,attr_id:18
        ,goods_attr_id:35700004
        ,attr_name:'规格'
        ,attr_value:'本草堂15ml'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:358
        ,attr_id:11
        ,goods_attr_id:35800001
        ,attr_name:'品牌'
        ,attr_value:'倍力乐'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:358
        ,attr_id:12
        ,goods_attr_id:35800002
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

    newCategory = new todayCategory({pid:358
        ,attr_id:13
        ,goods_attr_id:35800003
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

    newCategory = new todayCategory({pid:358
        ,attr_id:18
        ,goods_attr_id:35800004
        ,attr_name:'规格'
        ,attr_value:'倍力乐润滑剂绿茶保湿'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:358
        ,attr_id:18
        ,goods_attr_id:35800005
        ,attr_name:'规格'
        ,attr_value:'倍力乐润滑剂芦荟水溶'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:358
        ,attr_id:18
        ,goods_attr_id:35800006
        ,attr_name:'规格'
        ,attr_value:'倍力乐润滑剂维E修补'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:359
        ,attr_id:11
        ,goods_attr_id:35900001
        ,attr_name:'品牌'
        ,attr_value:'的确劲'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:359
        ,attr_id:12
        ,goods_attr_id:35900002
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

    newCategory = new todayCategory({pid:359
        ,attr_id:13
        ,goods_attr_id:35900003
        ,attr_name:'产地'
        ,attr_value:'法国'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:359
        ,attr_id:18
        ,goods_attr_id:35900004
        ,attr_name:'规格'
        ,attr_value:'的确劲增大膏'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:360
        ,attr_id:11
        ,goods_attr_id:36000001
        ,attr_name:'品牌'
        ,attr_value:'印度神油'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:360
        ,attr_id:12
        ,goods_attr_id:36000002
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

    newCategory = new todayCategory({pid:360
        ,attr_id:13
        ,goods_attr_id:36000003
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

    newCategory = new todayCategory({pid:360
        ,attr_id:18
        ,goods_attr_id:36000004
        ,attr_name:'规格'
        ,attr_value:'印度神油10ml'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:361
        ,attr_id:11
        ,goods_attr_id:36100001
        ,attr_name:'品牌'
        ,attr_value:'勃金'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:361
        ,attr_id:12
        ,goods_attr_id:36100002
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

    newCategory = new todayCategory({pid:361
        ,attr_id:13
        ,goods_attr_id:36100003
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

    newCategory = new todayCategory({pid:361
        ,attr_id:18
        ,goods_attr_id:36100004
        ,attr_name:'规格'
        ,attr_value:'女用湿巾'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:361
        ,attr_id:18
        ,goods_attr_id:36100005
        ,attr_name:'规格'
        ,attr_value:'男用湿巾'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:361
        ,attr_id:18
        ,goods_attr_id:36100006
        ,attr_name:'规格'
        ,attr_value:'延时喷剂 10ml'
        ,attr_price:94.50
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:362
        ,attr_id:11
        ,goods_attr_id:36200001
        ,attr_name:'品牌'
        ,attr_value:'浓情蜜液'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:362
        ,attr_id:12
        ,goods_attr_id:36200002
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

    newCategory = new todayCategory({pid:362
        ,attr_id:13
        ,goods_attr_id:36200003
        ,attr_name:'产地'
        ,attr_value:'台湾'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:362
        ,attr_id:18
        ,goods_attr_id:36200004
        ,attr_name:'规格'
        ,attr_value:'浓情蜜液15ml'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:363
        ,attr_id:11
        ,goods_attr_id:36300001
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

    newCategory = new todayCategory({pid:363
        ,attr_id:12
        ,goods_attr_id:36300002
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

    newCategory = new todayCategory({pid:363
        ,attr_id:13
        ,goods_attr_id:36300003
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

    newCategory = new todayCategory({pid:363
        ,attr_id:18
        ,goods_attr_id:36300004
        ,attr_name:'规格'
        ,attr_value:'进口精油透明 60ml'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:363
        ,attr_id:18
        ,goods_attr_id:36300005
        ,attr_name:'规格'
        ,attr_value:'进口精油乳白 60ml'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:363
        ,attr_id:18
        ,goods_attr_id:36300006
        ,attr_name:'规格'
        ,attr_value:'进口精油透明 200ml'
        ,attr_price:36.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:363
        ,attr_id:18
        ,goods_attr_id:36300007
        ,attr_name:'规格'
        ,attr_value:'进口精油乳白 200ml'
        ,attr_price:36.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}