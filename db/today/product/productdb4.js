/**
 * Created by gump on 4/12/14.
 */

var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid4_pid61_80");

exports.createdb = function(mongoose){
    var todayCategory = mongoose.model('todayProduct');
    for(var i = 0; i < macroproduct.productarr.length - 1;++i){
        var newCategory = new todayCategory(
            macroproduct.productarr[i]
        );
        newCategory.save( function( err, silence ) {
            if( err )
            {
                console.log(err);
            }
        });
    }
}