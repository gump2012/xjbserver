/**
 * Created by gump on 2/20/14.
 */

var bookuser = require("../../db/db").bookuser;

function bookLogin(response,request){
    console.log("Request handler 'book Login' was called.");

    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("book Login");
    response.end();
}

function bookRegister(response,request){
    console.log("Request handler 'book register' was called.");

    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("book register");
    response.end();
}

exports.bookLogin = bookLogin;
exports.bookRegister = bookRegister;

