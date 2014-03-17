/**
 * Created by gump on 3/17/14.
 */

function creatdb(mongoose){
    var proPicSchema = new mongoose.Schema({
        pid                 :Number
        ,url                :String
    });

    mongoose.model('todayProductPic',proPicSchema);

    var todayCategory = mongoose.model('todayProductPic');

    todayCategory.remove({}, function(err) {
        console.log('todayProductPic removed')
    });

    var newCategory = new todayCategory({pid:1
        ,url:''});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = creatdb;