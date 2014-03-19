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
    });

    var newCategory = new todayCategory({pid:1
        ,url:'http://img03.taobaocdn.com/imgextra/i3/468359490/T2rEuxXtpXXXXXXXXX-468359490.jpg'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:1
        ,url:'http://img02.taobaocdn.com/imgextra/i2/468359490/T2qE4FXxpaXXXXXXXX-468359490.jpg'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:1
        ,url:'http://img02.taobaocdn.com/imgextra/i2/468359490/T2LSWKXpNaXXXXXXXX-468359490.jpg'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({pid:1
        ,url:'http://img02.taobaocdn.com/imgextra/i2/468359490/T2Xa0WXAlaXXXXXXXX-468359490.jpg'});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = creatdb;