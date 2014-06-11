/**
 * Created by lishiming on 14-5-27.
 */

var macroproduct = require("../../../todaylead/todayPublic/urlmacro/macro_cid5_pid751_770");

exports.createdb = function (mongoose){
    var todayCategory = mongoose.model('todayProductPicDetail');

    var newCategory = new todayCategory({pid:751
        ,picarr:macroproduct.PID751_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:752
        ,picarr:macroproduct.PID752_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });

    var newCategory = new todayCategory({pid:753
        ,picarr:macroproduct.PID753_DETAIL
    });
    newCategory.save( function( err, silence ) {
        if( err )
        {
            console.log(err);
        }
    });
}