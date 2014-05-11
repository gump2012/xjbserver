/**
 * Created by gump on 5/11/14.
 */
function creatdb(mongoose){
    var proSchema = new mongoose.Schema({
        pid                 :Number
        ,picarr             :[String]
    });

    mongoose.model('todayProductPicDetail',proSchema);

    var todayCategory = mongoose.model('todayProductPicDetail');

    todayCategory.remove({}, function(err) {
    });
}

exports.createdb = creatdb;