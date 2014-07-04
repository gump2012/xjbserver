/**
 * Created by gump on 3/17/14.
 */

var productdb2 = require('./productdb2');
var productdb1 = require('./productdb1');
var productdb3 = require('./productdb3');
var productdb4 = require('./productdb4');
var productdb5 = require('./productdb5');
var productdb6 = require('./productdb6');
var productdb7 = require('./productdb7');
var productdb600_620 = require('./productdb600_620');
var productdb200_220 = require('./productdb_cid1_pid200_220');
var productdb351_370 = require('./productdb_cid2_pid351_370');
var productdb451_470 = require('./productdb_cid3_pid451_470');

function creatdb(mongoose){
    var proSchema = new mongoose.Schema({
        pid                 :{
            type: Number,
            unique: true
        }
        ,cid                :Number
        ,title              :String
        ,volume             :Number
        ,recentvolume       :Number
        ,org_price          :Number
        ,price              :Number
        ,state              :Number
        ,stamper            :String
        ,pic_url            :String
        ,time               :Number
        ,actualvolume       :Number    //实际销量
        ,arrivaltime        :String    //上架时间
        ,gallery            :[String]
        ,detailpics         :[String]
        ,experience         :[String]  //体验图片数组
    });

    mongoose.model('todayProduct',proSchema);

    var todayCategory = mongoose.model('todayProduct');

    todayCategory.remove({}, function(err) {
    });

    productdb1.createdb(mongoose);
    productdb2.createdb(mongoose);
    productdb3.createdb(mongoose);
    productdb4.createdb(mongoose);
    productdb5.createdb(mongoose);
    productdb6.createdb(mongoose);
    productdb7.createdb(mongoose);
    productdb600_620.createdb(mongoose);
    productdb200_220.createdb(mongoose);
    productdb351_370.createdb(mongoose);
    productdb451_470.createdb(mongoose);
}

exports.createdb = creatdb;