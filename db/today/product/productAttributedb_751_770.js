/**
 * Created by lishiming on 14-5-28.
 */
exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProductAttr');

    var newCategory = new todayCategory({pid:751
        ,attr_id:11
        ,goods_attr_id:75100001
        ,attr_name:'品牌'
        ,attr_value:'名流'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:751
        ,attr_id:12
        ,goods_attr_id:75100002
        ,attr_name:'材质'
        ,attr_value:'乳胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:751
        ,attr_id:13
        ,goods_attr_id:75100003
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

    newCategory = new todayCategory({pid:751
        ,attr_id:18
        ,goods_attr_id:75100004
        ,attr_name:'规格'
        ,attr_value:'活力螺纹+动感颗粒+柔滑丝薄 共30只'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:752
        ,attr_id:11
        ,goods_attr_id:75200001
        ,attr_name:'品牌'
        ,attr_value:'冈本'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:752
        ,attr_id:12
        ,goods_attr_id:75200002
        ,attr_name:'材质'
        ,attr_value:'乳胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:752
        ,attr_id:13
        ,goods_attr_id:75200003
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

    newCategory = new todayCategory({pid:752
        ,attr_id:18
        ,goods_attr_id:75200004
        ,attr_name:'规格'
        ,attr_value:'003白金3片'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:752
        ,attr_id:18
        ,goods_attr_id:75200005
        ,attr_name:'规格'
        ,attr_value:'003黄金6片'
        ,attr_price:27.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:752
        ,attr_id:18
        ,goods_attr_id:75200006
        ,attr_name:'规格'
        ,attr_value:'003超薄白金3片+黄金6片'
        ,attr_price:60.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:753
        ,attr_id:11
        ,goods_attr_id:75300001
        ,attr_name:'品牌'
        ,attr_value:'第六感'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:753
        ,attr_id:12
        ,goods_attr_id:75300002
        ,attr_name:'材质'
        ,attr_value:'乳胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:753
        ,attr_id:13
        ,goods_attr_id:75300003
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

    newCategory = new todayCategory({pid:753
        ,attr_id:18
        ,goods_attr_id:75300004
        ,attr_name:'规格'
        ,attr_value:'六合一24+螺纹24+超薄平滑24'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:754
        ,attr_id:11
        ,goods_attr_id:75400001
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

    newCategory = new todayCategory({pid:754
        ,attr_id:12
        ,goods_attr_id:75400002
        ,attr_name:'材质'
        ,attr_value:'乳胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:754
        ,attr_id:13
        ,goods_attr_id:75400003
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

    newCategory = new todayCategory({pid:754
        ,attr_id:18
        ,goods_attr_id:75400004
        ,attr_name:'规格'
        ,attr_value:'随机'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:755
        ,attr_id:11
        ,goods_attr_id:75500001
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

    newCategory = new todayCategory({pid:755
        ,attr_id:12
        ,goods_attr_id:75500002
        ,attr_name:'材质'
        ,attr_value:'乳胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:755
        ,attr_id:13
        ,goods_attr_id:75500003
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

    newCategory = new todayCategory({pid:755
        ,attr_id:18
        ,goods_attr_id:75500004
        ,attr_name:'规格'
        ,attr_value:'随机'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:756
        ,attr_id:11
        ,goods_attr_id:75600001
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

    newCategory = new todayCategory({pid:756
        ,attr_id:12
        ,goods_attr_id:75600002
        ,attr_name:'材质'
        ,attr_value:'乳胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:756
        ,attr_id:13
        ,goods_attr_id:75600003
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

    newCategory = new todayCategory({pid:756
        ,attr_id:18
        ,goods_attr_id:75600004
        ,attr_name:'规格'
        ,attr_value:'6粒杜蕾斯巧克力装'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:757
        ,attr_id:11
        ,goods_attr_id:75700001
        ,attr_name:'品牌'
        ,attr_value:'杰士邦'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:757
        ,attr_id:12
        ,goods_attr_id:75700002
        ,attr_name:'材质'
        ,attr_value:'乳胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:757
        ,attr_id:13
        ,goods_attr_id:75700003
        ,attr_name:'产地'
        ,attr_value:'泰国'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:757
        ,attr_id:18
        ,goods_attr_id:75700004
        ,attr_name:'规格'
        ,attr_value:'动感薄12片'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:757
        ,attr_id:18
        ,goods_attr_id:75700005
        ,attr_name:'规格'
        ,attr_value:'优质超薄12片'
        ,attr_price:7.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:757
        ,attr_id:18
        ,goods_attr_id:75700006
        ,attr_name:'规格'
        ,attr_value:'有型超薄12片'
        ,attr_price:16.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:757
        ,attr_id:18
        ,goods_attr_id:75700007
        ,attr_name:'规格'
        ,attr_value:'优质超薄18片'
        ,attr_price:17.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:757
        ,attr_id:18
        ,goods_attr_id:75700008
        ,attr_name:'规格'
        ,attr_value:'精选超薄三合一'
        ,attr_price:17.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:757
        ,attr_id:18
        ,goods_attr_id:75700009
        ,attr_name:'规格'
        ,attr_value:'极限超薄'
        ,attr_price:28.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:758
        ,attr_id:11
        ,goods_attr_id:75800001
        ,attr_name:'品牌'
        ,attr_value:'EVE'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:758
        ,attr_id:12
        ,goods_attr_id:75800002
        ,attr_name:'材质'
        ,attr_value:'其它'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:758
        ,attr_id:13
        ,goods_attr_id:75800003
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

    newCategory = new todayCategory({pid:758
        ,attr_id:18
        ,goods_attr_id:75800004
        ,attr_name:'规格'
        ,attr_value:'白盒 3支'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:758
        ,attr_id:18
        ,goods_attr_id:75800005
        ,attr_name:'规格'
        ,attr_value:'白盒 6支'
        ,attr_price:5.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:758
        ,attr_id:18
        ,goods_attr_id:75800006
        ,attr_name:'规格'
        ,attr_value:'红盒'
        ,attr_price:2.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:759
        ,attr_id:11
        ,goods_attr_id:75900001
        ,attr_name:'品牌'
        ,attr_value:'斯香妮'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:759
        ,attr_id:12
        ,goods_attr_id:75900002
        ,attr_name:'材质'
        ,attr_value:'乳胶'
        ,attr_price:0.00
        ,attr_type:0});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:759
        ,attr_id:13
        ,goods_attr_id:75900003
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

    newCategory = new todayCategory({pid:759
        ,attr_id:18
        ,goods_attr_id:75900004
        ,attr_name:'规格'
        ,attr_value:'虎牙套'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:759
        ,attr_id:18
        ,goods_attr_id:75900005
        ,attr_name:'规格'
        ,attr_value:'狼牙套冰感'
        ,attr_price:2.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:759
        ,attr_id:18
        ,goods_attr_id:75900006
        ,attr_name:'规格'
        ,attr_value:'狼牙套热感'
        ,attr_price:2.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:759
        ,attr_id:18
        ,goods_attr_id:75900007
        ,attr_name:'规格'
        ,attr_value:'狼牙套冰热'
        ,attr_price:2.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:759
        ,attr_id:18
        ,goods_attr_id:75900008
        ,attr_name:'规格'
        ,attr_value:'变形金刚'
        ,attr_price:10.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:759
        ,attr_id:18
        ,goods_attr_id:75900009
        ,attr_name:'规格'
        ,attr_value:'狼牙套冰感+狼牙套热感+狼牙套冰热'
        ,attr_price:19.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}