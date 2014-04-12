/**
 * Created by gump on 3/17/14.
 */

var productdb2 = require('./productdb2');
var productdb1 = require('./productdb1');

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
    });

    mongoose.model('todayProduct',proSchema);

    var todayCategory = mongoose.model('todayProduct');

    todayCategory.remove({}, function(err) {
    });

    productdb1.createdb(mongoose);
    productdb2.createdb(mongoose);

}

exports.createdb = creatdb;