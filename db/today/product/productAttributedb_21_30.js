/**
 * Created by lishiming on 14-5-5.
 */
function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProductAttr');

    var newCategory = new todayCategory({pid:21
        ,attr_id:11
        ,goods_attr_id:2100001
        ,attr_name:'品牌'
        ,attr_value:'G爽'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:21
        ,attr_id:12
        ,goods_attr_id:2100002
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

    newCategory = new todayCategory({pid:21
        ,attr_id:13
        ,goods_attr_id:2100003
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

    newCategory = new todayCategory({pid:21
        ,attr_id:17
        ,goods_attr_id:2100004
        ,attr_name:'颜色'
        ,attr_value:'绿色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:21
        ,attr_id:17
        ,goods_attr_id:2100005
        ,attr_name:'颜色'
        ,attr_value:'红色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:22
        ,attr_id:11
        ,goods_attr_id:2200001
        ,attr_name:'品牌'
        ,attr_value:'JOKER'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:22
        ,attr_id:12
        ,goods_attr_id:2200002
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

    newCategory = new todayCategory({pid:22
        ,attr_id:13
        ,goods_attr_id:2200003
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

    newCategory = new todayCategory({pid:22
        ,attr_id:18
        ,goods_attr_id:2200004
        ,attr_name:'规格'
        ,attr_value:'JOKER男用延时喷剂'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:23
        ,attr_id:11
        ,goods_attr_id:2300001
        ,attr_name:'品牌'
        ,attr_value:'MFPONES'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:23
        ,attr_id:12
        ,goods_attr_id:2300002
        ,attr_name:'材质'
        ,attr_value:'硅胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:23
        ,attr_id:13
        ,goods_attr_id:2300003
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

    newCategory = new todayCategory({pid:23
        ,attr_id:17
        ,goods_attr_id:2300004
        ,attr_name:'颜色'
        ,attr_value:'奶白色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:23
        ,attr_id:17
        ,goods_attr_id:2300005
        ,attr_name:'颜色'
        ,attr_value:'高雅紫色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:24
        ,attr_id:11
        ,goods_attr_id:2400001
        ,attr_name:'品牌'
        ,attr_value:'倍耐力'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:24
        ,attr_id:12
        ,goods_attr_id:2400002
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

    newCategory = new todayCategory({pid:24
        ,attr_id:13
        ,goods_attr_id:2400003
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

    newCategory = new todayCategory({pid:24
        ,attr_id:18
        ,goods_attr_id:2400004
        ,attr_name:'规格'
        ,attr_value:'倍耐力延时喷剂'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:25
        ,attr_id:11
        ,goods_attr_id:2500001
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

    newCategory = new todayCategory({pid:25
        ,attr_id:13
        ,goods_attr_id:2500002
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

    var newCategory = new todayCategory({pid:25
        ,attr_id:12
        ,goods_attr_id:2500003
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

    newCategory = new todayCategory({pid:25
        ,attr_id:18
        ,goods_attr_id:2500004
        ,attr_name:'规格'
        ,attr_value:'印度神油'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:26
        ,attr_id:11
        ,goods_attr_id:2600001
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

    newCategory = new todayCategory({pid:26
        ,attr_id:12
        ,goods_attr_id:2600002
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

    newCategory = new todayCategory({pid:26
        ,attr_id:13
        ,goods_attr_id:2600003
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

    newCategory = new todayCategory({pid:26
        ,attr_id:18
        ,goods_attr_id:2600004
        ,attr_name:'规格'
        ,attr_value:'跳蛋收纳袋'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:26
        ,attr_id:18
        ,goods_attr_id:2600005
        ,attr_name:'规格'
        ,attr_value:'器具收纳袋'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:26
        ,attr_id:18
        ,goods_attr_id:2600006
        ,attr_name:'规格'
        ,attr_value:'器具清洁鹿皮巾'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:27
        ,attr_id:11
        ,goods_attr_id:2700001
        ,attr_name:'品牌'
        ,attr_value:'耐氏'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:27
        ,attr_id:12
        ,goods_attr_id:2700002
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

    newCategory = new todayCategory({pid:27
        ,attr_id:13
        ,goods_attr_id:2700003
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

    newCategory = new todayCategory({pid:27
        ,attr_id:18
        ,goods_attr_id:2700004
        ,attr_name:'规格'
        ,attr_value:'耐氏延时喷剂【10ML】'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:28
        ,attr_id:11
        ,goods_attr_id:2800001
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

    newCategory = new todayCategory({pid:28
        ,attr_id:12
        ,goods_attr_id:2800002
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

    newCategory = new todayCategory({pid:28
        ,attr_id:13
        ,goods_attr_id:2800003
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

    newCategory = new todayCategory({pid:28
        ,attr_id:18
        ,goods_attr_id:2800004
        ,attr_name:'规格'
        ,attr_value:'白珍珠环'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:28
        ,attr_id:18
        ,goods_attr_id:2800005
        ,attr_name:'规格'
        ,attr_value:'黑珍珠环'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:28
        ,attr_id:18
        ,goods_attr_id:2800006
        ,attr_name:'规格'
        ,attr_value:'三色环'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:29
        ,attr_id:11
        ,goods_attr_id:2900001
        ,attr_name:'品牌'
        ,attr_value:'杜蕾斯'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:29
        ,attr_id:12
        ,goods_attr_id:2900002
        ,attr_name:'材质'
        ,attr_value:'液体'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:29
        ,attr_id:13
        ,goods_attr_id:2900003
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

    newCategory = new todayCategory({pid:29
        ,attr_id:18
        ,goods_attr_id:2900004
        ,attr_name:'规格'
        ,attr_value:'杜蕾斯热感'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:29
        ,attr_id:18
        ,goods_attr_id:2900005
        ,attr_name:'规格'
        ,attr_value:'杜蕾斯热感'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:29
        ,attr_id:18
        ,goods_attr_id:2900006
        ,attr_name:'规格'
        ,attr_value:'依兰花香按摩油'
        ,attr_price:20.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:29
        ,attr_id:18
        ,goods_attr_id:2900007
        ,attr_name:'规格'
        ,attr_value:'芦荟爽滑按摩油'
        ,attr_price:20.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:30
        ,attr_id:11
        ,goods_attr_id:3000001
        ,attr_name:'品牌'
        ,attr_value:'最爱佛罗蒙'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:30
        ,attr_id:12
        ,goods_attr_id:3000002
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

    newCategory = new todayCategory({pid:30
        ,attr_id:13
        ,goods_attr_id:3000003
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

    newCategory = new todayCategory({pid:30
        ,attr_id:18
        ,goods_attr_id:3000004
        ,attr_name:'规格'
        ,attr_value:'男用'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:30
        ,attr_id:18
        ,goods_attr_id:3000005
        ,attr_name:'规格'
        ,attr_value:'女用'
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