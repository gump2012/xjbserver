/**
 * Created by gump on 3/17/14.
 */

var a1 = require('./productAttributedb1');
var a2 = require('./productAttributedb2');
var a3 = require('./productAttributedb3');
var a4 = require('./productAttributedb4');
var a5 = require('./productAttributedb5');
var a6 = require('./productAttributedb6');
var a7 = require('./productAttributedb7');
var a8 = require('./productAttributedb8');
var a9 = require('./productAttributedb9');
var a10 = require('./productAttributedb10');
var a11 = require('./productAttributedb11');
var a12 = require('./productAttributedb12');
var a13 = require('./productAttributedb13');

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
    a4.createdb(mongoose);
    a5.createdb(mongoose);
    a6.createdb(mongoose);
    a7.createdb(mongoose);
    a8.createdb(mongoose);
    a9.createdb(mongoose);
    a10.createdb(mongoose);
    a11.createdb(mongoose);
    a12.createdb(mongoose);
    a13.createdb(mongoose);
}

exports.createdb = creatdb;