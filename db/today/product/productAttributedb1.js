/**
 * Created by lishiming on 14-5-5.
 */
function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProductAttr');

    var newCategory = new todayCategory({pid:1
        ,attr_id:11
        ,goods_attr_id:100001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:1
        ,attr_id:12
        ,goods_attr_id:100002
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

    newCategory = new todayCategory({pid:1
        ,attr_id:13
        ,goods_attr_id:100003
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

    newCategory = new todayCategory({pid:1
        ,attr_id:17
        ,goods_attr_id:100004
        ,attr_name:'颜色'
        ,attr_value:'白色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:2
        ,attr_id:11
        ,goods_attr_id:200001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:2
        ,attr_id:12
        ,goods_attr_id:200002
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

    newCategory = new todayCategory({pid:2
        ,attr_id:13
        ,goods_attr_id:200003
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

    newCategory = new todayCategory({pid:2
        ,attr_id:17
        ,goods_attr_id:200004
        ,attr_name:'颜色'
        ,attr_value:'蓝色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:3
        ,attr_id:11
        ,goods_attr_id:300001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:3
        ,attr_id:12
        ,goods_attr_id:300002
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

    newCategory = new todayCategory({pid:3
        ,attr_id:13
        ,goods_attr_id:300003
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

    newCategory = new todayCategory({pid:3
        ,attr_id:17
        ,goods_attr_id:300004
        ,attr_name:'颜色'
        ,attr_value:'黑色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:4
        ,attr_id:11
        ,goods_attr_id:400001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:4
        ,attr_id:12
        ,goods_attr_id:400002
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

    newCategory = new todayCategory({pid:4
        ,attr_id:13
        ,goods_attr_id:400003
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

    newCategory = new todayCategory({pid:4
        ,attr_id:17
        ,goods_attr_id:400004
        ,attr_name:'颜色'
        ,attr_value:'白色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:5
        ,attr_id:11
        ,goods_attr_id:500001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:5
        ,attr_id:12
        ,goods_attr_id:500002
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

    newCategory = new todayCategory({pid:5
        ,attr_id:13
        ,goods_attr_id:500003
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

    newCategory = new todayCategory({pid:5
        ,attr_id:17
        ,goods_attr_id:500004
        ,attr_name:'颜色'
        ,attr_value:'白色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:6
        ,attr_id:11
        ,goods_attr_id:600001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:6
        ,attr_id:12
        ,goods_attr_id:600002
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

    newCategory = new todayCategory({pid:6
        ,attr_id:13
        ,goods_attr_id:600003
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

    newCategory = new todayCategory({pid:6
        ,attr_id:17
        ,goods_attr_id:600004
        ,attr_name:'颜色'
        ,attr_value:'紫色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:6
        ,attr_id:17
        ,goods_attr_id:600005
        ,attr_name:'颜色'
        ,attr_value:'黑色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:7
        ,attr_id:11
        ,goods_attr_id:700001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:7
        ,attr_id:12
        ,goods_attr_id:700002
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

    newCategory = new todayCategory({pid:7
        ,attr_id:13
        ,goods_attr_id:700003
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

    newCategory = new todayCategory({pid:7
        ,attr_id:17
        ,goods_attr_id:700004
        ,attr_name:'颜色'
        ,attr_value:'黑色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:8
        ,attr_id:11
        ,goods_attr_id:800001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:8
        ,attr_id:12
        ,goods_attr_id:800002
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

    newCategory = new todayCategory({pid:8
        ,attr_id:13
        ,goods_attr_id:800003
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

    newCategory = new todayCategory({pid:8
        ,attr_id:17
        ,goods_attr_id:800004
        ,attr_name:'颜色'
        ,attr_value:'粉色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:9
        ,attr_id:11
        ,goods_attr_id:900001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:9
        ,attr_id:12
        ,goods_attr_id:900002
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

    newCategory = new todayCategory({pid:9
        ,attr_id:13
        ,goods_attr_id:900003
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

    newCategory = new todayCategory({pid:9
        ,attr_id:17
        ,goods_attr_id:900004
        ,attr_name:'颜色'
        ,attr_value:'紫色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:10
        ,attr_id:11
        ,goods_attr_id:1000001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:10
        ,attr_id:12
        ,goods_attr_id:1000002
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

    newCategory = new todayCategory({pid:10
        ,attr_id:13
        ,goods_attr_id:1000003
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

    newCategory = new todayCategory({pid:10
        ,attr_id:17
        ,goods_attr_id:1000004
        ,attr_name:'颜色'
        ,attr_value:'黑色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:15
        ,attr_id:13
        ,goods_attr_id:1500003
        ,attr_name:'产地'
        ,attr_value:'中国大陆'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:15
        ,attr_id:12
        ,goods_attr_id:1500002
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

    newCategory = new todayCategory({pid:15
        ,attr_id:17
        ,goods_attr_id:1500004
        ,attr_name:'颜色'
        ,attr_value:'白色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:16
        ,attr_id:11
        ,goods_attr_id:1600001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:16
        ,attr_id:12
        ,goods_attr_id:1600002
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

    newCategory = new todayCategory({pid:16
        ,attr_id:13
        ,goods_attr_id:1600003
        ,attr_name:'产地'
        ,attr_value:'中国大陆'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:16
        ,attr_id:17
        ,goods_attr_id:1600004
        ,attr_name:'颜色'
        ,attr_value:'黑色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:17
        ,attr_id:11
        ,goods_attr_id:1700001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:17
        ,attr_id:12
        ,goods_attr_id:1700002
        ,attr_name:'材质'
        ,attr_value:'仿皮'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:17
        ,attr_id:13
        ,goods_attr_id:1700003
        ,attr_name:'产地'
        ,attr_value:'中国大陆'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:17
        ,attr_id:17
        ,goods_attr_id:1700004
        ,attr_name:'颜色'
        ,attr_value:'黑色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:18
        ,attr_id:11
        ,goods_attr_id:1800001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:18
        ,attr_id:12
        ,goods_attr_id:1800002
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

    newCategory = new todayCategory({pid:18
        ,attr_id:13
        ,goods_attr_id:1800003
        ,attr_name:'产地'
        ,attr_value:'中国大陆'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:18
        ,attr_id:17
        ,goods_attr_id:1800004
        ,attr_name:'颜色'
        ,attr_value:'黑色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:19
        ,attr_id:11
        ,goods_attr_id:1900001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:19
        ,attr_id:12
        ,goods_attr_id:1900002
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

    newCategory = new todayCategory({pid:19
        ,attr_id:13
        ,goods_attr_id:1900003
        ,attr_name:'产地'
        ,attr_value:'中国大陆'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:19
        ,attr_id:17
        ,goods_attr_id:1900004
        ,attr_name:'颜色'
        ,attr_value:'黑色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:20
        ,attr_id:11
        ,goods_attr_id:2000001
        ,attr_name:'品牌'
        ,attr_value:'百花天使'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:20
        ,attr_id:12
        ,goods_attr_id:2000002
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

    newCategory = new todayCategory({pid:20
        ,attr_id:13
        ,goods_attr_id:2000003
        ,attr_name:'产地'
        ,attr_value:'中国大陆'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:20
        ,attr_id:17
        ,goods_attr_id:2000004
        ,attr_name:'颜色'
        ,attr_value:'紫色'
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