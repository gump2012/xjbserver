/**
 * Created by gump on 3/17/14.
 */

var a1 = require('./productAttributedb_1_10');
var a2 = require('./productAttributedb_11_20');
var a3 = require('./productAttributedb_21_30');
var a4 = require('./productAttributedb_31_40');
var a5 = require('./productAttributedb_41_50');
var a6 = require('./productAttributedb_51_60');
var a7 = require('./productAttributedb_61_70');
var a8 = require('./productAttributedb_71_80');
var a9 = require('./productAttributedb_81_90');
var a10 = require('./productAttributedb_91_100');
var a11 = require('./productAttributedb_101_110');
var a12 = require('./productAttributedb_111_120');
var a13 = require('./productAttributedb_751_770');
var a600_620 = require('./productAttributedb600_620');
var a200_220 = require('./productAttributedb_cid1_pid200_220');
var a351_370 = require('./productAttributedb_cid2_pid351_370');

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
    a600_620.createdb(mongoose);
    a200_220.createdb(mongoose);
    a351_370.createdb(mongoose);
}

exports.createdb = creatdb;