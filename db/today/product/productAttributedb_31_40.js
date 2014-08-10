/**
 * Created by lishiming on 14-5-5.
 */
/**
 * Created by lishiming on 14-5-5.
 */
function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProductAttr');

    var newCategory = new todayCategory({pid:31
        ,attr_id:11
        ,goods_attr_id:3100001
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

    newCategory = new todayCategory({pid:31
        ,attr_id:12
        ,goods_attr_id:3100002
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

    newCategory = new todayCategory({pid:31
        ,attr_id:13
        ,goods_attr_id:3100003
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

    newCategory = new todayCategory({pid:31
        ,attr_id:18
        ,goods_attr_id:3100004
        ,attr_name:'规格'
        ,attr_value:'水晶之恋凤梨套'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:32
        ,attr_id:11
        ,goods_attr_id:3200001
        ,attr_name:'品牌'
        ,attr_value:'爱妃'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:32
        ,attr_id:12
        ,goods_attr_id:3200002
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

    newCategory = new todayCategory({pid:32
        ,attr_id:13
        ,goods_attr_id:3200003
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

    newCategory = new todayCategory({pid:32
        ,attr_id:18
        ,goods_attr_id:3200004
        ,attr_name:'规格'
        ,attr_value:'玫瑰味'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:32
        ,attr_id:18
        ,goods_attr_id:3200005
        ,attr_name:'规格'
        ,attr_value:'郁金香味'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:33
        ,attr_id:11
        ,goods_attr_id:3300001
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

    newCategory = new todayCategory({pid:33
        ,attr_id:12
        ,goods_attr_id:3300002
        ,attr_name:'材质'
        ,attr_value:'软胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:33
        ,attr_id:13
        ,goods_attr_id:3300003
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

    newCategory = new todayCategory({pid:33
        ,attr_id:18
        ,goods_attr_id:3300004
        ,attr_name:'规格'
        ,attr_value:'天蝎座'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:33
        ,attr_id:18
        ,goods_attr_id:3300005
        ,attr_name:'规格'
        ,attr_value:'巨蟹座'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:33
        ,attr_id:18
        ,goods_attr_id:3300006
        ,attr_name:'规格'
        ,attr_value:'摩羯座'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:33
        ,attr_id:18
        ,goods_attr_id:3300007
        ,attr_name:'规格'
        ,attr_value:'射手座'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:34
        ,attr_id:11
        ,goods_attr_id:3400001
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

    newCategory = new todayCategory({pid:34
        ,attr_id:12
        ,goods_attr_id:3400002
        ,attr_name:'材质'
        ,attr_value:'软胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:34
        ,attr_id:13
        ,goods_attr_id:3400003
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

    newCategory = new todayCategory({pid:34
        ,attr_id:18
        ,goods_attr_id:3400004
        ,attr_name:'规格'
        ,attr_value:'肉色一大一小两只装'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:34
        ,attr_id:18
        ,goods_attr_id:3400005
        ,attr_name:'规格'
        ,attr_value:'粉色一大一小两只装'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:34
        ,attr_id:18
        ,goods_attr_id:3400006
        ,attr_name:'规格'
        ,attr_value:'黑色一大一小两只装'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:34
        ,attr_id:18
        ,goods_attr_id:3400007
        ,attr_name:'规格'
        ,attr_value:'透明一大一小两只装'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:35
        ,attr_id:11
        ,goods_attr_id:3500001
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

    newCategory = new todayCategory({pid:35
        ,attr_id:13
        ,goods_attr_id:3500002
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

    var newCategory = new todayCategory({pid:35
        ,attr_id:12
        ,goods_attr_id:3500003
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

    newCategory = new todayCategory({pid:35
        ,attr_id:18
        ,goods_attr_id:3500004
        ,attr_name:'规格'
        ,attr_value:'凸点锯刺狼牙套'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:35
        ,attr_id:18
        ,goods_attr_id:3500005
        ,attr_name:'规格'
        ,attr_value:'虫刺狼牙套'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:35
        ,attr_id:18
        ,goods_attr_id:3500006
        ,attr_name:'规格'
        ,attr_value:'螺纹突刺狼牙套'
        ,attr_price:1.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:35
        ,attr_id:18
        ,goods_attr_id:3500007
        ,attr_name:'规格'
        ,attr_value:'龙须鱼刺狼牙套'
        ,attr_price:1.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:35
        ,attr_id:18
        ,goods_attr_id:3500008
        ,attr_name:'规格'
        ,attr_value:'螺纹突刺狼牙套-彩色'
        ,attr_price:6.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:35
        ,attr_id:18
        ,goods_attr_id:3500009
        ,attr_name:'规格'
        ,attr_value:'龙珠狼牙套'
        ,attr_price:6.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:36
        ,attr_id:11
        ,goods_attr_id:3600001
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

    newCategory = new todayCategory({pid:36
        ,attr_id:12
        ,goods_attr_id:3600002
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

    newCategory = new todayCategory({pid:36
        ,attr_id:13
        ,goods_attr_id:3600003
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

    newCategory = new todayCategory({pid:36
        ,attr_id:18
        ,goods_attr_id:3600004
        ,attr_name:'规格'
        ,attr_value:'百乐拇指狼牙套'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:36
        ,attr_id:18
        ,goods_attr_id:3600005
        ,attr_name:'规格'
        ,attr_value:'百乐双叉叉兔狼牙套'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:36
        ,attr_id:18
        ,goods_attr_id:3600006
        ,attr_name:'规格'
        ,attr_value:'百乐狼牙套'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:36
        ,attr_id:18
        ,goods_attr_id:3600007
        ,attr_name:'规格'
        ,attr_value:'百乐爱心狼牙套'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:36
        ,attr_id:18
        ,goods_attr_id:3600008
        ,attr_name:'规格'
        ,attr_value:'百乐带座狼牙套'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:36
        ,attr_id:18
        ,goods_attr_id:3600009
        ,attr_name:'规格'
        ,attr_value:'百乐震动水晶套'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:37
        ,attr_id:11
        ,goods_attr_id:3700001
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

    newCategory = new todayCategory({pid:37
        ,attr_id:12
        ,goods_attr_id:3700002
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

    newCategory = new todayCategory({pid:37
        ,attr_id:13
        ,goods_attr_id:3700003
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

    newCategory = new todayCategory({pid:37
        ,attr_id:18
        ,goods_attr_id:3700004
        ,attr_name:'规格'
        ,attr_value:'天然羊眼圈简装'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:37
        ,attr_id:18
        ,goods_attr_id:3700005
        ,attr_name:'规格'
        ,attr_value:'天然羊眼圈精装'
        ,attr_price:2.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:38
        ,attr_id:11
        ,goods_attr_id:3800001
        ,attr_name:'品牌'
        ,attr_value:'Enlarge'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:38
        ,attr_id:12
        ,goods_attr_id:3800002
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

    newCategory = new todayCategory({pid:38
        ,attr_id:13
        ,goods_attr_id:3800003
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

    newCategory = new todayCategory({pid:38
        ,attr_id:18
        ,goods_attr_id:3800004
        ,attr_name:'规格'
        ,attr_value:'美国原装进口-增粗助大精油'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:39
        ,attr_id:11
        ,goods_attr_id:3900001
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

    newCategory = new todayCategory({pid:39
        ,attr_id:12
        ,goods_attr_id:3900002
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

    newCategory = new todayCategory({pid:39
        ,attr_id:13
        ,goods_attr_id:3900003
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

    newCategory = new todayCategory({pid:39
        ,attr_id:18
        ,goods_attr_id:3900004
        ,attr_name:'规格'
        ,attr_value:'单片装'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:39
        ,attr_id:18
        ,goods_attr_id:3900005
        ,attr_name:'规格'
        ,attr_value:'12片盒装'
        ,attr_price:25.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:40
        ,attr_id:11
        ,goods_attr_id:4000001
        ,attr_name:'品牌'
        ,attr_value:'菲尔普'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:40
        ,attr_id:12
        ,goods_attr_id:4000002
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

    newCategory = new todayCategory({pid:40
        ,attr_id:13
        ,goods_attr_id:4000003
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

    newCategory = new todayCategory({pid:40
        ,attr_id:18
        ,goods_attr_id:4000004
        ,attr_name:'规格'
        ,attr_value:'100ml喷头 ￥14.00'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:40
        ,attr_id:18
        ,goods_attr_id:4000005
        ,attr_name:'规格'
        ,attr_value:'220ml喷头 ￥20.00'
        ,attr_price:6.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = creatdb;