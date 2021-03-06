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
var deleteorderdb = require("./today/order/deleteorderdb");
var shoptopicdbold = require("./today/shop/shopTopicdbOld");
var cartlist = require("./today/payment/cartListdb");

var publictool = require("../todaylead/todayPublic/getAssistantValue");
var mongoose = require('mongoose');
function start(){
    var strurl = 'mongodb://' + publictool.localip + ':27017/todaylead';
    var mongodb = mongoose.connect(strurl);

    var db = mongodb.connection;

    db.on('error',console.error.bind(console,'connection erro:'));
    db.once('open',function callback(){
        console.log('db is open success!');

        categoryGetListdb.createdb(mongoose);

        productAttributedb.createdb(mongoose);
        productdb.createdb(mongoose);

        paymentListdb.createdb(mongoose);
        consigneeInfodb.createdb(mongoose);
        cartlist.createdb(mongoose);

        orderdb.createdb(mongoose);
        deleteorderdb.createdb(mongoose);

        addb.createdb(mongoose);
        shoptopicdb.createdb(mongoose);
        shoptopicdbold.createdb(mongoose);

        accountdb.createdb(mongoose);
    });
};

exports.start = start;