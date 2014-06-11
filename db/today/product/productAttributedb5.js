/**
 * Created by lishiming on 14-5-6.
 */
function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProductAttr');

    var newCategory = new todayCategory({pid:41
        ,attr_id:11
        ,goods_attr_id:4100001
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

    newCategory = new todayCategory({pid:41
        ,attr_id:12
        ,goods_attr_id:4100002
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

    newCategory = new todayCategory({pid:41
        ,attr_id:13
        ,goods_attr_id:4100003
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

    newCategory = new todayCategory({pid:41
        ,attr_id:18
        ,goods_attr_id:4100004
        ,attr_name:'规格'
        ,attr_value:'3D美臀'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:42
        ,attr_id:11
        ,goods_attr_id:4200001
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

    newCategory = new todayCategory({pid:42
        ,attr_id:12
        ,goods_attr_id:4200002
        ,attr_name:'材质'
        ,attr_value:'医用软胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:42
        ,attr_id:13
        ,goods_attr_id:4200003
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

    newCategory = new todayCategory({pid:42
        ,attr_id:18
        ,goods_attr_id:4200004
        ,attr_name:'规格'
        ,attr_value:'萝莉双层结构上付 熟女'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:42
        ,attr_id:18
        ,goods_attr_id:4200005
        ,attr_name:'规格'
        ,attr_value:'萝莉双层结构下付 处女'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:43
        ,attr_id:11
        ,goods_attr_id:4300001
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

    newCategory = new todayCategory({pid:43
        ,attr_id:12
        ,goods_attr_id:4300002
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

    newCategory = new todayCategory({pid:43
        ,attr_id:13
        ,goods_attr_id:4300003
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

    newCategory = new todayCategory({pid:43
        ,attr_id:18
        ,goods_attr_id:4300004
        ,attr_name:'规格'
        ,attr_value:'可乐蛋细纹草莓味'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:43
        ,attr_id:18
        ,goods_attr_id:4300005
        ,attr_name:'规格'
        ,attr_value:'可乐蛋螺旋形泥猴桃味'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:43
        ,attr_id:18
        ,goods_attr_id:4300006
        ,attr_name:'规格'
        ,attr_value:'可乐蛋波纹香橙味'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:44
        ,attr_id:11
        ,goods_attr_id:4400001
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

    newCategory = new todayCategory({pid:44
        ,attr_id:12
        ,goods_attr_id:4400002
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

    newCategory = new todayCategory({pid:44
        ,attr_id:13
        ,goods_attr_id:4400003
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

    newCategory = new todayCategory({pid:44
        ,attr_id:18
        ,goods_attr_id:4400004
        ,attr_name:'规格'
        ,attr_value:'丰乳妹'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:44
        ,attr_id:18
        ,goods_attr_id:4400005
        ,attr_name:'规格'
        ,attr_value:'大波妹'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:45
        ,attr_id:11
        ,goods_attr_id:4500001
        ,attr_name:'品牌'
        ,attr_value:'久兴'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:45
        ,attr_id:13
        ,goods_attr_id:4500002
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

    var newCategory = new todayCategory({pid:45
        ,attr_id:12
        ,goods_attr_id:4500003
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

    newCategory = new todayCategory({pid:45
        ,attr_id:18
        ,goods_attr_id:4500004
        ,attr_name:'规格'
        ,attr_value:'幻魅红色处女'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:45
        ,attr_id:18
        ,goods_attr_id:4500005
        ,attr_name:'规格'
        ,attr_value:'幻魅绿色肛交'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:45
        ,attr_id:18
        ,goods_attr_id:4500006
        ,attr_name:'规格'
        ,attr_value:'幻魅蓝色口娇'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:46
        ,attr_id:11
        ,goods_attr_id:4600001
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

    newCategory = new todayCategory({pid:46
        ,attr_id:12
        ,goods_attr_id:4600002
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

    newCategory = new todayCategory({pid:46
        ,attr_id:13
        ,goods_attr_id:4600003
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

    newCategory = new todayCategory({pid:46
        ,attr_id:18
        ,goods_attr_id:4600004
        ,attr_name:'规格'
        ,attr_value:'舌尖诱惑'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:46
        ,attr_id:18
        ,goods_attr_id:4600005
        ,attr_name:'规格'
        ,attr_value:'红色-波浪【强吸吮刺激】'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:46
        ,attr_id:18
        ,goods_attr_id:4600006
        ,attr_name:'规格'
        ,attr_value:'白色-圆珠【可持久训练】'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:47
        ,attr_id:11
        ,goods_attr_id:4700001
        ,attr_name:'品牌'
        ,attr_value:'倍儿性'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:47
        ,attr_id:12
        ,goods_attr_id:4700002
        ,attr_name:'材质'
        ,attr_value:'医用软胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:47
        ,attr_id:13
        ,goods_attr_id:4700003
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

    newCategory = new todayCategory({pid:47
        ,attr_id:18
        ,goods_attr_id:4700004
        ,attr_name:'规格'
        ,attr_value:'桃花岛阴臀倒模'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:48
        ,attr_id:11
        ,goods_attr_id:4800001
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

    newCategory = new todayCategory({pid:48
        ,attr_id:12
        ,goods_attr_id:4800002
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

    newCategory = new todayCategory({pid:48
        ,attr_id:13
        ,goods_attr_id:4800003
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

    newCategory = new todayCategory({pid:48
        ,attr_id:18
        ,goods_attr_id:4800004
        ,attr_name:'规格'
        ,attr_value:'加热棒'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:49
        ,attr_id:11
        ,goods_attr_id:4900001
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

    newCategory = new todayCategory({pid:49
        ,attr_id:12
        ,goods_attr_id:4900002
        ,attr_name:'材质'
        ,attr_value:'医用软胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:49
        ,attr_id:13
        ,goods_attr_id:4900003
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

    newCategory = new todayCategory({pid:49
        ,attr_id:18
        ,goods_attr_id:4900004
        ,attr_name:'规格'
        ,attr_value:'第一阶段-人初'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:49
        ,attr_id:18
        ,goods_attr_id:4900005
        ,attr_name:'规格'
        ,attr_value:'第二阶段-进化'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:49
        ,attr_id:18
        ,goods_attr_id:4900006
        ,attr_name:'规格'
        ,attr_value:'第三阶段-得道'
        ,attr_price:9.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:49
        ,attr_id:18
        ,goods_attr_id:4900007
        ,attr_name:'规格'
        ,attr_value:'第四阶段-极致'
        ,attr_price:9.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:49
        ,attr_id:18
        ,goods_attr_id:4900008
        ,attr_name:'规格'
        ,attr_value:'第五阶段-突破'
        ,attr_price:9.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:50
        ,attr_id:11
        ,goods_attr_id:5000001
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

    newCategory = new todayCategory({pid:50
        ,attr_id:12
        ,goods_attr_id:5000002
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

    newCategory = new todayCategory({pid:50
        ,attr_id:13
        ,goods_attr_id:5000003
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

    newCategory = new todayCategory({pid:50
        ,attr_id:18
        ,goods_attr_id:5000004
        ,attr_name:'规格'
        ,attr_value:'【阴交杯】优雅紫色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:50
        ,attr_id:18
        ,goods_attr_id:5000005
        ,attr_name:'规格'
        ,attr_value:'【口交杯】清新绿色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:50
        ,attr_id:18
        ,goods_attr_id:5000006
        ,attr_name:'规格'
        ,attr_value:'【肛交杯】魅感红色'
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