/**
 * Created by gump on 5/11/14.
 */
var detail1 = require("./productPictureDetaildb1");

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
}

exports.createdb = creatdb;