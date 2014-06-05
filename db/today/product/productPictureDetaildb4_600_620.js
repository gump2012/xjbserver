/**
 * Created by lishiming on 14-6-5.
 */
exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProductPicDetail');

    var newCategory = new todayCategory({pid:600
        ,picarr:[
            null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:601
        ,picarr:[
            null
        ]});
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}