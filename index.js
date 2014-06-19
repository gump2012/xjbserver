/**
 * Created by lishiming on 1/16/14.
 */
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var db = require("./db/db.js");

var categoryHandle = require("./todaylead/category/categoryHandle");
var paymentHandles = require("./todaylead/payment/paymentHandles");
var orderHandles = require("./todaylead/order/orderHandles");
var adHandles = require("./todaylead/shop/shopHandles");
var regHandles = require("./todaylead/register/regHandles");
var loginHandles = require("./todaylead/login/loginHandles");
var accountHandles = require("./todaylead/account/accountHandles");
var alipayHandles = require("./todaylead/alipay/alipayHandles");
var productHandles = require('./todaylead/product/productHandles');

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;

handle["category"] = categoryHandle.category;

handle["payment"] = paymentHandles.payment;
handle["order"] = orderHandles.order;
handle["shop"] = adHandles.ad;

handle["register"] = regHandles.register;
handle["login"] = loginHandles.login;
handle["user"] = accountHandles.account;
handle["/alipay"] = alipayHandles.alipay;
handle['product'] = productHandles.product;

db.start();
server.start(router.route,handle);
