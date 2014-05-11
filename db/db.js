/**
 * Created by lishiming on 3/3/14.
 */
var categoryGetListdb = require("./today/category/categoryGetListdb");
var productAttributedb = require("./today/product/productAttributedb");
var productdb = require("./today/product/productdb");
var paymentListdb = require("./today/payment/paymentListdb");
var consigneeInfodb = require("./today/payment/consigneeInfodb");
var orderdb = require("./today/order/orderdb");
var addb = require("./today/shop/shopAddb");
var shoptopicdb = require("./today/shop/shopTopicdb");
var accountdb = require("./today/account/accountdb");
var productPicDetaildb = require("./today/product/productPictureDetaildb");

var mongoose = require('mongoose');
function start(){
    var mongodb = mongoose.connect('mongodb://localhost:27017/todaylead');

    var db = mongodb.connection;

    db.on('error',console.error.bind(console,'connection erro:'));
    db.once('open',function callback(){
        console.log('db is open success!');

        var userSchema = new mongoose.Schema({
            mail :String
            ,ps   :String
        });

        mongoose.model('user',userSchema);
        categoryGetListdb.createdb(mongoose);

        productAttributedb.createdb(mongoose);
        productdb.createdb(mongoose);
        productPicDetaildb.createdb(mongoose);

        paymentListdb.createdb(mongoose);
        consigneeInfodb.createdb(mongoose);

        orderdb.createdb(mongoose);

        addb.createdb(mongoose);
        shoptopicdb.createdb(mongoose);

        accountdb.createdb(mongoose);
    });
};

exports.start = start;