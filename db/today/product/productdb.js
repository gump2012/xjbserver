/**
 * Created by gump on 3/17/14.
 */

var create_db_product_common = require('./create_db_product_common');

var productdb1 = require('./productdb1');
var productdb2 = require('./productdb2');
var productdb3 = require('./productdb3');
var productdb4 = require('./productdb4');
var productdb5 = require('./productdb5');
var productdb6 = require('./productdb6');
var productdb7 = require('./productdb7');
var productdb600_620 = require('./productdb600_620');
var productdb200_220 = require('./productdb_cid1_pid200_220');
var productdb351_370 = require('./productdb_cid2_pid351_370');
var productdb451_470 = require('./productdb_cid3_pid451_470');
var productdb221_240 = require('./productdb_cid1_pid221_240');

function creatdb(mongoose){
    var proSchema = new mongoose.Schema({
        pid                 :{
            type: Number,
            unique: true
        }
        ,cid                :Number
		,new_category_id    :Number
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

	var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid1_pid1_20");
	create_db_product_common.create_product_db(mongoose, macroproduct);
	var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid2_pid21_40");
	create_db_product_common.create_product_db(mongoose, macroproduct);
	var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid3_pid41_60");
	create_db_product_common.create_product_db(mongoose, macroproduct);
	var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid4_pid61_80");
	create_db_product_common.create_product_db(mongoose, macroproduct);
	var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid5_pid81_100");
	create_db_product_common.create_product_db(mongoose, macroproduct);
	var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid6_pid101_120");
	create_db_product_common.create_product_db(mongoose, macroproduct);
	var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid5_pid751_770");
	create_db_product_common.create_product_db(mongoose, macroproduct);
	var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid1_pid200_220");
	create_db_product_common.create_product_db(mongoose, macroproduct);
	var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid1_pid221_240");
	create_db_product_common.create_product_db(mongoose, macroproduct);
	var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid2_pid351_370");
	create_db_product_common.create_product_db(mongoose, macroproduct);
	var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid3_pid451_470");	
	create_db_product_common.create_product_db(mongoose, macroproduct);
	var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid4_pid600_620");
	create_db_product_common.create_product_db(mongoose, macroproduct);
	
    // productdb1.createdb(mongoose);
    // productdb2.createdb(mongoose);
    // productdb3.createdb(mongoose);
    // productdb4.createdb(mongoose);
    // productdb5.createdb(mongoose);
    // productdb6.createdb(mongoose);
    // productdb7.createdb(mongoose);
    // productdb600_620.createdb(mongoose);
    // productdb200_220.createdb(mongoose);
    // productdb351_370.createdb(mongoose);
    // productdb451_470.createdb(mongoose);
    // productdb221_240.createdb(mongoose);
}

exports.createdb = creatdb;