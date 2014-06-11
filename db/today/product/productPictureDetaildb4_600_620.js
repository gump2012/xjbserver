/**
 * Created by lishiming on 14-6-5.
 */

var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid4_pid600_620");

exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProductPicDetail');

    var newCategory = new todayCategory({pid:600
        ,picarr:macroproduct.PID600_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:601
        ,picarr:macroproduct.PID601_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}