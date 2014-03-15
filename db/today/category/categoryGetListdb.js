/**
 * Created by gump on 3/15/14.
 */
function createdb(mongoose){
    var userSchema = new mongoose.Schema({
         cid     :Number
        ,cname   :String
        ,info    :String
        ,pic_url :String
    });

    mongoose.model('todayCategoryList',userSchema);

    var todayCategory = mongoose.model('todayCategoryList');

    var newCategory = new todayCategory({cid:1, cname:'a',info:'a',pic_url:''});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({cid:2, cname:'b',info:'b',pic_url:''});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({cid:3, cname:'c',info:'c',pic_url:''});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({cid:4, cname:'d',info:'d',pic_url:''});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    newCategory = new todayCategory({cid:5, cname:'e',info:'e',pic_url:''});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}

exports.createdb = createdb;