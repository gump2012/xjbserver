/**
 * Created by lishiming on 1/16/14.
 */
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var db = require("./db/db.js");

var bookLoginHandlers = require("./book/login/bookLoginHandlers");

var categoryHandle = require("./todaylead/category/categoryHandle");
var productHandles = require("./todaylead/product/productHandles");
var paymentHandles = require("./todaylead/payment/paymentHandles");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/book/login"] = bookLoginHandlers.bookLogin;
handle["/book/register"] = bookLoginHandlers.bookRegister;

handle["/category"] = categoryHandle.category;
handle["/product"] = productHandles.product;

handle["/payment"] = paymentHandles.payment;

db.start();
server.start(router.route,handle);
