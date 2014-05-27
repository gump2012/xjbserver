/**
 * Created by gump on 5/11/14.
 */
var detail1 = require("./productPictureDetaildb1");
var detail2 = require("./productPictureDetaildb2");
var detail3 = require("./productPictureDetaildb3");
var detail4 = require("./productPictureDetaildb4");
var detail5 = require("./productPictureDetaildb5");
var detail6 = require("./productPictureDetaildb6");
var detail7 = require("./productPictureDetaildb7");

function creatdb(mongoose){
    var proSchema = new mongoose.Schema({
        pid                 :{
            type: Number,
            unique: true
        }
        ,picarr             :[String]
    });

    mongoose.model('todayProductPicDetail',proSchema);

    var todayCategory = mongoose.model('todayProductPicDetail');

    todayCategory.remove({}, function(err) {
    });

    detail1.createdb(mongoose);
    detail2.createdb(mongoose);
    detail3.createdb(mongoose);
    detail4.createdb(mongoose);
    detail5.createdb(mongoose);
    detail6.createdb(mongoose);
    detail7.createdb(mongoose);
}

exports.createdb = creatdb;