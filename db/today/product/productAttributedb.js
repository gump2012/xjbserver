/**
 * Created by gump on 3/17/14.
 */

var a1 = require('./productAttributedb1');
var a2 = require('./productAttributedb2');
var a3 = require('./productAttributedb3');

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

    a1.createdb(mongoose);
    a2.createdb(mongoose);
    a3.createdb(mongoose);
}

exports.createdb = creatdb;