/**
 * Created by lishiming on 14-5-7.
 */
function creatdb(mongoose){
    var todayCategory = mongoose.model('todayProductAttr');

    var newCategory = new todayCategory({pid:101
        ,attr_id:11
        ,goods_attr_id:10100001
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

    newCategory = new todayCategory({pid:101
        ,attr_id:12
        ,goods_attr_id:10100002
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

    newCategory = new todayCategory({pid:101
        ,attr_id:13
        ,goods_attr_id:10100003
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

    newCategory = new todayCategory({pid:101
        ,attr_id:18
        ,goods_attr_id:10100004
        ,attr_name:'规格'
        ,attr_value:'销魂掌'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:102
        ,attr_id:11
        ,goods_attr_id:10200001
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

    newCategory = new todayCategory({pid:102
        ,attr_id:12
        ,goods_attr_id:10200002
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

    newCategory = new todayCategory({pid:102
        ,attr_id:13
        ,goods_attr_id:10200003
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

    newCategory = new todayCategory({pid:102
        ,attr_id:18
        ,goods_attr_id:10200004
        ,attr_name:'规格'
        ,attr_value:'后庭拉珠'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:103
        ,attr_id:11
        ,goods_attr_id:10300001
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

    newCategory = new todayCategory({pid:103
        ,attr_id:12
        ,goods_attr_id:10300002
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

    newCategory = new todayCategory({pid:103
        ,attr_id:13
        ,goods_attr_id:10300003
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

    newCategory = new todayCategory({pid:103
        ,attr_id:18
        ,goods_attr_id:10300004
        ,attr_name:'规格'
        ,attr_value:'震动后庭钻'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:104
        ,attr_id:11
        ,goods_attr_id:10400001
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

    newCategory = new todayCategory({pid:104
        ,attr_id:12
        ,goods_attr_id:10400002
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

    newCategory = new todayCategory({pid:104
        ,attr_id:13
        ,goods_attr_id:10400003
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

    newCategory = new todayCategory({pid:104
        ,attr_id:18
        ,goods_attr_id:10400004
        ,attr_name:'规格'
        ,attr_value:'带蛊前戏骰子'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:104
        ,attr_id:18
        ,goods_attr_id:10400005
        ,attr_name:'规格'
        ,attr_value:'夜光前戏骰子'
        ,attr_price:1.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:105
        ,attr_id:11
        ,goods_attr_id:10500001
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

    newCategory = new todayCategory({pid:105
        ,attr_id:12
        ,goods_attr_id:10500002
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

    var newCategory = new todayCategory({pid:105
        ,attr_id:13
        ,goods_attr_id:10500003
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

    newCategory = new todayCategory({pid:105
        ,attr_id:18
        ,goods_attr_id:10500004
        ,attr_name:'规格'
        ,attr_value:'倍力乐震震嘴'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:106
        ,attr_id:11
        ,goods_attr_id:10600001
        ,attr_name:'品牌'
        ,attr_value:'SEMO'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:106
        ,attr_id:12
        ,goods_attr_id:10600002
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

    var newCategory = new todayCategory({pid:106
        ,attr_id:13
        ,goods_attr_id:10600003
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

    newCategory = new todayCategory({pid:106
        ,attr_id:18
        ,goods_attr_id:10600004
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

    newCategory = new todayCategory({pid:106
        ,attr_id:18
        ,goods_attr_id:10600005
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

    newCategory = new todayCategory({pid:106
        ,attr_id:18
        ,goods_attr_id:10600006
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

    newCategory = new todayCategory({pid:107
        ,attr_id:11
        ,goods_attr_id:10700001
        ,attr_name:'品牌'
        ,attr_value:'蒂贝'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:107
        ,attr_id:12
        ,goods_attr_id:10700002
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

    var newCategory = new todayCategory({pid:107
        ,attr_id:13
        ,goods_attr_id:10700003
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

    newCategory = new todayCategory({pid:107
        ,attr_id:18
        ,goods_attr_id:10700004
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

    newCategory = new todayCategory({pid:107
        ,attr_id:18
        ,goods_attr_id:10700005
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

    newCategory = new todayCategory({pid:107
        ,attr_id:18
        ,goods_attr_id:10700006
        ,attr_name:'规格'
        ,attr_value:'蓝色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:108
        ,attr_id:11
        ,goods_attr_id:10800001
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

    newCategory = new todayCategory({pid:108
        ,attr_id:12
        ,goods_attr_id:10800002
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

    var newCategory = new todayCategory({pid:108
        ,attr_id:13
        ,goods_attr_id:10800003
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

    newCategory = new todayCategory({pid:108
        ,attr_id:88
        ,goods_attr_id:10800004
        ,attr_name:'规格'
        ,attr_value:'粉色入门'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:108
        ,attr_id:88
        ,goods_attr_id:10800005
        ,attr_name:'规格'
        ,attr_value:'粉色进阶'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:108
        ,attr_id:88
        ,goods_attr_id:10800006
        ,attr_name:'规格'
        ,attr_value:'粉色进化'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:108
        ,attr_id:88
        ,goods_attr_id:10800007
        ,attr_name:'规格'
        ,attr_value:'粉色绝顶'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:108
        ,attr_id:88
        ,goods_attr_id:10800008
        ,attr_name:'规格'
        ,attr_value:'紫色入门'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:108
        ,attr_id:88
        ,goods_attr_id:10800009
        ,attr_name:'规格'
        ,attr_value:'紫色进阶'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:108
        ,attr_id:88
        ,goods_attr_id:10800010
        ,attr_name:'规格'
        ,attr_value:'紫色进化'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:108
        ,attr_id:88
        ,goods_attr_id:10800011
        ,attr_name:'规格'
        ,attr_value:'紫色绝顶'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:109
        ,attr_id:11
        ,goods_attr_id:10900001
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

    newCategory = new todayCategory({pid:109
        ,attr_id:12
        ,goods_attr_id:10900002
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

    var newCategory = new todayCategory({pid:109
        ,attr_id:13
        ,goods_attr_id:10900003
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

    newCategory = new todayCategory({pid:109
        ,attr_id:18
        ,goods_attr_id:10900004
        ,attr_name:'规格'
        ,attr_value:'振翅蝴蝶'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:110
        ,attr_id:11
        ,goods_attr_id:11000001
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

    newCategory = new todayCategory({pid:110
        ,attr_id:12
        ,goods_attr_id:11000002
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

    var newCategory = new todayCategory({pid:110
        ,attr_id:13
        ,goods_attr_id:11000003
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

    newCategory = new todayCategory({pid:110
        ,attr_id:18
        ,goods_attr_id:11000004
        ,attr_name:'规格'
        ,attr_value:'电击器'
        ,attr_price:8.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = creatdb;