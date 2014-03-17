/**
 * Created by gump on 3/17/14.
 */

function creatdb(mongoose){
    var proAttrSchema = new mongoose.Schema({
        pid                 :Number
        ,attr_id            :Number
        ,goods_attr_id      :Number
        ,attr_name          :String
        ,attr_value         :String
        ,attr_price         :Number
        ,attr_type          :Number
    });

    mongoose.model('todayProductAttr',proAttrSchema);

    var todayCategory = mongoose.model('todayProductAttr');

    todayCategory.remove({}, function(err) {
        console.log('todayProductAttr removed')
    });

    var newCategory = new todayCategory({pid:1
        ,attr_id:1
        ,goods_attr_id:1
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