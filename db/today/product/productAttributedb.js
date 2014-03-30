/**
 * Created by gump on 3/17/14.
 */

function creatdb(mongoose){
    var proAttrSchema = new mongoose.Schema({
        pid                 :Number
        ,attr_id            :Number
        ,goods_attr_id      :{
            type: Number,
            unique: true
        }
        ,attr_name          :String
        ,attr_value         :String
        ,attr_price         :Number
        ,attr_type          :Number
    });

    mongoose.model('todayProductAttr',proAttrSchema);

    var todayCategory = mongoose.model('todayProductAttr');

    todayCategory.remove({}, function(err) {
    });

    var newCategory = new todayCategory({pid:1
        ,attr_id:1
        ,goods_attr_id:1
        ,attr_name:'规格'
        ,attr_value:'美洲狂野双层双色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:1
        ,attr_id:1
        ,goods_attr_id:2
        ,attr_name:'规格'
        ,attr_value:'欧洲浪漫双层双色'
        ,attr_price:0.00
        ,attr_type:1});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:1
        ,attr_id:2
        ,goods_attr_id:3
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

    newCategory = new todayCategory({pid:1
        ,attr_id:3
        ,goods_attr_id:4
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

    newCategory = new todayCategory({pid:1
        ,attr_id:4
        ,goods_attr_id:5
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
}

exports.createdb = creatdb;